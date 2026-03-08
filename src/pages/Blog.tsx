import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";
import { ArrowUpRight, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — Digital Marketing Tips for Odisha Businesses | Utkal Creator Hub";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Insights
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black text-foreground md:text-6xl lg:text-7xl">
              Blog & <span className="text-gradient">Insights</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-lg text-muted-foreground">
              Actionable digital marketing tips for local businesses in Odisha.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:glow">
                    <span className="mb-4 inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <h2 className="mb-3 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                      <span className="inline-flex items-center text-xs font-semibold text-primary">
                        Read <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
