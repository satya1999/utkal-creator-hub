import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog-posts";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} | Utkal Creator Hub Blog`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="mb-4 mt-10 text-xl font-extrabold text-foreground">
            {block.replace("## ", "")}
          </h2>
        );
      }
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
        <p
          key={i}
          className="mb-5 leading-relaxed text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
        />
      );
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-secondary px-4 py-14 md:py-20">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto max-w-3xl">
          <Link to="/blog" className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Blog
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight text-secondary-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </motion.div>
        </div>
      </section>

      <article className="px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-base">
            {renderContent(post.content)}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center"
          >
            <h3 className="mb-3 text-2xl font-extrabold text-foreground">Want to grow your business?</h3>
            <p className="mb-8 text-muted-foreground">
              Book a free strategy call and let's discuss how we can help.
            </p>
            <Button asChild size="lg" className="font-bold shadow-md shadow-primary/25">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Book Free Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
