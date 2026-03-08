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

  // Simple markdown-like rendering for ## headers and **bold**
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="mb-3 mt-8 text-xl font-bold text-foreground">
            {block.replace("## ", "")}
          </h2>
        );
      }
      // Handle lists
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
            ))}
          </ul>
        );
      }
      return (
        <p
          key={i}
          className="mb-4 text-muted-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
        />
      );
    });
  };

  return (
    <>
      <section className="bg-secondary px-4 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to Blog
          </Link>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-secondary-foreground md:text-4xl">
              {post.title}
            </h1>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </motion.div>
        </div>
      </section>

      <article className="px-4 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {renderContent(post.content)}
          </motion.div>

          <div className="mt-12 rounded-2xl bg-accent p-8 text-center">
            <h3 className="mb-2 text-xl font-bold text-foreground">Want to grow your business?</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Book a free strategy call and let's discuss how we can help.
            </p>
            <Button asChild className="font-semibold">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Book Free Call <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
