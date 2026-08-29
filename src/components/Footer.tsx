import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] text-black py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-14 md:items-start">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-black mb-4 block">
              Lexci
            </Link>
            <p className="text-black/40 text-sm max-w-xs leading-[1.8] font-light">
              An AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities for modern enterprises.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Platform links" className="md:col-span-2 md:col-start-5">
            <h4 className="text-black/80 font-semibold mb-4 text-[12px] tracking-[0.15em]">PLATFORM</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/platform/cybersecurity", label: "Cybersecurity" },
                { href: "https://in-mind-app.vercel.app/", label: "InMind AI" },
                { href: "/capabilities", label: "Engineering" },
              ].map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black transition-colors text-sm font-light">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-black/40 hover:text-black transition-colors text-sm font-light">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links" className="md:col-span-2">
            <h4 className="text-black/80 font-semibold mb-4 text-[12px] tracking-[0.15em]">COMPANY</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/clients", label: "Clients" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black/40 hover:text-black transition-colors text-sm font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal links" className="md:col-span-2">
            <h4 className="text-black/80 font-semibold mb-4 text-[12px] tracking-[0.15em] leading-4">
              <span className="block">LEGAL</span>
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms and\nConditions" },
                { href: "/refunds", label: "Refund and\nCancellation" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-black/40 hover:text-black transition-colors text-sm font-light whitespace-pre-line">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links" className="md:col-span-2">
            <h4 className="text-black/80 font-semibold mb-4 text-[12px] tracking-[0.15em]">CONNECT</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Twitter", url: "https://twitter.com" },
                { name: "LinkedIn", url: "https://linkedin.com" },
                { name: "YouTube", url: "https://youtube.com" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/40 hover:text-black transition-colors text-sm font-light"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/[0.06] pt-6 flex flex-col md:flex-row justify-between items-center text-[11px] font-light text-black/30 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Lexci. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Built with precision. Powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
