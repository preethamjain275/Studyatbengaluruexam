import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Study at Bangalore" },
      { name: "description", content: "Privacy Policy for Study at Bangalore portal." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-6">
      <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Last updated: October 2026</p>

      <div className="surface space-y-6 p-6 md:p-8">
        <section className="space-y-2">
          <h2 className="text-xl font-bold">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Study at Bangalore collects information you provide directly, such as when you create an account, sign in via email or Google, register for the Scholarship Exam, or submit practice tests. This includes your name, email address, and account credentials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">2. How We Use Your Information</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We use your data to manage your account, store practice test attempts, compute performance analytics, present scholarship results, and improve our platform features. We do not sell your personal information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">3. Data Security and Integrity</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We maintain strict administrative and technical measures to protect student data and exam records. Attempts, answers, and scores are processed securely using encrypted server authentication.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">4. Cookies and Local Storage</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We use essential local storage and authentication cookies to maintain your login session, save dark/light theme preferences, and keep progress saved locally during exam attempts.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">5. Contact Us</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you have any questions regarding this Privacy Policy or your account data, please contact the Study at Bangalore administration team.
          </p>
        </section>
      </div>
    </div>
  );
}
