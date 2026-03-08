import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Heart, Target, Award, Users, Briefcase, ArrowRight } from "lucide-react";
import teamImg from "@/assets/team-about.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const About = () => {
  useEffect(() => {
    document.title = "About Us — Utkal Creator Hub | Content Marketing Agency Balasore";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary px-4 py-20 md:py-28">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl lg:text-6xl">
              About <span className="text-primary">Utkal Creator Hub</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Putting local Odisha businesses on the map — one powerful piece of content at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-8 text-3xl font-extrabold text-foreground">
              Our <span className="text-primary">Story</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Utkal Creator Hub was born from a simple observation: amazing local businesses in Balasore and across Odisha were being overlooked because they didn't have a digital presence.
              </p>
              <p>
                While big brands in metros had access to top marketing agencies, our local shops, restaurants, clinics, and travel businesses were left behind — relying solely on word of mouth in an increasingly digital world.
              </p>
              <p>
                We started Utkal Creator Hub to bridge that gap. We combine deep local market knowledge with modern tools — influencer partnerships, AI-powered video, and authentic storytelling — to give every local business the visibility they deserve.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent/50 px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { icon: Briefcase, value: "50+", label: "Businesses Helped" },
              { icon: Users, value: "100+", label: "Influencer Partners" },
              { icon: Award, value: "4+", label: "Industries Served" },
              { icon: MapPin, value: "1", label: "Mission: Balasore First" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-12 text-center text-3xl font-extrabold text-foreground">
              What <span className="text-primary">Drives Us</span>
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: MapPin, title: "Local First", desc: "We believe every Balasore business deserves world-class marketing. Your success is our mission." },
                { icon: Heart, title: "Authentic Content", desc: "We don't do fake. Every piece of content we create is rooted in real stories and genuine experiences." },
                { icon: Target, title: "Results-Driven", desc: "Vanity metrics don't pay bills. We focus on strategies that bring real customers through your door." },
              ].map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="rounded-2xl border border-border p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <v.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary px-4 py-20 md:py-28">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">
              Let's Build Something Great Together
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-10 text-primary-foreground/80">
              Whether you're a restaurant, clinic, or travel agency — we'd love to help your business grow.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 font-bold shadow-xl">
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
