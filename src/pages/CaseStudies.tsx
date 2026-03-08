import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { caseStudies } from "@/data/case-studies";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies — Real Results for Balasore Businesses | Utkal Creator Hub";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary px-4 py-20 md:py-28">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl lg:text-6xl">
              <span className="text-primary">Case Studies</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real businesses. Real strategies. Real results. See how we've helped local businesses in Balasore and Odisha grow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {caseStudies.map((cs, i) => (
        <section key={cs.id} className={`px-4 py-20 md:py-24 ${i % 2 === 1 ? "bg-accent/50" : ""}`}>
          <div className="container mx-auto max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">{cs.icon}</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">{cs.industry}</h2>
                  <p className="text-sm text-muted-foreground">{cs.businessType}</p>
                </div>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2">
                <motion.div variants={fadeUp} className="space-y-6">
                  <div>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Background</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cs.background}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">The Challenge</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cs.problem}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Our Strategy</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{cs.strategy}</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Results</h3>
                    <ul className="space-y-3">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="font-medium">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {cs.quote && (
                    <Card className="border-l-4 border-l-primary bg-primary/5">
                      <CardContent className="p-5">
                        <Quote className="mb-2 h-5 w-5 text-primary/50" />
                        <p className="text-sm italic leading-relaxed text-foreground">"{cs.quote}"</p>
                        <p className="mt-3 text-xs font-semibold text-muted-foreground">— {cs.businessType}</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="mt-10">
                <Button asChild className="font-semibold shadow-md">
                  <a
                    href={getWhatsAppLink(`Hi! I saw your ${cs.industry.toLowerCase()} case study and want similar results for my business.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Want Similar Results? <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default CaseStudies;
