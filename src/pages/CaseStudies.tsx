import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { caseStudies } from "@/data/case-studies";
import { CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies — Real Results for Balasore Businesses | Utkal Creator Hub";
  }, []);

  return (
    <>
      <section className="bg-secondary px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl">
              <span className="text-primary">Case Studies</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real businesses. Real strategies. Real results. See how we've helped local businesses in Balasore and Odisha grow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {caseStudies.map((cs, i) => (
        <section key={cs.id} className={`px-4 py-16 md:py-20 ${i % 2 === 1 ? "bg-accent" : ""}`}>
          <div className="container mx-auto max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
                <span className="text-4xl">{cs.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{cs.industry}</h2>
                  <p className="text-sm text-muted-foreground">{cs.businessType}</p>
                </div>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeUp}>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">Background</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{cs.background}</p>

                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">The Challenge</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{cs.problem}</p>

                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">Our Strategy</h3>
                  <p className="text-sm text-muted-foreground">{cs.strategy}</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Results</h3>
                  <ul className="mb-6 space-y-3">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="font-medium">{r}</span>
                      </li>
                    ))}
                  </ul>

                  {cs.quote && (
                    <Card className="border-l-4 border-l-primary bg-background">
                      <CardContent className="p-4">
                        <p className="text-sm italic text-foreground">"{cs.quote}"</p>
                        <p className="mt-2 text-xs text-muted-foreground">— {cs.businessType}</p>
                      </CardContent>
                    </Card>
                  )}
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="mt-8">
                <Button asChild size="sm" className="font-semibold">
                  <a
                    href={getWhatsAppLink(`Hi! I saw your ${cs.industry.toLowerCase()} case study and want similar results for my business.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Want Similar Results? <ArrowRight className="ml-1 h-4 w-4" />
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
