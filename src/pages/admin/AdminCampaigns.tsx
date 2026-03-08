import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { mockCampaigns, CampaignStatus } from "@/data/admin-mock-data";
import { Search, Plus } from "lucide-react";

const statusColor: Record<CampaignStatus, string> = {
  draft: "bg-muted text-muted-foreground",
  active: "bg-primary/10 text-primary",
  completed: "bg-blue-500/10 text-blue-600",
  paused: "bg-yellow-500/10 text-yellow-600",
};

const AdminCampaigns = () => {
  const [search, setSearch] = useState("");
  const filtered = mockCampaigns.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.brand.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Campaign Management</h2>
          <p className="text-sm text-muted-foreground">{mockCampaigns.length} campaigns</p>
        </div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" /> New Campaign</Button>
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
                      <Progress value={(c.spent / c.budget) * 100} className="h-2 w-20" />
                      <span className="text-xs text-muted-foreground">{((c.spent / c.budget) * 100).toFixed(0)}%</span>
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="secondary" className={statusColor[c.status]}>{c.status}</Badge></TableCell>
                  <TableCell>{c.reach > 0 ? `${(c.reach / 1000).toFixed(0)}K` : "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCampaigns;
