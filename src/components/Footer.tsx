import { Link } from "react-router-dom";
import { getWhatsAppLink, PHONE_DISPLAY } from "@/lib/whatsapp";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-14">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="mb-4 inline-block">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-primary">Utkal</span>CreatorHub
            </span>
          </Link>
          <p className="mb-4 text-sm leading-relaxed opacity-80">
            Putting local Odisha businesses on the map through influencer marketing, AI video, and authentic content.
          </p>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <MapPin className="h-4 w-4 text-primary" />
            Balasore, Odisha, India
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Pages</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/case-studies", label: "Case Studies" },
              { to: "/about", label: "About" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-70 transition-opacity hover:text-primary hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Services</h4>
          <ul className="space-y-2.5 text-sm opacity-70">
            <li>Influencer Marketing</li>
            <li>AI Video & Animation</li>
            <li>Real Shop Videos</li>
            <li>Content Strategy</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
                className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
              >
                <Phone className="h-4 w-4 text-primary" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
              >
                Chat on WhatsApp <ArrowRight className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-secondary-foreground/10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Utkal Creator Hub. All rights reserved. | Balasore, Odisha
      </div>
    </div>
  </footer>
);

export default Footer;
