import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockUsers, AdminUser, UserStatus, UserRole } from "@/data/admin-mock-data";
import { Search, MoreHorizontal, UserPlus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const statusColor: Record<UserStatus, string> = {
  active: "bg-primary/10 text-primary",
  suspended: "bg-destructive/10 text-destructive",
  inactive: "bg-muted text-muted-foreground",
};

const roleColor: Record<UserRole, string> = {
  admin: "bg-primary/10 text-primary",
  user: "bg-muted text-muted-foreground",
};

const AdminUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState("");

  const filtered = users.filter(
    (u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAction = (userId: string, action: string) => {
    if (action === "suspend") {
      setUsers(users.map((u) => (u.id === userId ? { ...u, status: "suspended" as UserStatus } : u)));
      toast.success("User suspended");
    } else if (action === "activate") {
      setUsers(users.map((u) => (u.id === userId ? { ...u, status: "active" as UserStatus } : u)));
      toast.success("User activated");
    } else if (action === "delete") {
      setUsers(users.filter((u) => u.id !== userId));
      toast.success("User deleted");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">User Management</h2>
          <p className="text-sm text-muted-foreground">{users.length} total users</p>
        </div>
        <Button size="sm"><UserPlus className="mr-2 h-4 w-4" /> Add User</Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell className="text-muted-foreground">{u.email}</TableCell>
                  <TableCell><Badge variant="secondary" className={roleColor[u.role]}>{u.role}</Badge></TableCell>
                  <TableCell><Badge variant="secondary" className={statusColor[u.status]}>{u.status}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{u.joinedAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        {u.status === "active" ? (
                          <DropdownMenuItem onClick={() => handleAction(u.id, "suspend")}>Suspend</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleAction(u.id, "activate")}>Activate</DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="text-destructive" onClick={() => handleAction(u.id, "delete")}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export default AdminUsers;
