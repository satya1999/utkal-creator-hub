import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Upload, Trash2, Copy, Image, FileText, Film } from "lucide-react";
import { toast } from "sonner";
import { getAllMedia, addMedia, deleteMedia, formatFileSize, type MediaItem } from "@/lib/media-storage";

const getIcon = (type: string) => {
  if (type.startsWith("image/")) return <Image className="h-5 w-5 text-primary" />;
  if (type.startsWith("video/")) return <Film className="h-5 w-5 text-primary" />;
  return <FileText className="h-5 w-5 text-primary" />;
};

const AdminMedia = () => {
  const [items, setItems] = useState<MediaItem[]>(getAllMedia);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const refresh = () => setItems(getAllMedia());

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    Array.from(files).forEach((file) => {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(`${file.name} exceeds 5 MB limit`);
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        addMedia({
          id: Date.now() + Math.random(),
          name: file.name,
          url: reader.result as string,
          type: file.type,
          size: file.size,
          createdAt: new Date().toISOString(),
        });
        refresh();
        toast.success(`${file.name} uploaded`);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const copyLink = (item: MediaItem) => {
    navigator.clipboard.writeText(item.url);
    toast.success("Link copied to clipboard");
  };

  const handleDelete = () => {
    if (deleteId === null) return;
    deleteMedia(deleteId);
    refresh();
    setDeleteId(null);
    toast.success("File deleted");
  };

  const filtered = items.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Media Library</h2>
          <p className="text-sm text-muted-foreground">{items.length} files · upload images, GIFs, or videos to get shareable links</p>
        </div>
        <Button onClick={() => fileRef.current?.click()}>
          <Upload className="mr-2 h-4 w-4" />Upload Files
        </Button>
        <input ref={fileRef} type="file" accept="image/*,video/*,.gif" multiple className="hidden" onChange={handleUpload} />
      </div>

      <Input
        placeholder="Search files…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      {filtered.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center text-muted-foreground">
            {items.length === 0 ? "No files yet. Upload images or GIFs to get started." : "No results found."}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((item) => (
            <Card key={item.id} className="group overflow-hidden">
              <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                {item.type.startsWith("image/") || item.type === "image/gif" ? (
                  <img src={item.url} alt={item.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    {getIcon(item.type)}
                    <span className="text-xs">Preview N/A</span>
                  </div>
                )}
              </div>
              <CardContent className="p-3 space-y-2">
                <p className="text-xs font-medium truncate" title={item.name}>{item.name}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(item.size)}</p>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" className="flex-1 text-xs h-7" onClick={() => copyLink(item)}>
                    <Copy className="mr-1 h-3 w-3" />Copy Link
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => setDeleteId(item.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader><DialogTitle>Delete file?</DialogTitle></DialogHeader>
          <p className="text-sm text-muted-foreground">This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminMedia;
