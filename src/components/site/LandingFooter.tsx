import { Link } from "@tanstack/react-router";
import { Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const MORE_EXPLORE = [
  { label: "Blog", href: "#revision", title: "Study guides & revision sheets" },
  { label: "Courses", href: "#scholarship-exam", title: "KCET, NEET, JEE & COMEDK streams" },
  { label: "Colleges", href: "#scholarship-exam", title: "College admission & scholarships" },
  { label: "Practice Bank", href: "#practice", title: "Topic-wise questions across 4 levels" },
  { label: "Mock Tests", href: "#mock-tests", title: "Timed full-length mock exams" },
] as const;

const QUICK_LINKS: Array<{ label: string; href?: string; to?: string }> = [
  { label: "About Us", href: "#home" },
  { label: "Contact Us", href: "#contact" },
  { label: "Referral Partner", href: "mailto:studyatbengaluru@gmail.com?subject=Referral%20Partner%20Inquiry" },
  { label: "Scholarship Exam", to: "/scholarship-exam" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
];

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-label="Site Footer"
      className="w-full bg-gradient-to-b from-[#0a0f1d] via-[#060913] to-[#03050a] text-slate-300 border-t border-slate-800/80 transition-colors"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-28 xl:pb-12">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Brand & Platform Description */}
          <div className="space-y-4 lg:col-span-4">
            <Link to="/" className="inline-block transition-opacity hover:opacity-90" aria-label="Study at Bengaluru Home">
              <Logo />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Discover top colleges and universities worldwide with Study At Bengaluru. Preparing students for KCET, NEET, JEE, COMEDK, and merit scholarships.
            </p>
          </div>

          {/* Column 2: More to Explore */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-base font-bold text-white tracking-tight">More to Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {MORE_EXPLORE.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    title={item.title}
                    className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-150 group"
                  >
                    <span className="text-slate-500 mr-2 text-xs select-none group-hover:text-primary transition-colors">•</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-base font-bold text-white tracking-tight">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-150 group"
                    >
                      <span className="text-slate-500 mr-2 text-xs select-none group-hover:text-primary transition-colors">•</span>
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href || "#"}
                      className="inline-flex items-center text-slate-400 hover:text-white transition-colors duration-150 group"
                    >
                      <span className="text-slate-500 mr-2 text-xs select-none group-hover:text-primary transition-colors">•</span>
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us & Social Channels */}
          <div className="space-y-4 lg:col-span-4">
            <h3 className="text-base font-bold text-white tracking-tight">Contact Us</h3>
            <div className="space-y-1.5 text-sm leading-relaxed text-slate-300">
              <p className="font-semibold text-white">Study at Bengaluru</p>
              <p className="text-slate-400">#4, Ground Floor, 3rd Main,</p>
              <p className="text-slate-400">Ganganagar Extension, RT Nagar,</p>
              <p className="text-slate-400">Bangalore 560 032</p>
            </div>

            {/* Clickable Phone and Email */}
            <div className="space-y-2 pt-2">
              <div>
                <a
                  href="tel:9148141414"
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-rose-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">9148141414</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:studyatbengaluru@gmail.com"
                  className="inline-flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 text-slate-400 shrink-0 group-hover:text-white group-hover:scale-110 transition-transform" />
                  <span className="font-medium">studyatbengaluru@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Media Row matching screenshot (Facebook, LinkedIn, Twitter/X, Pinterest, Tumblr, Reddit) */}
            <div className="pt-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105 transition-all shadow-xs"
                >
                  <Facebook className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105 transition-all shadow-xs"
                >
                  <Linkedin className="h-4 w-4" />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105 transition-all shadow-xs"
                >
                  <Twitter className="h-4 w-4" />
                </a>

                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a
                  href="https://tumblr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tumblr"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.563 24c-5.093 0-7.031-2.756-7.031-6.415V10.63H4.72V7.126c2.812-.89 4.298-2.906 4.636-5.45H12.3v5.032h4.545v3.922H12.3v6.782c0 1.838.892 2.625 2.457 2.625 1.008 0 2.05-.333 2.757-.75l.93 3.656c-1.398.665-3.084 1.057-3.88 1.057z" />
                  </svg>
                </a>

                <a
                  href="https://reddit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Reddit"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-105 transition-all shadow-xs"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.56 8 13.25c0 .688.56 1.25 1.25 1.25.688 0 1.25-.56 1.25-1.25 0-.688-.56-1.25-1.25-1.25zm5.5 0c-.688 0-1.25.56-1.25 1.25 0 .688.56 1.25 1.25 1.25.688 0 1.25-.56 1.25-1.25 0-.688-.56-1.25-1.25-1.25zm-5.465 4.004a.438.438 0 0 0-.05.617c.563.633 1.558.98 2.765.98 1.207 0 2.202-.347 2.765-.98a.44.44 0 0 0-.05-.617.438.438 0 0 0-.617.05c-.417.47-1.22.71-2.098.71-.878 0-1.681-.24-2.098-.71a.436.436 0 0 0-.617-.05z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="mt-12 sm:mt-14 mb-8 border-t border-slate-800/80" />

        {/* Bottom Legal & Attribution Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center sm:text-right text-xs sm:text-sm text-slate-400">
            © {currentYear} Study At Bengaluru Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
