import { Link } from "react-router-dom";
import { getWhatsAppLink, PHONE_DISPLAY } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="mb-5 inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-black text-primary-foreground">U</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Utkal<span className="text-primary">Creator</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Putting local Odisha businesses on the digital map through creator-driven marketing.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Navigate</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Influencer Marketing</li>
            <li>AI Video & Animation</li>
            <li>Real Shop Videos</li>
            <li>Content Strategy</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Connect</h4>
          <div className="space-y-3 text-sm">
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="block text-muted-foreground transition-colors hover:text-foreground"
            >
              {PHONE_DISPLAY}
            </a>
            <p className="text-muted-foreground">Balasore, Odisha, India</p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              WhatsApp <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Utkal Creator Hub. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">Balasore, Odisha 🇮🇳</p>
      </div>
    </div>
  </footer>
);

export default Footer;
