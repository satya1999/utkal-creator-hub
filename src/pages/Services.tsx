import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Video, Bot, Camera, CheckCircle2, ArrowRight } from "lucide-react";
import influencerImg from "@/assets/influencer-marketing.jpg";
import aiVideoImg from "@/assets/ai-video.jpg";
import realShopImg from "@/assets/real-shop-video.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const services = [
  {
    id: "influencer",
    img: influencerImg,
    imgAlt: "Indian influencer creating food content at a local restaurant",
    title: "Influencer Marketing",
    subtitle: "Connect with the right local voices",
    description:
      "We identify, vet, and partner with influencers who genuinely resonate with your target audience in Balasore and across Odisha. No wasted budgets on wrong fits.",
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
    imgAlt: "AI video editing software on laptop for business content",
    title: "AI Video & Animation",
    subtitle: "Professional content without expensive shoots",
    description:
      "Leverage cutting-edge AI tools to create stunning promotional videos, product showcases, and animated explainers — at a fraction of traditional production costs.",
    features: [
      "AI-enhanced promotional reels",
      "Product showcase animations",
      "Explainer & how-it-works videos",
      "Social media optimized formats (Reels, Shorts, Stories)",
      "Quick turnaround — days, not weeks",
    ],
    useCases: ["E-commerce & delivery", "Cloud kitchens", "New launches", "Festival promotions"],
  },
  {
    id: "real-shop",
    img: realShopImg,
    imgAlt: "Videographer filming inside a local Indian shop",
    title: "Real Shop & Founder Videos",
    subtitle: "Authentic footage that builds trust instantly",
    description:
      "Nothing beats real footage. We visit your business, capture the energy, the people, and the story — then turn it into compelling content your customers will love.",
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
      <section className="relative overflow-hidden bg-secondary px-4 py-20 md:py-28">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl lg:text-6xl">
              Our <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything your business needs to dominate social media locally — from influencer partnerships to AI-powered video content.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, i) => (
        <section key={service.id} className={`px-4 py-20 md:py-28 ${i % 2 === 1 ? "bg-accent/50" : ""}`}>
          <div className="container mx-auto max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10">
                <span className="mb-3 block text-5xl">{service.emoji}</span>
                <h2 className="mb-2 text-3xl font-extrabold text-foreground md:text-4xl">{service.title}</h2>
                <p className="text-lg font-medium text-primary">{service.subtitle}</p>
              </motion.div>

              <motion.p variants={fadeUp} className="mb-10 max-w-3xl text-muted-foreground leading-relaxed">
                {service.description}
              </motion.p>

              <div className="grid gap-10 md:grid-cols-2">
                <motion.div variants={fadeUp}>
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">What's Included</h3>
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
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">Best For</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((u) => (
                      <span key={u} className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
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
      <section className="relative overflow-hidden bg-primary px-4 py-20 md:py-28">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">
              Packages Start From ₹5,000/month
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-xl text-primary-foreground/80">
              Every business is different. Book a free call and we'll create a custom plan tailored to your goals and budget.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 font-bold shadow-xl">
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
