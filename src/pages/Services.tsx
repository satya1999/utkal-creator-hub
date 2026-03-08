import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import influencerImg from "@/assets/influencer-marketing.jpg";
import aiVideoImg from "@/assets/ai-video.jpg";
import realShopImg from "@/assets/real-shop-video.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    id: "influencer",
    img: influencerImg,
    imgAlt: "Indian influencer creating food content",
    title: "Influencer Marketing",
    subtitle: "Connect with the right Odisha voices",
    description: "We identify, vet, and partner with influencers who genuinely resonate with your target audience across Odisha — from Bhubaneswar and Cuttack to Balasore, Puri, and beyond.",
    features: [
      "Nano & micro-influencer partnerships (1K–50K followers)",
      "Category-specific matching — food, travel, health, lifestyle",
      "End-to-end campaign management",
      "Performance tracking & reporting",
      "Authentic content that builds real trust",
    ],
    useCases: ["Restaurants & cafés", "Retail shops", "Salons & spas", "Healthcare clinics"],
  },
  {
    id: "ai-video",
    img: aiVideoImg,
    imgAlt: "AI video editing software on laptop",
    title: "AI Video & Animation",
    subtitle: "Professional content without expensive shoots",
    description: "Leverage cutting-edge AI tools to create stunning promotional videos, product showcases, and animated explainers at a fraction of traditional costs.",
    features: [
      "AI-enhanced promotional reels",
      "Product showcase animations",
      "Explainer & how-it-works videos",
      "Social media optimized formats",
      "Quick turnaround — days, not weeks",
    ],
    useCases: ["E-commerce & delivery", "Cloud kitchens", "New launches", "Festival promotions"],
  },
  {
    id: "real-shop",
    img: realShopImg,
    imgAlt: "Videographer filming inside a local shop",
    title: "Real Shop & Founder Videos",
    subtitle: "Authentic footage that builds trust instantly",
    description: "We visit your business, capture the energy, the people, and the story — then turn it into compelling content your customers will love.",
    features: [
      "Behind-the-scenes footage",
      "Day-in-the-life founder stories",
      "Customer testimonial videos",
      "Facility & ambiance tours",
      "Google Business & social media ready",
    ],
    useCases: ["Restaurants & hotels", "Healthcare clinics", "Gyms & fitness", "Travel agencies"],
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services — Influencer Marketing & Video Content | Utkal Creator Hub";
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
              Our Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black text-foreground md:text-6xl lg:text-7xl">
              Everything you need to{" "}
              <span className="text-gradient">dominate</span> locally
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-lg text-muted-foreground">
              From influencer partnerships to AI-powered video content — we handle it all.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          className={`px-4 py-24 md:py-28 ${i % 2 === 1 ? "border-y border-border bg-muted/30" : ""}`}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="mb-12 grid items-center gap-10 md:grid-cols-2">
                <motion.div variants={fadeUp} className={i % 2 === 1 ? "md:order-last" : ""}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{`0${i + 1}`}</p>
                  <h2 className="mb-3 text-3xl font-black text-foreground md:text-4xl">{service.title}</h2>
                  <p className="mb-4 text-lg font-medium text-muted-foreground">{service.subtitle}</p>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <img src={service.img} alt={service.imgAlt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </motion.div>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <motion.div variants={fadeUp}>
                  <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">What's Included</h3>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Best For</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((u) => (
                      <span key={u} className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground">
                        {u}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border px-4 py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-4 text-4xl font-black text-foreground md:text-5xl">
              Packages from{" "}
              <span className="text-gradient">₹5,000/month</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-xl text-muted-foreground">
              Every business is different. Book a free call and we'll create a custom plan for your goals and budget.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" className="h-14 rounded-full px-10 text-base font-bold shadow-lg shadow-primary/20">
                <a href={getWhatsAppLink("Hi! I'd like to know more about your service packages.")} target="_blank" rel="noopener noreferrer">
                  Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
