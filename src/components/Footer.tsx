import { Link } from "react-router-dom";
import { getWhatsAppLink, PHONE_DISPLAY } from "@/lib/whatsapp";

const Footer = () => (
  <footer className="border-t border-border bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-extrabold">
            <span className="text-primary">Utkal</span>CreatorHub
          </h3>
          <p className="text-sm opacity-80">
            Putting local Odisha businesses on the map through influencer marketing, AI video, and authentic content.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Pages</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-80 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Influencer Marketing</li>
            <li>AI Video & Animation</li>
            <li>Real Shop Videos</li>
            <li>Content Strategy</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="opacity-80">Balasore, Odisha, India</li>
            <li>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="opacity-80 hover:opacity-100">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Chat on WhatsApp →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-secondary-foreground/20 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Utkal Creator Hub. All rights reserved. | Balasore, Odisha
      </div>
    </div>
  </footer>
);

export default Footer;
