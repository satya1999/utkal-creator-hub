import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  ArrowRight, Check, X as XIcon, Star, ChevronRight,
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import ServiceCarousel from "@/components/ServiceCarousel";
import ShowreelCarousel from "@/components/ShowreelCarousel";
import HeroLeadForm from "@/components/HeroLeadForm";

// 3D Icons
import iconCall3d from "@/assets/icon-call-3d.png";
import iconStrategy3d from "@/assets/icon-strategy-3d.png";
import iconGrowth3d from "@/assets/icon-growth-3d.png";
import iconTarget3d from "@/assets/icon-target-3d.png";
import iconVideo3d from "@/assets/icon-video-3d.png";
import iconHandshake3d from "@/assets/icon-handshake-3d.png";
import iconAnalytics3d from "@/assets/icon-analytics-3d.png";
import iconTrust3d from "@/assets/icon-trust-3d.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const brands = [
  "Restaurants", "Cloud Kitchens", "Healthcare Clinics", "Travel Agencies",
  "Retail Shops", "Salons & Spas", "Gyms & Fitness", "Hotels",
];

const features = [
  {
    icon: iconTarget3d,
    title: "Hyper-Local Targeting",
    desc: "Reach customers within your city — not random followers across the country.",
  },
  {
    icon: iconVideo3d,
    title: "AI-Powered Content",
    desc: "Professional videos and reels created using cutting-edge AI at a fraction of the cost.",
  },
  {
    icon: iconHandshake3d,
    title: "Vetted Creator Network",
    desc: "100+ trusted local influencers handpicked for authenticity and engagement.",
  },
  {
    icon: iconAnalytics3d,
    title: "Real-Time Analytics",
    desc: "Track every view, click, and visit with transparent performance dashboards.",
  },
  {
    icon: iconTrust3d,
    title: "Guaranteed Results",
    desc: "We don't just promise growth — we back it with measurable KPIs and reports.",
  },
  {
    icon: iconGrowth3d,
    title: "Rapid Turnaround",
    desc: "From strategy to live content in days, not weeks. Move fast, grow faster.",
  },
];

const howItWorks = [
  {
    icon: iconCall3d,
    step: "01",
    title: "Book a Free Discovery Call",
    desc: "Share your business goals in a 30-minute call. We'll analyze your market, competition, and identify growth opportunities — completely free.",
  },
  {
    icon: iconStrategy3d,
    step: "02",
    title: "Get Your Custom Growth Plan",
    desc: "We design a tailored influencer and content strategy matched to your industry, audience, and budget. No cookie-cutter packages.",
  },
  {
    icon: iconGrowth3d,
    step: "03",
    title: "Watch Customers Walk In",
    desc: "Our creators publish, your phone rings. Track real footfall increases, new followers, and revenue growth with our reporting dashboard.",
  },
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
                className="hero-glow mb-6 text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                We Create Content
                <br />
                That <span className="text-gradient glow-text">Sells</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
                Balasore's #1 influencer marketing agency. We pair your business with trusted local creators, AI-powered video, and authentic content that drives <strong className="text-foreground">real footfall and revenue</strong>.
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
                  { val: "50+", label: "Businesses Served" },
                  { val: "100+", label: "Active Creators" },
                  { val: "2M+", label: "People Reached" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-foreground">{s.val}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <HeroLeadForm />
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

      {/* Why Choose Us — 3D Icons Grid */}
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why choose us
            </motion.p>
            <motion.h2 variants={fadeUp} className="mb-4 text-4xl font-black text-foreground md:text-5xl">
              Built for <span className="text-gradient">local businesses</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-muted-foreground">
              Everything a growing business needs to dominate their local market — without the big-agency price tag.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <motion.img
                  src={f.icon}
                  alt=""
                  className="mb-5 h-16 w-16 object-contain"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServiceCarousel />

      {/* Showreel */}
      <ShowreelCarousel />

      {/* How It Works — 3D Icons */}
      <section className="border-y border-border bg-muted/30 px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Simple Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="mb-4 text-4xl font-black text-foreground md:text-5xl">
              Three steps to <span className="text-gradient">more customers</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto max-w-lg text-muted-foreground">
              No long contracts, no confusing jargon. Just a clear path from strategy to results.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative text-center"
              >
                {/* Connector line */}
                {i < howItWorks.length - 1 && (
                  <div className="absolute right-0 top-16 hidden h-0.5 w-8 translate-x-full bg-border md:block" />
                )}
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-accent">
                  <motion.img
                    src={item.icon}
                    alt=""
                    className="h-20 w-20 object-contain"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">
                  Step {item.step}
                </span>
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The difference
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-foreground md:text-5xl">
              Old way vs <span className="text-gradient">Our way</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="p-5 text-left text-sm font-medium text-muted-foreground">Feature</th>
                    <th className="p-5 text-center text-sm font-medium text-muted-foreground">Traditional Ads</th>
                    <th className="p-5 text-center text-sm font-bold text-primary">Utkal Creator Hub</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Reaches your local audience", false, true],
                    ["Budget-friendly (from ₹5K)", false, true],
                    ["Data-driven decisions", false, true],
                    ["AI-powered video content", false, true],
                    ["Real influencer network", false, true],
                    ["Measurable ROI & reports", false, true],
                    ["Live in days, not weeks", false, true],
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
      <section className="border-t border-border bg-muted/30 px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 flex items-end justify-between">
            <div>
              <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Case Studies
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-black text-foreground md:text-5xl">
                Real businesses, <span className="text-gradient">real growth</span>
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

      {/* Testimonials */}
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16 text-center">
            <motion.p variants={fadeUp} className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-foreground md:text-5xl">
              Loved by <span className="text-gradient">local businesses</span>
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg">
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
              Join 50+ Balasore businesses already growing with creator-powered marketing. Book your free strategy call today.
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
