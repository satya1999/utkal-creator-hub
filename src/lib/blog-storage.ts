import { blogPosts as defaultPosts, type BlogPost } from "@/data/blog-posts";

const STORAGE_KEY = "managedBlogPosts";

export function getAllBlogPosts(): BlogPost[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    return defaultPosts;
  }
  return JSON.parse(stored);
}

export function saveBlogPosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function addBlogPost(post: BlogPost) {
  const posts = getAllBlogPosts();
  saveBlogPosts([post, ...posts]);
}

export function updateBlogPost(slug: string, updated: BlogPost) {
  const posts = getAllBlogPosts();
  saveBlogPosts(posts.map((p) => (p.slug === slug ? updated : p)));
}

export function deleteBlogPost(slug: string) {
  const posts = getAllBlogPosts();
  saveBlogPosts(posts.filter((p) => p.slug !== slug));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}
