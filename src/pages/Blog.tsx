import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog-posts";
import { getAllBlogPosts } from "@/lib/blog-storage";
import { ArrowUpRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setPosts(getAllBlogPosts());
  }, []);

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];


  useEffect(() => {
    document.title = "Blog — Digital Marketing Tips for Odisha Businesses | Utkal Creator Hub";
  }, []);

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <div className="grid-pattern absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Insights & Tips
            </motion.p>
            <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black text-foreground md:text-6xl lg:text-7xl">
              Blog & <span className="text-gradient">Insights</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-xl text-lg text-muted-foreground">
              Actionable digital marketing tips, case studies, and strategies for local businesses in Odisha.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-4 pb-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-2 justify-center"
          >
            {blogCategories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                className="rounded-full text-xs font-semibold"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="px-4 py-12">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Link to={`/blog/${featured.slug}`} className="group block">
                <div className="grid gap-6 rounded-3xl border border-border bg-card overflow-hidden md:grid-cols-2 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <span className="mb-3 inline-block w-fit rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-primary">
                      {featured.category}
                    </span>
                    <h2 className="mb-3 text-2xl font-black leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5" /> {featured.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(featured.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      {rest.length > 0 && (
        <section className="px-4 py-12 md:py-20">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <motion.div key={post.slug} variants={fadeUp}>
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="mb-3 inline-block w-fit rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-primary">
                          {post.category}
                        </span>
                        <h2 className="mb-2 text-base font-bold leading-tight text-foreground transition-colors group-hover:text-primary">
                          {post.title}
                        </h2>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between border-t border-border pt-4">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" /> {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {post.readTime}
                            </span>
                          </div>
                          <span className="inline-flex items-center text-xs font-semibold text-primary">
                            Read <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};

export default Blog;
