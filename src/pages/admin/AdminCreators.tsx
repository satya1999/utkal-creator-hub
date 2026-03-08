import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockCreators, CreatorTier } from "@/data/admin-mock-data";
import { Search, Plus } from "lucide-react";

const tierColor: Record<CreatorTier, string> = {
  bronze: "bg-orange-500/10 text-orange-600",
  silver: "bg-gray-400/10 text-gray-600",
  gold: "bg-yellow-500/10 text-yellow-600",
  platinum: "bg-primary/10 text-primary",
};

const AdminCreators = () => {
  const [search, setSearch] = useState("");
  const filtered = mockCreators.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.handle.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Creator Management</h2>
          <p className="text-sm text-muted-foreground">{mockCreators.length} creators</p>
        </div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add Creator</Button>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCreators;
