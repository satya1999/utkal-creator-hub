import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockBrands } from "@/data/admin-mock-data";
import { Search, Plus } from "lucide-react";

const AdminBrands = () => {
  const [search, setSearch] = useState("");
  const filtered = mockBrands.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()) || b.industry.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Brand / Client Management</h2>
          <p className="text-sm text-muted-foreground">{mockBrands.length} brands</p>
        </div>
        <Button size="sm"><Plus className="mr-2 h-4 w-4" /> Add Brand</Button>
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
                <TableHead>Active Campaigns</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((b) => (
                <TableRow key={b.id}>
                  <TableCell className="font-medium">{b.name}</TableCell>
                  <TableCell>{b.industry}</TableCell>
                  <TableCell className="text-muted-foreground">{b.contact}</TableCell>
                  <TableCell>{b.activeCampaigns}</TableCell>
                  <TableCell>₹{(b.totalSpent / 1000).toFixed(0)}K</TableCell>
                  <TableCell><Badge variant="secondary" className={b.status === "active" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}>{b.status}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{b.joinedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBrands;
