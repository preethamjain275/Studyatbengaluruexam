import { createMiddleware } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith('sb_publishable_') || value.startsWith('sb_secret_');
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    if (isNewSupabaseApiKey(supabaseKey) && headers.get('Authorization') === `Bearer ${supabaseKey}`) {
      headers.delete('Authorization');
    }

    headers.set('apikey', supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

export const requireSupabaseAuth = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {
    const SUPABASE_URL = process.env['SUPABASE_URL'] || 'https://fbyvydtakpcklthvmdrk.supabase.co';
    const SUPABASE_PUBLISHABLE_KEY = process.env['SUPABASE_PUBLISHABLE_KEY'] || 'sb_publishable_placeholder_study_bangalore';

    const request = getRequest();
    let authHeader = request?.headers?.get('authorization') || '';

    // Check cookies if no Authorization header
    if (!authHeader && request?.headers) {
      const cookieHeader = request.headers.get('cookie') || '';
      const pairs = cookieHeader.split(';').map((c) => c.trim().split('='));
      for (const [k, ...v] of pairs) {
        const val = v.join('=');
        if (k === 'study_token' && val) {
          authHeader = `Bearer ${decodeURIComponent(val)}`;
          break;
        }
      }
    }

    if (!authHeader) {
      throw new Error('Unauthorized: Authentication required');
    }

    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (!token) {
      throw new Error('Unauthorized: Authentication token is missing');
    }

    // Disallow spoofed local tokens on protected server operations
    if (token.startsWith('local:')) {
      throw new Error('Unauthorized: Local browser sessions cannot access protected server operations. Please sign in with your account.');
    }

    // Create user-scoped Supabase client that respects Postgres Row Level Security
    const supabase = createClient<Database>(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY,
      {
        global: {
          fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        auth: {
          storage: undefined,
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );

    try {
      const { data, error } = await supabase.auth.getUser(token);
      if (error || !data?.user) {
        throw new Error('Unauthorized: Invalid or expired session');
      }

      return next({
        context: {
          supabase,
          userId: data.user.id,
          claims: {
            sub: data.user.id,
            email: data.user.email,
            role: data.user.role || 'authenticated',
            user_metadata: data.user.user_metadata || {},
          } as any,
        },
      });
    } catch (e: any) {
      throw new Error(e?.message?.startsWith('Unauthorized') ? e.message : 'Unauthorized: Invalid or expired session');
    }
  },
);
