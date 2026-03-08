import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Heart, Target, ArrowRight, Briefcase, Users, Award } from "lucide-react";
import teamImg from "@/assets/team-about.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const About = () => {
  useEffect(() => {
    document.title = "About Us — Utkal Creator Hub | Content Marketing Agency Balasore";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black text-foreground md:text-6xl lg:text-7xl">
              We're building Odisha's{" "}
              <span className="text-gradient">creator economy</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-lg text-muted-foreground">
              Putting local businesses on the map — one powerful piece of content at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-24 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Story</motion.p>
              <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-black text-foreground md:text-4xl">
                Born from a simple observation
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Amazing local businesses in Balasore and across Odisha were being overlooked because they didn't have a digital presence.
                </p>
                <p>
                  While big brands in metros had access to top marketing agencies, local shops, restaurants, clinics, and travel businesses were left behind — relying solely on word of mouth in an increasingly digital world.
                </p>
                <p>
                  We started Utkal Creator Hub to bridge that gap. Deep local knowledge meets modern tools — influencer partnerships, AI-powered video, and authentic storytelling.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="overflow-hidden rounded-2xl border border-border">
                <img src={teamImg} alt="Utkal Creator Hub team" className="w-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-muted/30 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { icon: Briefcase, value: "50+", label: "Businesses Helped" },
              { icon: Users, value: "100+", label: "Creator Partners" },
              { icon: Award, value: "4+", label: "Industries Served" },
              { icon: MapPin, value: "1", label: "Mission: Balasore First" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <stat.icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                <p className="text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-24 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Values</p>
              <h2 className="text-4xl font-black text-foreground md:text-5xl">What drives us</h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: MapPin, title: "Local First", desc: "Every Balasore business deserves world-class marketing. Your success is our mission." },
                { icon: Heart, title: "Authentic Content", desc: "We don't do fake. Every piece of content is rooted in real stories and genuine experiences." },
                { icon: Target, title: "Results-Driven", desc: "Vanity metrics don't pay bills. We focus on strategies that bring real customers through your door." },
              ].map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:glow"
                >
                  <v.icon className="mx-auto mb-4 h-7 w-7 text-primary" />
                  <h3 className="mb-3 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border px-4 py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-6 text-4xl font-black text-foreground md:text-5xl">
              Let's build something{" "}
              <span className="text-gradient">great</span> together
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-10 text-muted-foreground">
              Whether you're a restaurant, clinic, or travel agency — we'd love to help your business grow.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" className="h-14 rounded-full px-10 text-base font-bold shadow-lg shadow-primary/20">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
