import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Clock, TrendingUp, Users, Video, Bot, Camera,
  MapPin, Heart, Star, Zap, ArrowRight, Phone, ChevronRight,
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import heroBusiness from "@/assets/hero-business.jpg";
import influencerImg from "@/assets/influencer-marketing.jpg";
import aiVideoImg from "@/assets/ai-video.jpg";
import realShopImg from "@/assets/real-shop-video.jpg";
import caseRestaurantImg from "@/assets/case-restaurant.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const Index = () => {
  useEffect(() => {
    document.title = "Utkal Creator Hub — Influencer Marketing Agency in Balasore, Odisha";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/10" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />

        <div className="container relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.span
                variants={fadeUp}
                className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary"
              >
                🚀 We only take 5 new clients per month
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl"
              >
                Get More Customers With{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Local Influencer Marketing
                </span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mb-8 max-w-lg text-lg text-muted-foreground">
                We create powerful content using local influencers, AI videos, and real shop footage — so your business
                gets seen, trusted, and chosen by customers in Balasore.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-8 text-base font-bold shadow-lg shadow-primary/25">
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Book Your Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold">
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                {["50+ Businesses Helped", "100+ Influencer Partners", "4+ Industries Served"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="relative">
                <img
                  src={heroBusiness}
                  alt="Local business owner in Balasore smiling in front of their shop"
                  className="rounded-2xl shadow-2xl shadow-primary/10"
                />
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-background p-4 shadow-lg">
                  <p className="text-xs font-bold text-primary">40% More Footfall</p>
                  <p className="text-[10px] text-muted-foreground">Average client result</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
              Are You Still Relying on <span className="text-primary">Word of Mouth?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-14 max-w-xl text-muted-foreground">
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
                <Card className="group h-full border-2 border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent transition-colors group-hover:bg-primary/10">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-card-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-accent/50 px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
              We Do It <span className="text-primary">All For You</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-14 max-w-xl text-muted-foreground">
              Three powerful services designed to grow your local business.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 md:grid-cols-3">
            {[
              { img: influencerImg, title: "Influencer Marketing", desc: "We connect you with the right local voices who your customers already trust.", alt: "Indian influencer creating food content" },
              { img: aiVideoImg, title: "AI Video & Animation", desc: "Professional content without expensive shoots. Stunning videos powered by AI.", alt: "AI video editing on laptop" },
              { img: realShopImg, title: "Real Shop Videos", desc: "Authentic footage of your business that builds trust instantly with viewers.", alt: "Videographer filming inside local shop" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="group h-full overflow-hidden border-none bg-background shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={item.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:underline">
                      Learn more <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
              Results That <span className="text-primary">Speak for Themselves</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-14 max-w-xl text-muted-foreground">
              Real businesses in Balasore and Odisha that we've helped grow.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((cs) => (
              <motion.div key={cs.id} variants={fadeUp}>
                <Link to="/case-studies">
                  <Card className="group h-full border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                    <CardContent className="p-6">
                      <span className="mb-3 block text-4xl">{cs.icon}</span>
                      <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">{cs.industry}</h3>
                      <p className="mb-3 text-xs text-muted-foreground">{cs.businessType}</p>
                      <p className="mb-4 text-sm font-medium leading-snug text-foreground">{cs.results[0]}</p>
                      <span className="inline-flex items-center text-xs font-semibold text-primary transition-colors group-hover:underline">
                        Full story <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-secondary px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-secondary-foreground md:text-4xl">
              Why <span className="text-primary">Utkal Creator Hub?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-14 max-w-xl text-muted-foreground">
              We are local. We understand Balasore.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, title: "Local Market Knowledge", desc: "We know the streets, the people, the culture" },
              { icon: Users, title: "Category Influencers", desc: "Food, travel, health — we match the right voice" },
              { icon: Zap, title: "AI + Human Blend", desc: "Cutting-edge tech with authentic storytelling" },
              { icon: Star, title: "Proven Across Industries", desc: "Restaurants to clinics — we've done it all" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors hover:bg-primary/20">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-secondary-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
              How It <span className="text-primary">Works</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-14 max-w-xl text-muted-foreground">
              Three simple steps to transform your business.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-10">
            {[
              { step: "1", title: "Book a Free Call", desc: "Tell us about your business and goals in a quick 30-minute call." },
              { step: "2", title: "We Craft Your Strategy", desc: "We create a custom content and influencer plan tailored to your industry." },
              { step: "3", title: "Watch Your Business Grow", desc: "Sit back as new customers find you through powerful, authentic content." },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground shadow-lg shadow-primary/25">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent/50 px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="mb-14 text-3xl font-extrabold text-foreground md:text-4xl">
              What Our <span className="text-primary">Clients Say</span>
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-2">
            {caseStudies
              .filter((cs) => cs.quote)
              .map((cs) => (
                <motion.div key={cs.id} variants={fadeUp}>
                  <Card className="h-full border-none bg-background shadow-lg">
                    <CardContent className="p-8">
                      <div className="mb-4 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="mb-5 text-sm italic leading-relaxed text-foreground">"{cs.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg">
                          {cs.icon}
                        </div>
                        <p className="text-sm font-semibold text-muted-foreground">{cs.businessType}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary px-4 py-24 md:py-32">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Turn Scrollers Into Customers?
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-xl text-lg text-primary-foreground/80">
              Book your free 30-minute strategy call today. No commitment, just actionable advice for your business.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-base font-bold shadow-xl"
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
