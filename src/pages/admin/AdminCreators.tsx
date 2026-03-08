import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { mockCreators, Creator, CreatorTier, UserStatus } from "@/data/admin-mock-data";
import { Search, Plus, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

const tierColor: Record<CreatorTier, string> = {
  bronze: "bg-orange-500/10 text-orange-600",
  silver: "bg-gray-400/10 text-gray-600",
  gold: "bg-yellow-500/10 text-yellow-600",
  platinum: "bg-primary/10 text-primary",
};

const emptyCreator = { name: "", handle: "", platform: "Instagram", followers: 0, tier: "bronze" as CreatorTier, engagementRate: 0, category: "", status: "active" as UserStatus, campaigns: 0 };

const AdminCreators = () => {
  const [creators, setCreators] = useState<Creator[]>(mockCreators);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Creator | null>(null);
  const [form, setForm] = useState(emptyCreator);

  const filtered = creators.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.handle.toLowerCase().includes(search.toLowerCase()));

  const openAdd = () => { setEditing(null); setForm(emptyCreator); setDialogOpen(true); };
  const openEdit = (c: Creator) => { setEditing(c); setForm({ name: c.name, handle: c.handle, platform: c.platform, followers: c.followers, tier: c.tier, engagementRate: c.engagementRate, category: c.category, status: c.status, campaigns: c.campaigns }); setDialogOpen(true); };

  const handleSave = () => {
    if (!form.name.trim() || !form.handle.trim()) { toast.error("Name and handle required"); return; }
    if (editing) {
      setCreators(creators.map((c) => (c.id === editing.id ? { ...c, ...form } : c)));
      toast.success("Creator updated");
    } else {
      setCreators([...creators, { id: `c${Date.now()}`, ...form }]);
      toast.success("Creator added");
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string) => { setCreators(creators.filter((c) => c.id !== id)); toast.success("Creator deleted"); };
  const toggleStatus = (id: string) => {
    setCreators(creators.map((c) => c.id === id ? { ...c, status: c.status === "active" ? "suspended" as UserStatus : "active" as UserStatus } : c));
    toast.success("Status updated");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Creator Management</h2>
          <p className="text-sm text-muted-foreground">{creators.length} creators</p>
        </div>
        <Button size="sm" onClick={openAdd}><Plus className="mr-2 h-4 w-4" /> Add Creator</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search creators..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Handle</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Followers</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Campaigns</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell className="text-muted-foreground">{c.handle}</TableCell>
                  <TableCell>{c.platform}</TableCell>
                  <TableCell>{(c.followers / 1000).toFixed(1)}K</TableCell>
                  <TableCell><Badge variant="secondary" className={tierColor[c.tier]}>{c.tier}</Badge></TableCell>
                  <TableCell>{c.engagementRate}%</TableCell>
                  <TableCell>{c.campaigns}</TableCell>
                  <TableCell><Badge variant="secondary" className={c.status === "active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}>{c.status}</Badge></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEdit(c)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleStatus(c.id)}>{c.status === "active" ? "Suspend" : "Activate"}</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(c.id)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{editing ? "Edit Creator" : "Add Creator"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="space-y-2"><Label>Handle</Label><Input value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })} placeholder="@handle" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Platform</Label>
                <Select value={form.platform} onValueChange={(v) => setForm({ ...form, platform: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="YouTube">YouTube</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2"><Label>Category</Label><Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Food, Travel" /></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2"><Label>Followers</Label><Input type="number" value={form.followers} onChange={(e) => setForm({ ...form, followers: parseInt(e.target.value) || 0 })} /></div>
              <div className="space-y-2"><Label>Engagement %</Label><Input type="number" step="0.1" value={form.engagementRate} onChange={(e) => setForm({ ...form, engagementRate: parseFloat(e.target.value) || 0 })} /></div>
              <div className="space-y-2">
                <Label>Tier</Label>
                <Select value={form.tier} onValueChange={(v) => setForm({ ...form, tier: v as CreatorTier })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bronze">Bronze</SelectItem>
                    <SelectItem value="silver">Silver</SelectItem>
                    <SelectItem value="gold">Gold</SelectItem>
                    <SelectItem value="platinum">Platinum</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>{editing ? "Save" : "Add Creator"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCreators;
