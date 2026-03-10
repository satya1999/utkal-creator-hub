import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Search, Plus, Pencil, Trash2, Eye } from "lucide-react";
import { toast } from "sonner";
import type { BlogPost } from "@/data/blog-posts";
import {
  getAllBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost,
} from "@/lib/blog-storage";

const emptyPost: BlogPost = {
  slug: "",
  title: "",
  excerpt: "",
  date: new Date().toISOString().split("T")[0],
  category: "",
  author: "",
  readTime: "",
  cover: "",
  content: "",
};

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(getAllBlogPosts);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [deleteSlug, setDeleteSlug] = useState<string | null>(null);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<BlogPost>(emptyPost);

  const refresh = () => setPosts(getAllBlogPosts());

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const openCreate = () => {
    setEditingSlug(null);
    setForm({ ...emptyPost, date: new Date().toISOString().split("T")[0] });
    setDialogOpen(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingSlug(post.slug);
    setForm({ ...post });
    setDialogOpen(true);
  };

  const openPreview = (post: BlogPost) => {
    setForm({ ...post });
    setPreviewOpen(true);
  };

  const handleSave = () => {
    if (!form.title || !form.excerpt || !form.category || !form.content) {
      toast.error("Please fill in all required fields");
      return;
    }
    const slug =
      form.slug ||
      form.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const postToSave = { ...form, slug };

    if (editingSlug) {
      updateBlogPost(editingSlug, postToSave);
      toast.success("Blog post updated");
    } else {
      addBlogPost(postToSave);
      toast.success("Blog post created");
    }
    refresh();
    setDialogOpen(false);
  };

  const handleDelete = () => {
    if (deleteSlug) {
      deleteBlogPost(deleteSlug);
      toast.success("Blog post deleted");
      refresh();
      setDeleteSlug(null);
    }
  };

  const updateField = (field: keyof BlogPost, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Blog Management</h2>
          <p className="text-sm text-muted-foreground">
            {posts.length} posts total
          </p>
        </div>
        <Button onClick={openCreate} className="gap-2">
          <Plus className="h-4 w-4" /> New Post
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((post) => (
                <TableRow key={post.slug}>
                  <TableCell className="font-medium max-w-[300px] truncate">
                    {post.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{post.category}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {post.author}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {post.date}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => openPreview(post)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => openEdit(post)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive"
                        onClick={() => setDeleteSlug(post.slug)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                    No blog posts found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create / Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingSlug ? "Edit Blog Post" : "Create New Blog Post"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label>Title *</Label>
              <Input
                value={form.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="Enter blog post title"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Category *</Label>
                <Input
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  placeholder="e.g. Digital Marketing"
                />
              </div>
              <div className="grid gap-2">
                <Label>Author</Label>
                <Input
                  value={form.author}
                  onChange={(e) => updateField("author", e.target.value)}
                  placeholder="Author name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Date</Label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => updateField("date", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label>Read Time</Label>
                <Input
                  value={form.readTime}
                  onChange={(e) => updateField("readTime", e.target.value)}
                  placeholder="e.g. 5 min read"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Cover Image URL</Label>
              <Input
                value={form.cover}
                onChange={(e) => updateField("cover", e.target.value)}
                placeholder="https://... or leave empty"
              />
            </div>
            <div className="grid gap-2">
              <Label>Excerpt *</Label>
              <Textarea
                value={form.excerpt}
                onChange={(e) => updateField("excerpt", e.target.value)}
                placeholder="Short description for blog listing"
                rows={2}
              />
            </div>
            <div className="grid gap-2">
              <Label>Content * (Markdown supported)</Label>
              <Textarea
                value={form.content}
                onChange={(e) => updateField("content", e.target.value)}
                placeholder="Write your blog post content here..."
                rows={10}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              {editingSlug ? "Update Post" : "Create Post"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{form.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">{form.category}</Badge>
              <span className="text-sm text-muted-foreground">{form.author}</span>
              <span className="text-sm text-muted-foreground">{form.date}</span>
            </div>
            <p className="text-muted-foreground italic">{form.excerpt}</p>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap text-foreground">
              {form.content}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteSlug} onOpenChange={() => setDeleteSlug(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete blog post?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The blog post will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminBlog;
