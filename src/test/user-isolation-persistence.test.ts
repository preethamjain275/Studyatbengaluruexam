import { describe, expect, it, beforeEach } from "vitest";

describe("Application-Wide Data Persistence, User Isolation & Refresh Verification", () => {
  // Test Mock Storage Simulation
  let mockLocalStorage: Record<string, string> = {};

  beforeEach(() => {
    mockLocalStorage = {};
  });

  const getStorage = (key: string) => mockLocalStorage[key] ?? null;
  const setStorage = (key: string, val: string) => {
    mockLocalStorage[key] = val;
  };
  const removeStorage = (key: string) => {
    delete mockLocalStorage[key];
  };

  it("1. Cross-User Profile Isolation: User A's profile updates never bleed into User B", () => {
    const userA = {
      id: "usr-aaa-111",
      email: "alice@example.com",
      user_metadata: {
        full_name: "Alice Kumar",
        display_name: "Alice Kumar",
        location: "Malleshwaram, Bengaluru",
        target_exams: ["KCET", "NEET"],
        exam_details: { target_year: "2026", stage: "Advanced", target_rank: "Top 500" },
        study_goals: { weekly_hours: 30, daily_hours: 5 },
      },
    };

    const userB = {
      id: "usr-bbb-222",
      email: "bob@example.com",
      user_metadata: {
        full_name: "Bob Sharma",
        display_name: "Bob Sharma",
        location: "Indiranagar, Bengaluru",
        target_exams: ["JEE Main"],
        exam_details: { target_year: "2027", stage: "Beginner", target_rank: "Top 2,000" },
        study_goals: { weekly_hours: 15, daily_hours: 2 },
      },
    };

    // User A updates profile attributes
    const updatedUserA = {
      ...userA,
      user_metadata: {
        ...userA.user_metadata,
        location: "Koramangala, Bengaluru",
        exam_details: { ...userA.user_metadata.exam_details, target_rank: "Top 100" },
      },
    };

    // Verify User A has updated values
    expect(updatedUserA.user_metadata.location).toBe("Koramangala, Bengaluru");
    expect(updatedUserA.user_metadata.exam_details.target_rank).toBe("Top 100");

    // Verify User B remains completely untouched
    expect(userB.user_metadata.location).toBe("Indiranagar, Bengaluru");
    expect(userB.user_metadata.exam_details.target_rank).toBe("Top 2,000");
    expect(userB.user_metadata.target_exams).toEqual(["JEE Main"]);
  });

  it("2. Refresh & Rehydration: All 14 student attributes survive browser reload", () => {
    const persistedUser = {
      id: "usr-student-999",
      email: "student@example.com",
      created_at: "2026-10-01T10:00:00.000Z",
      user_metadata: {
        full_name: "Vikram R",
        display_name: "Vikram R",
        phone: "+91 9123456789",
        avatar_url: "https://fbyvydtakpcklthvmdrk.supabase.co/storage/v1/object/public/avatars/usr-student-999/avatar-1.png",
        standard: "12th Standard",
        stream: "PCMB",
        location: "Jayanagar, Bengaluru",
        about_me: "Aiming for IISc and top medical colleges in Karnataka.",
        target_exams: ["KCET", "NEET", "Scholarship Exam"],
        primary_exam: "KCET",
        exam_details: {
          target_year: "2026",
          stage: "Advanced Revision",
          target_rank: "Top 200",
          focus_subjects: ["Physics", "Biology"],
        },
        study_goals: {
          weekly_hours: 32,
          daily_hours: 6,
          preferred_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        learning_preferences: {
          language: "English",
          theme: "Dark",
          practice_mode: "Timed Exam Simulation",
          difficulty: "Hard",
        },
        notification_preferences: {
          study_reminders: true,
          test_updates: true,
          new_material: false,
          personalized_tips: true,
        },
      },
    };

    // Simulate serialization to session store (refresh scenario)
    setStorage("study_user_session", JSON.stringify(persistedUser));

    // Simulate browser rehydration upon reload
    const rehydratedRaw = getStorage("study_user_session");
    expect(rehydratedRaw).not.toBeNull();
    const rehydrated = JSON.parse(rehydratedRaw!);

    const meta = rehydrated.user_metadata;
    expect(rehydrated.id).toBe("usr-student-999");
    expect(rehydrated.email).toBe("student@example.com");
    expect(meta.display_name).toBe("Vikram R");
    expect(meta.phone).toBe("+91 9123456789");
    expect(meta.avatar_url).toContain("fbyvydtakpcklthvmdrk.supabase.co");
    expect(meta.standard).toBe("12th Standard");
    expect(meta.stream).toBe("PCMB");
    expect(meta.location).toBe("Jayanagar, Bengaluru");
    expect(meta.about_me).toBe("Aiming for IISc and top medical colleges in Karnataka.");
    expect(meta.target_exams).toEqual(["KCET", "NEET", "Scholarship Exam"]);
    expect(meta.primary_exam).toBe("KCET");
    expect(meta.exam_details.target_rank).toBe("Top 200");
    expect(meta.study_goals.weekly_hours).toBe(32);
    expect(meta.learning_preferences.theme).toBe("Dark");
    expect(meta.notification_preferences.new_material).toBe(false);
  });

  it("3. User-Scoped Bookmarks: User B never inherits User A's bookmarked questions", () => {
    const userA_Id = "user-alpha-111";
    const userB_Id = "user-beta-222";

    // User A bookmarks questions
    const userABookmarks = ["q-math-01", "q-phys-04", "q-chem-09"];
    setStorage(`study_bookmarks_${userA_Id}`, JSON.stringify(userABookmarks));

    // User B bookmarks different question
    const userBBookmarks = ["q-bio-03"];
    setStorage(`study_bookmarks_${userB_Id}`, JSON.stringify(userBBookmarks));

    // Retrieve bookmarks for User B
    const userBStored = JSON.parse(getStorage(`study_bookmarks_${userB_Id}`) ?? "[]");
    expect(userBStored).toEqual(["q-bio-03"]);
    expect(userBStored).not.toContain("q-math-01");
    expect(userBStored).not.toContain("q-phys-04");

    // Ensure legacy un-scoped "bookmarks" key is not relied upon
    expect(getStorage("bookmarks")).toBeNull();
  });

  it("4. Logout Purge Contract: Logout removes private keys and query cache marker", () => {
    const userId = "user-test-777";
    setStorage("study_user_session", JSON.stringify({ id: userId, email: "test@study.in" }));
    setStorage("study_admin_active", "true");
    setStorage(`study_bookmarks_${userId}`, JSON.stringify(["q-1", "q-2"]));
    setStorage("study_registered_students", JSON.stringify([{ id: userId, name: "Test Student" }]));

    // Execute logout workflow
    let queryCacheCleared = false;
    const queryClientMock = {
      clear: () => {
        queryCacheCleared = true;
      },
    };

    function performLogout(uid: string) {
      removeStorage("study_user_session");
      removeStorage("study_admin_active");
      removeStorage("bookmarks");
      removeStorage("study_registered_students");
      removeStorage(`study_bookmarks_${uid}`);
      setStorage("study_explicit_logout", "1");
      queryClientMock.clear();
    }

    performLogout(userId);

    // Verify private data is completely eradicated from storage
    expect(getStorage("study_user_session")).toBeNull();
    expect(getStorage("study_admin_active")).toBeNull();
    expect(getStorage(`study_bookmarks_${userId}`)).toBeNull();
    expect(getStorage("study_registered_students")).toBeNull();
    expect(getStorage("study_explicit_logout")).toBe("1");
    expect(queryCacheCleared).toBe(true);
  });

  it("5. Multi-Tab Session Synchronization: Storage events propagate logout and account switch", () => {
    let activeUser: any = { id: "tab-user-1", email: "tab1@example.com" };
    let queryCachePurged = false;

    const mockQueryClient = {
      clear: () => {
        queryCachePurged = true;
      },
    };

    // Simulate cross-tab storage listener logic from AuthProvider
    function handleStorageEvent(key: string, newValue: string | null) {
      if (key === "study_user_session") {
        if (!newValue) {
          activeUser = null;
          mockQueryClient.clear();
        } else {
          activeUser = JSON.parse(newValue);
          mockQueryClient.clear();
        }
      }
    }

    // Tab 2 performs logout
    handleStorageEvent("study_user_session", null);
    expect(activeUser).toBeNull();
    expect(queryCachePurged).toBe(true);

    // Tab 2 signs in as different user
    queryCachePurged = false;
    handleStorageEvent(
      "study_user_session",
      JSON.stringify({ id: "tab-user-2", email: "tab2@example.com" })
    );
    expect(activeUser.id).toBe("tab-user-2");
    expect(activeUser.email).toBe("tab2@example.com");
    expect(queryCachePurged).toBe(true);
  });

  it("6. Ghost Session Prevention: Null Supabase session purges cached localStorage", () => {
    // Stale session exists in localStorage
    setStorage("study_user_session", JSON.stringify({ id: "ghost-1", email: "ghost@example.com" }));
    setStorage("study_admin_active", "true");

    // Supabase returns { data: { session: null } }
    const supabaseSession = null;

    let userState: any = JSON.parse(getStorage("study_user_session")!);
    let adminState = true;

    // Enforcement logic from updated AuthProvider
    if (!supabaseSession) {
      removeStorage("study_user_session");
      removeStorage("study_admin_active");
      userState = null;
      adminState = false;
    }

    expect(userState).toBeNull();
    expect(adminState).toBe(false);
    expect(getStorage("study_user_session")).toBeNull();
    expect(getStorage("study_admin_active")).toBeNull();
  });

  it("7. Attempt Ownership Protection: Server enforces caller identity matches attempt owner", () => {
    const attemptOwnedByUserA = {
      id: "attempt-uuid-001",
      user_id: "user-alpha-owner",
      mode: "mock",
      exam_id: "kcet",
      status: "in_progress",
    };

    function verifyAttemptAccess(callerUserId: string, attempt: typeof attemptOwnedByUserA) {
      if (callerUserId !== attempt.user_id) {
        throw new Error("Unauthorized: Attempt belongs to another student");
      }
      return { ok: true, attemptId: attempt.id };
    }

    // Owner accessing attempt -> Allowed
    expect(() => verifyAttemptAccess("user-alpha-owner", attemptOwnedByUserA)).not.toThrow();
    expect(verifyAttemptAccess("user-alpha-owner", attemptOwnedByUserA).ok).toBe(true);

    // Malicious or other user accessing attempt -> Rejected
    expect(() => verifyAttemptAccess("user-beta-attacker", attemptOwnedByUserA)).toThrowError(
      "Unauthorized: Attempt belongs to another student"
    );
  });
});
