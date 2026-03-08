import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { caseStudies } from "@/data/case-studies";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies — Real Results for Balasore Businesses | Utkal Creator Hub";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Case Studies
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black text-foreground md:text-6xl lg:text-7xl">
              Real <span className="text-gradient">results</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-lg text-muted-foreground">
              Real businesses. Real strategies. Real growth. See how we've helped local businesses thrive.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {caseStudies.map((cs, i) => (
        <section
          key={cs.id}
          className={`px-4 py-24 md:py-28 ${i % 2 === 1 ? "border-y border-border bg-muted/30" : ""}`}
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10 flex items-center gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card text-3xl">
                  {cs.icon}
                </span>
                <div>
                  <h2 className="text-2xl font-black text-foreground md:text-3xl">{cs.industry}</h2>
                  <p className="text-sm text-muted-foreground">{cs.businessType}</p>
                </div>
              </motion.div>

              <div className="grid gap-10 md:grid-cols-2">
                <motion.div variants={fadeUp} className="space-y-8">
                  {[
                    { label: "Background", text: cs.background },
                    { label: "The Challenge", text: cs.problem },
                    { label: "Our Strategy", text: cs.strategy },
                  ].map((block) => (
                    <div key={block.label}>
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{block.label}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{block.text}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Results</h3>
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
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                      <Quote className="mb-3 h-5 w-5 text-primary/50" />
                      <p className="text-sm italic leading-relaxed text-foreground">"{cs.quote}"</p>
                      <p className="mt-3 text-xs font-semibold text-muted-foreground">— {cs.businessType}</p>
                    </div>
                  )}
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="mt-10">
                <Button asChild className="rounded-full font-semibold">
                  <a
                    href={getWhatsAppLink(`Hi! I saw your ${cs.industry.toLowerCase()} case study and want similar results.`)}
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
