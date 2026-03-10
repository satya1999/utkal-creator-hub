import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { BlogPost as BlogPostType } from "@/data/blog-posts";
import { getAllBlogPosts } from "@/lib/blog-storage";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowLeft, Calendar, ArrowRight, Clock, User, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 2);
  const fallbackRelated = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  useEffect(() => {
    if (post) document.title = `${post.title} | Utkal Creator Hub Blog`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const renderContent = (content: string) =>
    content.split("\n\n").map((block, i) => {
      if (block.startsWith("## "))
        return <h2 key={i} className="mb-4 mt-10 text-xl font-black text-foreground">{block.replace("## ", "")}</h2>;
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="mb-5 list-disc space-y-2 pl-6 text-muted-foreground">
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="mb-5 leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
      );
    });

  return (
    <>
      {/* Hero with cover image */}
      <section className="relative overflow-hidden">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-10 md:pb-16">
          <div className="container mx-auto max-w-3xl">
            <Link to="/blog" className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Blog
            </Link>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <span className="mb-4 inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <h1 className="mb-5 text-3xl font-black leading-tight text-foreground md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" /> {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-base">
            {renderContent(post.content)}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center"
          >
            <h3 className="mb-3 text-2xl font-black text-foreground">Want to grow your business?</h3>
            <p className="mb-8 text-muted-foreground">Book a free strategy call and let's discuss how we can help.</p>
            <Button asChild size="lg" className="rounded-full font-bold">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Book Free Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Related Posts */}
          {fallbackRelated.length > 0 && (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mt-20"
            >
              <h3 className="mb-8 text-2xl font-black text-foreground">Related Articles</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {fallbackRelated.map((rp) => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group block">
                    <div className="rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={rp.cover}
                          alt={rp.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <span className="mb-2 inline-block rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {rp.category}
                        </span>
                        <h4 className="mb-2 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                          {rp.title}
                        </h4>
                        <span className="inline-flex items-center text-xs font-semibold text-primary">
                          Read more <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogPost;
