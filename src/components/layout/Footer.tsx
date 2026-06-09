import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-taupe text-cream/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Caked by Daphh"
                width={48}
                height={48}
                className="object-contain opacity-90"
              />
              <div>
                <p className="font-serif text-cream text-lg leading-tight">Caked</p>
                <p className="text-accent text-sm italic">by Daphh</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Handcrafted custom cakes and desserts made with love for your most cherished celebrations.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-accent transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-accent transition-colors text-sm"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream text-xs tracking-[0.2em] uppercase mb-5 font-sans">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Daphh" },
                { href: "/menu", label: "Menu" },
                { href: "/custom-cakes", label: "Custom Cakes" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Order Inquiry" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream text-xs tracking-[0.2em] uppercase mb-5 font-sans">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>
                <a href="mailto:hello@cakedbydaphh.com" className="hover:text-accent transition-colors">
                  hello@cakedbydaphh.com
                </a>
              </li>
              <li>Orders by appointment only</li>
              <li className="mt-4 pt-4 border-t border-cream/10">
                <Link href="/contact" className="btn-outline text-xs px-5 py-2.5 border-accent/50 text-accent hover:bg-accent hover:text-white">
                  Request a Cake
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center text-xs text-cream/30">
  <p>
    © {new Date().getFullYear()} Caked by Daphh. All rights reserved. Made with love.
  </p>

  <p className="mt-2">
    Website designed by{" "}
    <a
      href="https://pcapexconsulting.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:opacity-80 transition-opacity"
    >
      P&C Apex Consulting
    </a>
  </p>
</div>
