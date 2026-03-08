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
import { Progress } from "@/components/ui/progress";
import { mockCampaigns, Campaign, CampaignStatus } from "@/data/admin-mock-data";
import { Search, Plus, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

const statusColor: Record<CampaignStatus, string> = {
  draft: "bg-muted text-muted-foreground",
  active: "bg-primary/10 text-primary",
  completed: "bg-blue-500/10 text-blue-600",
  paused: "bg-yellow-500/10 text-yellow-600",
};

const emptyCampaign = { name: "", brand: "", creators: 0, budget: 0, spent: 0, status: "draft" as CampaignStatus, startDate: "", endDate: "", reach: 0, engagement: 0 };

const AdminCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Campaign | null>(null);
  const [form, setForm] = useState(emptyCampaign);

  const filtered = campaigns.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.brand.toLowerCase().includes(search.toLowerCase()));

  const openAdd = () => { setEditing(null); setForm(emptyCampaign); setDialogOpen(true); };
  const openEdit = (c: Campaign) => { setEditing(c); setForm({ name: c.name, brand: c.brand, creators: c.creators, budget: c.budget, spent: c.spent, status: c.status, startDate: c.startDate, endDate: c.endDate, reach: c.reach, engagement: c.engagement }); setDialogOpen(true); };

  const handleSave = () => {
    if (!form.name.trim() || !form.brand.trim()) { toast.error("Name and brand required"); return; }
    if (editing) {
      setCampaigns(campaigns.map((c) => (c.id === editing.id ? { ...c, ...form } : c)));
      toast.success("Campaign updated");
    } else {
      setCampaigns([...campaigns, { id: `cm${Date.now()}`, ...form }]);
      toast.success("Campaign created");
    }
    setDialogOpen(false);
  };

  const handleDelete = (id: string) => { setCampaigns(campaigns.filter((c) => c.id !== id)); toast.success("Campaign deleted"); };
  const updateStatus = (id: string, status: CampaignStatus) => {
    setCampaigns(campaigns.map((c) => c.id === id ? { ...c, status } : c));
    toast.success(`Campaign ${status}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Campaign Management</h2>
          <p className="text-sm text-muted-foreground">{campaigns.length} campaigns</p>
        </div>
        <Button size="sm" onClick={openAdd}><Plus className="mr-2 h-4 w-4" /> New Campaign</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search campaigns..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Creators</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reach</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell className="text-muted-foreground">{c.brand}</TableCell>
                  <TableCell>{c.creators}</TableCell>
                  <TableCell>₹{(c.budget / 1000).toFixed(0)}K</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={c.budget > 0 ? (c.spent / c.budget) * 100 : 0} className="h-2 w-20" />
                      <span className="text-xs text-muted-foreground">{c.budget > 0 ? ((c.spent / c.budget) * 100).toFixed(0) : 0}%</span>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="secondary" className={statusColor[c.status]}>{c.status}</Badge></TableCell>
                  <TableCell>{c.reach > 0 ? `${(c.reach / 1000).toFixed(0)}K` : "—"}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEdit(c)}>Edit</DropdownMenuItem>
                        {c.status !== "active" && <DropdownMenuItem onClick={() => updateStatus(c.id, "active")}>Activate</DropdownMenuItem>}
                        {c.status === "active" && <DropdownMenuItem onClick={() => updateStatus(c.id, "paused")}>Pause</DropdownMenuItem>}
                        {c.status !== "completed" && <DropdownMenuItem onClick={() => updateStatus(c.id, "completed")}>Complete</DropdownMenuItem>}
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
          <DialogHeader><DialogTitle>{editing ? "Edit Campaign" : "New Campaign"}</DialogTitle></DialogHeader>
          <div className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Campaign Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="space-y-2"><Label>Brand</Label><Input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} /></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2"><Label>Budget (₹)</Label><Input type="number" value={form.budget} onChange={(e) => setForm({ ...form, budget: parseInt(e.target.value) || 0 })} /></div>
              <div className="space-y-2"><Label>Creators</Label><Input type="number" value={form.creators} onChange={(e) => setForm({ ...form, creators: parseInt(e.target.value) || 0 })} /></div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as CampaignStatus })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Start Date</Label><Input type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} /></div>
              <div className="space-y-2"><Label>End Date</Label><Input type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} /></div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>{editing ? "Save" : "Create Campaign"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCampaigns;
