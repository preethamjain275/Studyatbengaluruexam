export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      announcements: {
        Row: {
          active: boolean | null
          badge: string | null
          created_at: string | null
          id: string
          link: string | null
          message: string
          title: string
        }
        Insert: {
          active?: boolean | null
          badge?: string | null
          created_at?: string | null
          id?: string
          link?: string | null
          message: string
          title: string
        }
        Update: {
          active?: boolean | null
          badge?: string | null
          created_at?: string | null
          id?: string
          link?: string | null
          message?: string
          title?: string
        }
        Relationships: []
      }
      app_settings: {
        Row: {
          key: string
          updated_at: string | null
          value: Json
        }
        Insert: {
          key: string
          updated_at?: string | null
          value: Json
        }
        Update: {
          key?: string
          updated_at?: string | null
          value?: Json
        }
        Relationships: []
      }
      attempts: {
        Row: {
          answers: Json
          correct_count: number | null
          created_at: string
          deadline: string
          events: Json
          exam_id: string
          id: string
          incorrect_count: number | null
          level: string
          max_score: number | null
          mode: string
          percent: number | null
          percentage: number | null
          preset_id: string
          question_ids: string[]
          result: Json | null
          score: number | null
          started_at: string
          status: string
          statuses: Json
          submitted_at: string | null
          total_questions: number | null
          track: string
          unanswered_count: number | null
          user_id: string
        }
        Insert: {
          answers?: Json
          correct_count?: number | null
          created_at?: string
          deadline: string
          events?: Json
          exam_id: string
          id?: string
          incorrect_count?: number | null
          level?: string
          max_score?: number | null
          mode: string
          percent?: number | null
          percentage?: number | null
          preset_id?: string
          question_ids: string[]
          result?: Json | null
          score?: number | null
          started_at?: string
          status?: string
          statuses?: Json
          submitted_at?: string | null
          total_questions?: number | null
          track?: string
          unanswered_count?: number | null
          user_id: string
        }
        Update: {
          answers?: Json
          correct_count?: number | null
          created_at?: string
          deadline?: string
          events?: Json
          exam_id?: string
          id?: string
          incorrect_count?: number | null
          level?: string
          max_score?: number | null
          mode?: string
          percent?: number | null
          percentage?: number | null
          preset_id?: string
          question_ids?: string[]
          result?: Json | null
          score?: number | null
          started_at?: string
          status?: string
          statuses?: Json
          submitted_at?: string | null
          total_questions?: number | null
          track?: string
          unanswered_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          created_at: string | null
          event: string
          id: string
          payload: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event: string
          id?: string
          payload?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          event?: string
          id?: string
          payload?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          about_me: string | null
          avatar_url: string | null
          created_at: string | null
          display_name: string | null
          email: string | null
          exam_details: Json | null
          id: string
          learning_preferences: Json | null
          location: string | null
          notification_preferences: Json | null
          phone: string | null
          primary_exam: string | null
          standard: string | null
          stream: string | null
          study_goals: Json | null
          target_exams: string[] | null
          updated_at: string | null
        }
        Insert: {
          about_me?: string | null
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          exam_details?: Json | null
          id: string
          learning_preferences?: Json | null
          location?: string | null
          notification_preferences?: Json | null
          phone?: string | null
          primary_exam?: string | null
          standard?: string | null
          stream?: string | null
          study_goals?: Json | null
          target_exams?: string[] | null
          updated_at?: string | null
        }
        Update: {
          about_me?: string | null
          avatar_url?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          exam_details?: Json | null
          id?: string
          learning_preferences?: Json | null
          location?: string | null
          notification_preferences?: Json | null
          phone?: string | null
          primary_exam?: string | null
          standard?: string | null
          stream?: string | null
          study_goals?: Json | null
          target_exams?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          body: string
          chapter: string
          class_level: string
          correct: Json
          created_at: string
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          exam_ids: string[]
          explanation: string
          id: string
          is_previous_year: boolean
          media: Json | null
          options: Json
          qtype: Database["public"]["Enums"]["question_type"]
          solution_steps: Json
          source: string
          source_year: number | null
          subject: string
          syllabus_mapping: string
          syllabus_year: number
          topic: string
          verification_status: Database["public"]["Enums"]["verification_status"]
        }
        Insert: {
          body: string
          chapter: string
          class_level?: string
          correct: Json
          created_at?: string
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          exam_ids: string[]
          explanation?: string
          id?: string
          is_previous_year?: boolean
          media?: Json | null
          options?: Json
          qtype?: Database["public"]["Enums"]["question_type"]
          solution_steps?: Json
          source: string
          source_year?: number | null
          subject: string
          syllabus_mapping?: string
          syllabus_year?: number
          topic?: string
          verification_status?: Database["public"]["Enums"]["verification_status"]
        }
        Update: {
          body?: string
          chapter?: string
          class_level?: string
          correct?: Json
          created_at?: string
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          exam_ids?: string[]
          explanation?: string
          id?: string
          is_previous_year?: boolean
          media?: Json | null
          options?: Json
          qtype?: Database["public"]["Enums"]["question_type"]
          solution_steps?: Json
          source?: string
          source_year?: number | null
          subject?: string
          syllabus_mapping?: string
          syllabus_year?: number
          topic?: string
          verification_status?: Database["public"]["Enums"]["verification_status"]
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"] | string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"] | string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"] | string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_exists: { Args: never; Returns: boolean }
      claim_first_admin: { Args: never; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"] | string
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user" | "super_admin"
      difficulty_level: "easy" | "medium" | "hard" | "expert"
      question_type: "single" | "multiple" | "numerical" | "assertion_reason"
      verification_status: "draft" | "in_review" | "verified" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user", "super_admin"],
      difficulty_level: ["easy", "medium", "hard", "expert"],
      question_type: ["single", "multiple", "numerical", "assertion_reason"],
      verification_status: ["draft", "in_review", "verified", "rejected"],
    },
  },
} as const
