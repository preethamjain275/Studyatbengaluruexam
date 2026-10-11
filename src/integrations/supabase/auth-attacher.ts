import { createMiddleware } from '@tanstack/react-start'
import { supabase } from './client'

// Registered as a global `functionMiddleware` in `src/start.ts` so
// the browser attaches the bearer token to serverFn RPCs.
export const attachSupabaseAuth = createMiddleware({ type: 'function' }).client(
  async ({ next }) => {
    let token: string | undefined

    try {
      const { data } = await supabase.auth.getSession()
      token = data.session?.access_token
    } catch {}

    // If no active Supabase JWT, attach local user session if signed in
    if (!token && typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem('study_user_session')
        if (raw) {
          const parsed = JSON.parse(raw)
          if (parsed && (parsed.id || parsed.email)) {
            token = `local:${btoa(encodeURIComponent(raw))}`
          }
        }
      } catch {}
    }

    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
  },
)
