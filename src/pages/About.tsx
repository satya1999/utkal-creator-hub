import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Heart, Target, Award, Users, Briefcase, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const About = () => {
  useEffect(() => {
    document.title = "About Us — Utkal Creator Hub | Content Marketing Agency Balasore";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl">
              About <span className="text-primary">Utkal Creator Hub</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Putting local Odisha businesses on the map — one powerful piece of content at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-bold text-foreground">
              Our Story
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground">
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
      <section className="bg-accent px-4 py-16">
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
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p className="text-3xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-8 text-center text-3xl font-bold text-foreground">
              What Drives Us
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: MapPin, title: "Local First", desc: "We believe every Balasore business deserves world-class marketing. Your success is our mission." },
                { icon: Heart, title: "Authentic Content", desc: "We don't do fake. Every piece of content we create is rooted in real stories and genuine experiences." },
                { icon: Target, title: "Results-Driven", desc: "Vanity metrics don't pay bills. We focus on strategies that bring real customers through your door." },
              ].map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold text-primary-foreground">
              Let's Build Something Great Together
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-8 text-primary-foreground/80">
              Whether you're a restaurant, clinic, or travel agency — we'd love to help your business grow.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" variant="secondary" className="font-bold">
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
