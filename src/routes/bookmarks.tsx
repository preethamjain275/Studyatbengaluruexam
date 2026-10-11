import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { EmptyState, PageHeader, btnPrimary } from "@/components/site/ui";
import { useAuth } from "@/hooks/use-auth";
import { AuthRequiredCard } from "@/components/site/AuthRequiredCard";

export const Route = createFileRoute("/bookmarks")({
  head: () => ({
    meta: [
      { title: "Bookmarks - Study at Bangalore" },
      { name: "description", content: "Questions you've saved to come back to." },
      { property: "og:title", content: "Bookmarks - Study at Bangalore" },
      { property: "og:description", content: "Questions you've saved to come back to." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookmarksPage,
});

function BookmarksPage() {
  const { user, ready } = useAuth();

  if (ready && !user) {
    return <AuthRequiredCard title="Before opening this you should sign in." />;
  }

  return (
    <div>
      <PageHeader eyebrow="Bookmarks" title="Bookmarked questions">
        Personal questions saved to your account ({user?.email}).
      </PageHeader>
      <EmptyState icon={Bookmark} title="No bookmarks yet" action={<Link to="/practice" className={btnPrimary}>Go to practice</Link>}>
        Tap the bookmark icon on any question to save it here.
      </EmptyState>
    </div>
  );
}
