import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions - Study at Bangalore" },
      { name: "description", content: "Terms and Conditions for Study at Bangalore portal." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 py-6">
      <h1 className="text-3xl font-extrabold">Terms & Conditions</h1>
      <p className="text-sm text-muted-foreground">Last updated: October 2026</p>

      <div className="surface space-y-6 p-6 md:p-8">
        <section className="space-y-2">
          <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            By accessing or using the Study at Bangalore platform, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">2. Use of Platform & Conduct</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Users must provide accurate registration details for the Scholarship Exam. Any attempt to tamper with timed exam submissions, reverse-engineer answer keys, or automate test attempts is strictly prohibited and will result in disqualification and account termination.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">3. Scholarship & Mock Exams</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Mock tests and practice materials provided on the platform are educational preparation tools and practice simulations. Official scholarship rules, eligibility criteria, and awards are evaluated deterministically by the administration team based on verified server exam records.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">4. Intellectual Property</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            All course content, question banks, study guides, brand assets, and platform design are the property of Study at Bangalore. Unauthorized copying or redistribution is prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold">5. Modifications to Terms</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the platform after changes are posted constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
