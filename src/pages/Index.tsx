import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  ArrowRight, ArrowUpRight, Check, X as XIcon, Star, ChevronRight,
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import heroBusiness from "@/assets/hero-business.jpg";
import influencerImg from "@/assets/influencer-marketing.jpg";
import aiVideoImg from "@/assets/ai-video.jpg";
import realShopImg from "@/assets/real-shop-video.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const brands = [
  "Restaurants", "Cloud Kitchens", "Healthcare Clinics", "Travel Agencies",
  "Retail Shops", "Salons & Spas", "Gyms & Fitness", "Hotels",
];

const Index = () => {
  useEffect(() => {
    document.title = "Utkal Creator Hub — Influencer Marketing Agency in Balasore, Odisha";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden px-4 py-24 md:py-32 lg:py-40">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -left-60 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/8 blur-[100px]" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Only 5 new clients per month
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                Turn Local
                <br />
                <span className="text-gradient">Creators</span> Into
                <br />
                Your Customers
              </motion.h1>

              <motion.p variants={fadeUp} className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
                We connect Balasore businesses with the right influencers, AI-powered video, and authentic content that drives real footfall.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-full px-8 text-base font-bold">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Book Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 rounded-full px-8 text-base font-medium border-border hover:bg-muted">
                  <Link to="/case-studies">View Results</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 flex items-center gap-8">
                {[
                  { val: "50+", label: "Businesses" },
                  { val: "100+", label: "Creators" },
                  { val: "4+", label: "Industries" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-foreground">{s.val}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
                <img
                  src={heroBusiness}
                  alt="Local business owner in Balasore"
                  className="relative rounded-3xl border border-border shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-5 shadow-xl">
                  <p className="text-xs font-medium text-muted-foreground">Avg. Result</p>
                  <p className="text-2xl font-black text-primary">+40%</p>
                  <p className="text-xs text-muted-foreground">More Footfall</p>
                </div>
                <div className="absolute -right-4 top-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Trusted by 50+ brands</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="border-y border-border bg-muted/50 py-5 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="whitespace-nowrap text-sm font-medium text-muted-foreground">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What we do
            </motion.p>
            <motion.h2 variants={fadeUp} className="max-w-2xl text-4xl font-black text-foreground md:text-5xl">
              Three powerful services to grow your business
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-3">
            {[
              { img: influencerImg, title: "Influencer Marketing", desc: "Connect with local creators who your customers already trust and follow.", alt: "Indian influencer creating content" },
              { img: aiVideoImg, title: "AI Video & Animation", desc: "Professional-quality content without expensive shoots. Stunning videos powered by AI.", alt: "AI video editing" },
              { img: realShopImg, title: "Real Shop Videos", desc: "Authentic behind-the-scenes footage that builds instant trust with viewers.", alt: "Videographer in local shop" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Link to="/services" className="group block">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:glow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                      <span className="inline-flex items-center text-sm font-semibold text-primary">
                        Learn more <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-y border-border bg-muted/30 px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why us
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-foreground md:text-5xl">
              Traditional Marketing vs<br />
              <span className="text-gradient">Utkal Creator Hub</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="p-5 text-left text-sm font-medium text-muted-foreground">Feature</th>
                    <th className="p-5 text-center text-sm font-medium text-muted-foreground">Traditional</th>
                    <th className="p-5 text-center text-sm font-bold text-primary">Utkal Creator Hub</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Reach local audience", false, true],
                    ["Affordable pricing", false, true],
                    ["Data-driven strategy", false, true],
                    ["AI-powered content", false, true],
                    ["Real influencer network", false, true],
                    ["Measurable ROI", false, true],
                    ["Quick turnaround", false, true],
                  ].map(([feature, trad, uch], i) => (
                    <tr key={i} className="border-b border-border last:border-0 transition-colors hover:bg-muted/50">
                      <td className="p-5 text-sm font-medium text-foreground">{feature as string}</td>
                      <td className="p-5 text-center">
                        {trad ? (
                          <Check className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <XIcon className="mx-auto h-5 w-5 text-muted-foreground/40" />
                        )}
                      </td>
                      <td className="p-5 text-center">
                        {uch ? (
                          <Check className="mx-auto h-5 w-5 text-primary" />
                        ) : (
                          <XIcon className="mx-auto h-5 w-5 text-muted-foreground/40" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 flex items-end justify-between">
            <div>
              <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Results
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-black text-foreground md:text-5xl">
                Proven Results
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="hidden sm:block">
              <Button asChild variant="outline" className="rounded-full border-border">
                <Link to="/case-studies">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((cs) => (
              <motion.div key={cs.id} variants={fadeUp}>
                <Link to="/case-studies" className="group block">
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:glow">
                    <span className="mb-4 block text-3xl">{cs.icon}</span>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">{cs.industry}</p>
                    <p className="mb-3 text-xs text-muted-foreground">{cs.businessType}</p>
                    <p className="mb-5 text-sm font-medium leading-snug text-foreground">{cs.results[0]}</p>
                    <span className="inline-flex items-center text-xs font-semibold text-primary group-hover:underline">
                      Read more <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border bg-muted/30 px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-foreground md:text-5xl">
              How it works
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-0">
            {[
              { step: "01", title: "Book a Free Call", desc: "Tell us about your business and goals in a quick 30-minute discovery call." },
              { step: "02", title: "We Craft Your Strategy", desc: "We create a custom content and influencer plan tailored to your industry and budget." },
              { step: "03", title: "Watch Your Business Grow", desc: "Sit back as new customers find you through powerful, authentic content." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="flex items-start gap-8 border-l-2 border-border py-10 pl-8 last:border-primary"
              >
                <span className="text-4xl font-black text-muted-foreground/30">{item.step}</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="max-w-md text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-foreground md:text-5xl">
              What clients say
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-2">
            {caseStudies
              .filter((cs) => cs.quote)
              .map((cs) => (
                <motion.div key={cs.id} variants={fadeUp}>
                  <div className="rounded-2xl border border-border bg-card p-8">
                    <div className="mb-5 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-6 text-base leading-relaxed text-foreground">"{cs.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg">
                        {cs.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{cs.businessType}</p>
                        <p className="text-xs text-muted-foreground">{cs.industry}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-t border-border px-4 py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-6 text-4xl font-black text-foreground sm:text-5xl md:text-6xl">
              Ready to turn scrollers into{" "}
              <span className="text-gradient">customers?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
              Book your free 30-minute strategy call today. No commitment, just actionable advice for your business.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button asChild size="lg" className="h-14 rounded-full px-10 text-base font-bold shadow-lg shadow-primary/20">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Book Your Free Call <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
