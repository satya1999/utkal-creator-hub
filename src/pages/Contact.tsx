import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink, PHONE_DISPLAY } from "@/lib/whatsapp";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us — Book a Free Call | Utkal Creator Hub Balasore";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary px-4 py-20 md:py-28">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl lg:text-6xl">
              Let's Talk About <span className="text-primary">Growing Your Business</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Book a free discovery call or reach out directly. We reply within 2 hours during business hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 md:grid-cols-2">
            {/* WhatsApp CTA */}
            <motion.div variants={fadeUp}>
              <Card className="h-full border-2 border-primary/30 bg-primary/5 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="flex h-full flex-col items-center justify-center p-10 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="mb-3 text-2xl font-extrabold text-foreground">Chat on WhatsApp</h2>
                  <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                    The fastest way to reach us. Tap the button below and start a conversation instantly.
                  </p>
                  <Button asChild size="lg" className="w-full font-bold shadow-md shadow-primary/25">
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      Open WhatsApp Chat <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} className="space-y-5">
              <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">Call Us</h3>
                    <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">Location</h3>
                    <p className="text-sm text-muted-foreground">Balasore, Odisha, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon – Sat: 10:00 AM – 7:00 PM IST</p>
                    <p className="mt-1 text-xs text-muted-foreground">WhatsApp messages answered within 2 hours</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-accent/30 px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex h-64 items-center justify-center rounded-2xl border border-border bg-muted">
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
