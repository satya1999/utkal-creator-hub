import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockContent, ContentStatus } from "@/data/admin-mock-data";
import { Search, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const statusColor: Record<ContentStatus, string> = {
  pending: "bg-yellow-500/10 text-yellow-600",
  approved: "bg-primary/10 text-primary",
  rejected: "bg-destructive/10 text-destructive",
  flagged: "bg-orange-500/10 text-orange-600",
};

const AdminContent = () => {
  const [content, setContent] = useState(mockContent);
  const [search, setSearch] = useState("");

  const filtered = content.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.creator.toLowerCase().includes(search.toLowerCase()));

  const updateStatus = (id: string, status: ContentStatus) => {
    setContent(content.map((c) => (c.id === id ? { ...c, status } : c)));
    toast.success(`Content ${status}`);
  };

  const pendingCount = content.filter((c) => c.status === "pending").length;
  const flaggedCount = content.filter((c) => c.status === "flagged").length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Content Moderation</h2>
        <p className="text-sm text-muted-foreground">{pendingCount} pending · {flaggedCount} flagged</p>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search content..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Creator</TableHead>
                <TableHead>Campaign</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.title}</TableCell>
                  <TableCell className="text-muted-foreground">{c.creator}</TableCell>
                  <TableCell className="text-muted-foreground">{c.campaign}</TableCell>
                  <TableCell><Badge variant="secondary">{c.type}</Badge></TableCell>
                  <TableCell><Badge variant="secondary" className={statusColor[c.status]}>{c.status}</Badge></TableCell>
                  <TableCell>{c.views > 0 ? `${(c.views / 1000).toFixed(1)}K` : "—"}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {c.status !== "approved" && (
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-primary" onClick={() => updateStatus(c.id, "approved")}>
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      {c.status !== "rejected" && (
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => updateStatus(c.id, "rejected")}>
                          <XCircle className="h-4 w-4" />
                        </Button>
                      )}
                      {c.status !== "flagged" && (
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-orange-500" onClick={() => updateStatus(c.id, "flagged")}>
                          <AlertTriangle className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContent;
