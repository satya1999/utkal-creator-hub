import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink, PHONE_DISPLAY } from "@/lib/whatsapp";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us — Book a Free Call | Utkal Creator Hub Balasore";
  }, []);

  return (
    <>
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl">
              Let's Talk About <span className="text-primary">Growing Your Business</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Book a free discovery call or reach out directly. We reply within 2 hours during business hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 md:grid-cols-2">
            {/* WhatsApp CTA */}
            <motion.div variants={fadeUp}>
              <Card className="h-full border-2 border-primary bg-primary/5">
                <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <MessageCircle className="mb-4 h-12 w-12 text-primary" />
                  <h2 className="mb-2 text-2xl font-bold text-foreground">Chat on WhatsApp</h2>
                  <p className="mb-6 text-sm text-muted-foreground">
                    The fastest way to reach us. Tap the button below and start a conversation instantly.
                  </p>
                  <Button asChild size="lg" className="w-full font-bold">
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      Open WhatsApp Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} className="space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">Call Us</h3>
                    <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-primary">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">Location</h3>
                    <p className="text-sm text-muted-foreground">Balasore, Odisha, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon – Sat: 10:00 AM – 7:00 PM IST</p>
                    <p className="text-xs text-muted-foreground">WhatsApp messages answered within 2 hours</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
