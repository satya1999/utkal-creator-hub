import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { toast } from "sonner";

type RequestStatus = "pending" | "approved" | "rejected";

interface CreatorRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileLink: string;
  status: RequestStatus;
  submittedAt: string;
}

const statusColor: Record<RequestStatus, string> = {
  pending: "bg-yellow-500/10 text-yellow-600",
  approved: "bg-primary/10 text-primary",
  rejected: "bg-destructive/10 text-destructive",
};

const mockRequests: CreatorRequest[] = [
  { id: "cr1", name: "Sita Mohanty", email: "sita@gmail.com", phone: "9876501234", profileLink: "https://instagram.com/sita_vlogs", status: "pending", submittedAt: "2026-03-07" },
  { id: "cr2", name: "Raj Patel", email: "raj.p@gmail.com", phone: "9123409876", profileLink: "https://youtube.com/@rajcreates", status: "approved", submittedAt: "2026-03-05" },
  { id: "cr3", name: "Neha Dash", email: "neha.d@gmail.com", phone: "9988001122", profileLink: "https://instagram.com/neha_style", status: "pending", submittedAt: "2026-03-08" },
];

const AdminCreatorRequests = () => {
  const [requests, setRequests] = useState<CreatorRequest[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("creatorRequests") || "[]") as CreatorRequest[];
    // Merge mock + stored, deduplicate by id
    const ids = new Set(stored.map((r) => r.id));
    const merged = [...stored, ...mockRequests.filter((m) => !ids.has(m.id))];
    setRequests(merged);
  }, []);

  const saveRequests = (updated: CreatorRequest[]) => {
    setRequests(updated);
    localStorage.setItem("creatorRequests", JSON.stringify(updated));
  };

  const updateStatus = (id: string, status: RequestStatus) => {
    const updated = requests.map((r) => (r.id === id ? { ...r, status } : r));
    saveRequests(updated);
    toast.success(`Request ${status}`);
  };

  const filtered = requests.filter(
    (r) => r.name.toLowerCase().includes(search.toLowerCase()) || r.email.toLowerCase().includes(search.toLowerCase())
  );

  const pendingCount = requests.filter((r) => r.status === "pending").length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Creator Requests</h2>
        <p className="text-sm text-muted-foreground">{pendingCount} pending requests</p>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Profile</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    No creator requests yet
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.name}</TableCell>
                    <TableCell className="text-muted-foreground">{r.email}</TableCell>
                    <TableCell className="text-muted-foreground">{r.phone}</TableCell>
                    <TableCell>
                      <a href={r.profileLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                        View <ExternalLink className="h-3 w-3" />
                      </a>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{r.submittedAt}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusColor[r.status]}>{r.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {r.status !== "approved" && (
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-primary" onClick={() => updateStatus(r.id, "approved")}>
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        {r.status !== "rejected" && (
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => updateStatus(r.id, "rejected")}>
                            <XCircle className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCreatorRequests;
