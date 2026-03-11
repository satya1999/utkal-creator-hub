import { useState, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Upload, GripVertical } from "lucide-react";
import { toast } from "sonner";
import {
  getAllShowreels, saveShowreels, addShowreel, updateShowreel, deleteShowreel,
  type ShowreelItem,
} from "@/lib/showreel-storage";

const emptyReel: ShowreelItem = { id: 0, thumbnail: "", brand: "", tags: [] };

const AdminShowreel = () => {
  const [reels, setReels] = useState<ShowreelItem[]>(getAllShowreels);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ShowreelItem | null>(null);
  const [form, setForm] = useState<ShowreelItem>(emptyReel);
  const [tagsInput, setTagsInput] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [preview, setPreview] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  const refresh = () => setReels(getAllShowreels());

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyReel, id: Date.now() });
    setTagsInput("");
    setPreview("");
    setDialogOpen(true);
  };

  const openEdit = (r: ShowreelItem) => {
    setEditing(r);
    setForm({ ...r });
    setTagsInput(r.tags.join(", "));
    setPreview(r.thumbnail);
    setDialogOpen(true);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File must be under 5 MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setForm((f) => ({ ...f, thumbnail: result }));
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!form.brand.trim()) { toast.error("Brand name is required"); return; }
    if (!form.thumbnail.trim()) { toast.error("Image/GIF is required"); return; }
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    const item: ShowreelItem = { ...form, tags };

    if (editing) {
      updateShowreel(editing.id, item);
      toast.success("Showreel updated");
    } else {
      addShowreel(item);
      toast.success("Showreel added");
    }
    refresh();
    setDialogOpen(false);
  };

  const handleDelete = () => {
    if (deleteId === null) return;
    deleteShowreel(deleteId);
    toast.success("Showreel deleted");
    refresh();
    setDeleteId(null);
  };

  const moveItem = (idx: number, dir: -1 | 1) => {
    const arr = [...reels];
    const target = idx + dir;
    if (target < 0 || target >= arr.length) return;
    [arr[idx], arr[target]] = [arr[target], arr[idx]];
    saveShowreels(arr);
    refresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Showreel Management</h2>
          <p className="text-sm text-muted-foreground">{reels.length} items · drag to reorder</p>
        </div>
        <Button onClick={openCreate}><Plus className="mr-2 h-4 w-4" />Add Reel</Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Order</TableHead>
                <TableHead className="w-24">Preview</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="w-28">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reels.map((r, i) => (
                <TableRow key={r.id}>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6" disabled={i === 0} onClick={() => moveItem(i, -1)}>▲</Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6" disabled={i === reels.length - 1} onClick={() => moveItem(i, 1)}>▼</Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <img src={r.thumbnail} alt={r.brand} className="h-16 w-10 rounded-md object-cover" />
                  </TableCell>
                  <TableCell className="font-medium">{r.brand}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">{r.tags.join(", ")}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(r)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => setDeleteId(r.id)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {reels.length === 0 && (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-12">No showreel items yet</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create / Edit dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Showreel" : "Add Showreel"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Brand Name</Label>
              <Input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} placeholder="e.g. Restaurant Promo" />
            </div>

            <div>
              <Label>Image / GIF</Label>
              <div className="mt-1 flex items-center gap-3">
                {preview && <img src={preview} alt="preview" className="h-24 w-16 rounded-lg object-cover border border-border" />}
                <div className="flex-1 space-y-2">
                  <Button variant="outline" className="w-full" onClick={() => fileRef.current?.click()}>
                    <Upload className="mr-2 h-4 w-4" />{preview ? "Replace file" : "Upload file"}
                  </Button>
                  <input ref={fileRef} type="file" accept="image/*,.gif" className="hidden" onChange={handleFile} />
                  <p className="text-xs text-muted-foreground">or paste a URL below</p>
                  <Input
                    value={form.thumbnail.startsWith("data:") ? "" : form.thumbnail}
                    onChange={(e) => { setForm({ ...form, thumbnail: e.target.value }); setPreview(e.target.value); }}
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>Tags (comma-separated)</Label>
              <Input value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="food, local business" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>{editing ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <Dialog open={deleteId !== null} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader><DialogTitle>Delete Showreel?</DialogTitle></DialogHeader>
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

export default AdminShowreel;
