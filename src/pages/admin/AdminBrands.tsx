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
import { mockBrands, Brand, UserStatus } from "@/data/admin-mock-data";
import { Search, Plus, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

const emptyBrand = { name: "", industry: "", contact: "", email: "", activeCampaigns: 0, totalSpent: 0, status: "active" as UserStatus, joinedAt: new Date().toISOString().split("T")[0] };

const AdminBrands = () => {
  const [brands, setBrands] = useState<Brand[]>(mockBrands);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Brand | null>(null);
  const [form, setForm] = useState(emptyBrand);

  const filtered = brands.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()) || b.industry.toLowerCase().includes(search.toLowerCase()));

  const openAdd = () => { setEditing(null); setForm(emptyBrand); setDialogOpen(true); };
  const openEdit = (b: Brand) => { setEditing(b); setForm({ name: b.name, industry: b.industry, contact: b.contact, email: b.email, activeCampaigns: b.activeCampaigns, totalSpent: b.totalSpent, status: b.status, joinedAt: b.joinedAt }); setDialogOpen(true); };

  const handleSave = () => {
    if (!form.name.trim() || !form.email.trim()) { toast.error("Name and email required"); return; }
    if (editing) {
      setBrands(brands.map((b) => (b.id === editing.id ? { ...b, ...form } : b)));
      toast.success("Brand updated");
    } else {
      setBrands([...brands, { id: `b${Date.now()}`, ...form }]);
      toast.success("Brand added");
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string) => { setBrands(brands.filter((b) => b.id !== id)); toast.success("Brand deleted"); };
  const toggleStatus = (id: string) => {
    setBrands(brands.map((b) => b.id === id ? { ...b, status: b.status === "active" ? "inactive" as UserStatus : "active" as UserStatus } : b));
    toast.success("Status updated");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Brand / Client Management</h2>
          <p className="text-sm text-muted-foreground">{brands.length} brands</p>
        </div>
        <Button size="sm" onClick={openAdd}><Plus className="mr-2 h-4 w-4" /> Add Brand</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search brands..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Campaigns</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((b) => (
                <TableRow key={b.id}>
                  <TableCell className="font-medium">{b.name}</TableCell>
                  <TableCell>{b.industry}</TableCell>
                  <TableCell className="text-muted-foreground">{b.contact}</TableCell>
                  <TableCell className="text-muted-foreground">{b.email}</TableCell>
                  <TableCell>{b.activeCampaigns}</TableCell>
                  <TableCell>₹{(b.totalSpent / 1000).toFixed(0)}K</TableCell>
                  <TableCell><Badge variant="secondary" className={b.status === "active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}>{b.status}</Badge></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEdit(b)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleStatus(b.id)}>{b.status === "active" ? "Deactivate" : "Activate"}</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(b.id)}>Delete</DropdownMenuItem>
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
          <DialogHeader><DialogTitle>{editing ? "Edit Brand" : "Add Brand"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Brand Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="space-y-2"><Label>Industry</Label><Input value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} placeholder="e.g. Food & Dining" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Contact Person</Label><Input value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} /></div>
              <div className="space-y-2"><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>{editing ? "Save" : "Add Brand"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBrands;
