import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, PHONE_DISPLAY } from "@/lib/whatsapp";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us — Book a Free Call | Utkal Creator Hub, Odisha";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black text-foreground md:text-6xl lg:text-7xl">
              Let's talk about{" "}
              <span className="text-gradient">growing</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-lg text-muted-foreground">
              Book a free discovery call or reach out directly. We reply within 2 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 md:grid-cols-2">
            {/* WhatsApp CTA */}
            <motion.div variants={fadeUp}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-primary/30 bg-primary/5 p-10 text-center transition-all hover:border-primary/50 hover:glow">
                <MessageCircle className="mb-5 h-10 w-10 text-primary" />
                <h2 className="mb-3 text-2xl font-black text-foreground">Chat on WhatsApp</h2>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                  The fastest way to reach us. Start a conversation instantly.
                </p>
                <Button asChild size="lg" className="w-full rounded-full font-bold">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Open WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                { icon: Phone, title: "Call Us", detail: PHONE_DISPLAY, href: `tel:${PHONE_DISPLAY.replace(/\s/g, "")}` },
                { icon: MapPin, title: "Location", detail: "Balasore, Odisha — Serving all 30 districts" },
                { icon: Clock, title: "Business Hours", detail: "Mon – Sat: 10:00 AM – 7:00 PM IST", sub: "WhatsApp replies within 2 hours" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20"
                >
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.detail}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    )}
                    {item.sub && <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-muted/30 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex h-64 items-center justify-center rounded-2xl border border-border bg-card">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">Balasore, Odisha, India</p>
                <p className="text-xs text-muted-foreground">Google Maps embed coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
