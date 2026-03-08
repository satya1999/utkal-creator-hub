import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRight, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const Blog = () => {
  useEffect(() => {
    document.title = "Blog — Digital Marketing Tips for Odisha Businesses | Utkal Creator Hub";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary px-4 py-20 md:py-28">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="mb-4 text-4xl font-extrabold text-secondary-foreground md:text-5xl lg:text-6xl">
              <span className="text-primary">Blog</span> & Insights
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Actionable digital marketing tips and strategies for local businesses in Odisha.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group h-full border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                    <CardContent className="p-7">
                      <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        {post.category}
                      </span>
                      <h2 className="mb-3 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary">{post.title}</h2>
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                        </span>
                        <span className="inline-flex items-center text-xs font-semibold text-primary transition-colors group-hover:underline">
                          Read <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
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
