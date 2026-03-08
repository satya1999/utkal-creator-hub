import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Heart, Target, ArrowRight, Briefcase, Users, Award, Globe } from "lucide-react";
import teamImg from "@/assets/team-about.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const odishaDistricts = [
  "Balasore", "Bhubaneswar", "Cuttack", "Puri", "Rourkela",
  "Sambalpur", "Berhampur", "Bhadrak", "Angul", "Jajpur",
  "Koraput", "Jharsuguda", "Kendrapara", "Rayagada", "Dhenkanal",
];

const About = () => {
  useEffect(() => {
    document.title = "About Us — Utkal Creator Hub | Odisha's Leading Creator Marketing Agency";
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
              Building Odisha's{" "}
              <span className="text-gradient">creator economy</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-lg text-muted-foreground">
              From Balasore to Berhampur, Puri to Rourkela — putting every Odisha business on the digital map.
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
                Born from a simple observation in Odisha
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Amazing local businesses across Odisha's 30 districts were being overlooked because they didn't have a digital presence. A brilliant restaurant in Balasore, a talented bridal artist in Berhampur, a modern gym in Rourkela — all invisible online.
                </p>
                <p>
                  While big brands in metros like Mumbai and Delhi had access to top marketing agencies, businesses in Cuttack, Sambalpur, Puri, and Bhadrak were left behind — relying solely on word of mouth in an increasingly digital Odisha.
                </p>
                <p>
                  We started Utkal Creator Hub to bridge that gap across every district. Deep local knowledge of Odia culture and markets meets modern tools — influencer partnerships, AI-powered video, and authentic storytelling that resonates with Odia audiences.
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
                <img src={teamImg} alt="Utkal Creator Hub team in Odisha" className="w-full object-cover" loading="lazy" />
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
              { icon: Briefcase, value: "50+", label: "Odisha Businesses Helped" },
              { icon: Users, value: "100+", label: "Odisha Creator Partners" },
              { icon: Globe, value: "15+", label: "Districts Covered" },
              { icon: MapPin, value: "30", label: "Target: All 30 Districts" },
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

      {/* Districts We Serve */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Reach</p>
              <h2 className="text-3xl font-black text-foreground md:text-4xl">Serving businesses across Odisha</h2>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
              {odishaDistricts.map((d) => (
                <span key={d} className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5">
                  📍 {d}
                </span>
              ))}
            </motion.div>
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
                { icon: MapPin, title: "Odisha First", desc: "Every business in every Odisha district deserves world-class marketing. From Malkangiri to Mayurbhanj — your success is our mission." },
                { icon: Heart, title: "Authentic Odia Content", desc: "We don't do fake. Content rooted in real Odia stories, local culture, and genuine experiences that audiences trust." },
                { icon: Target, title: "Results-Driven", desc: "Vanity metrics don't pay bills. We focus on strategies that bring real customers through your door — in your district." },
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
              Let's grow your Odisha{" "}
              <span className="text-gradient">business</span> together
            </motion.h2>
            <motion.p variants={fadeUp} className="mb-10 text-muted-foreground">
              Whether you're a restaurant in Puri, a clinic in Cuttack, or a salon in Berhampur — we'd love to help you grow.
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
