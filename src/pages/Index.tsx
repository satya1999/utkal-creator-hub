import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Clock, TrendingUp, Users, Video, Bot, Camera, MapPin, Heart, Star, Zap, ArrowRight, Phone, ChevronRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  useEffect(() => {
    document.title = "Utkal Creator Hub — Influencer Marketing Agency in Balasore, Odisha";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              🚀 We only take 5 new clients per month
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-secondary-foreground md:text-6xl"
            >
              Get More Customers With{" "}
              <span className="text-primary">Local Influencer Marketing</span> — Built for Balasore Businesses
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              We create powerful content using local influencers, AI videos, and real shop footage — so your business
              gets seen, trusted, and chosen.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base font-bold shadow-lg">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Book Your Free Strategy Call <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base font-semibold">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Are You Still Relying on Word of Mouth?
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-12 max-w-xl text-muted-foreground">
              Most local business owners face these challenges every day.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              { icon: Clock, title: "No Time to Create Content", desc: "You're busy running your business. Who has time to shoot, edit, and post consistently?" },
              { icon: TrendingUp, title: "Competitors Are Already Ahead", desc: "Your competitors are on Instagram getting customers while you're still thinking about it." },
              { icon: Users, title: "Don't Know Who to Trust", desc: "Finding the right influencers who won't waste your money feels impossible." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="h-full border-2 border-border bg-card transition-shadow hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-card-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-accent px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              We Do It All For You
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-12 max-w-xl text-muted-foreground">
              Three powerful services designed to grow your local business.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Video, title: "Influencer Marketing", desc: "We connect you with the right local voices who your customers already trust.", emoji: "🎥" },
              { icon: Bot, title: "AI Video & Animation", desc: "Professional content without expensive shoots. Stunning videos powered by AI.", emoji: "🤖" },
              { icon: Camera, title: "Real Shop Videos", desc: "Authentic footage of your business that builds trust instantly with viewers.", emoji: "📸" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="h-full border-none bg-background shadow-md transition-shadow hover:shadow-xl">
                  <CardContent className="p-8">
                    <span className="mb-4 block text-4xl">{item.emoji}</span>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{item.desc}</p>
                    <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Results That Speak for Themselves
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-12 max-w-xl text-muted-foreground">
              Real businesses in Balasore and Odisha that we've helped grow.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((cs) => (
              <motion.div key={cs.id} variants={fadeUp}>
                <Card className="h-full border-border transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <span className="mb-3 block text-3xl">{cs.icon}</span>
                    <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">{cs.industry}</h3>
                    <p className="mb-3 text-xs text-muted-foreground">{cs.businessType}</p>
                    <p className="mb-3 text-sm font-medium text-foreground">{cs.results[0]}</p>
                    <Link to="/case-studies" className="inline-flex items-center text-xs font-semibold text-primary hover:underline">
                      Full story <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold text-secondary-foreground md:text-4xl">
              Why Utkal Creator Hub?
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-12 max-w-xl text-muted-foreground">
              We are local. We understand Balasore.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, title: "Local Market Knowledge", desc: "We know the streets, the people, the culture" },
              { icon: Users, title: "Category Influencers", desc: "Food, travel, health — we match the right voice" },
              { icon: Zap, title: "AI + Human Blend", desc: "Cutting-edge tech with authentic storytelling" },
              { icon: Star, title: "Proven Across Industries", desc: "Restaurants to clinics — we've done it all" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-secondary-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-12 max-w-xl text-muted-foreground">
              Three simple steps to transform your business.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
            {[
              { step: "1", title: "Book a Free Call", desc: "Tell us about your business and goals in a quick 30-minute call." },
              { step: "2", title: "We Craft Your Strategy", desc: "We create a custom content and influencer plan tailored to your industry." },
              { step: "3", title: "Watch Your Business Grow", desc: "Sit back as new customers find you through powerful, authentic content." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
              What Our Clients Say
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-2">
            {caseStudies
              .filter((cs) => cs.quote)
              .map((cs) => (
                <motion.div key={cs.id} variants={fadeUp}>
                  <Card className="h-full border-none bg-background shadow-md">
                    <CardContent className="p-6">
                      <Heart className="mb-3 h-5 w-5 text-primary" />
                      <p className="mb-4 text-sm italic text-foreground">"{cs.quote}"</p>
                      <p className="text-xs font-semibold text-muted-foreground">— {cs.businessType}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-5xl">
              Ready to Turn Scrollers Into Customers?
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
              Book your free 30-minute strategy call today. No commitment, just actionable advice for your business.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base font-bold shadow-lg"
              >
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Book Your Free 30-Minute Call <Phone className="ml-2 h-4 w-4" />
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
