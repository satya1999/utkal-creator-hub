import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockUsers, UserRole } from "@/data/admin-mock-data";
import { Shield, Eye, Edit, Trash2, Users } from "lucide-react";

const permissions: Record<UserRole, string[]> = {
  admin: ["Full Access", "Manage Users", "Manage Roles", "View Analytics", "Edit Content", "Delete Data", "Settings"],
  manager: ["View Analytics", "Edit Content", "Manage Creators", "Manage Campaigns"],
  editor: ["Edit Content", "Manage Campaigns", "View Analytics"],
  viewer: ["View Analytics", "View Content"],
};

const roleIcon: Record<UserRole, React.ReactNode> = {
  admin: <Shield className="h-4 w-4 text-primary" />,
  manager: <Users className="h-4 w-4 text-blue-600" />,
  editor: <Edit className="h-4 w-4 text-yellow-600" />,
  viewer: <Eye className="h-4 w-4 text-muted-foreground" />,
};

const AdminRoles = () => {
  const roleGroups = (["admin", "manager", "editor", "viewer"] as UserRole[]).map((role) => ({
    role,
    users: mockUsers.filter((u) => u.role === role),
    perms: permissions[role],
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Role-Based Access Control</h2>
        <p className="text-sm text-muted-foreground">Manage user roles and permissions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roleGroups.map((g) => (
          <Card key={g.role}>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                {roleIcon[g.role]}
                <CardTitle className="text-base capitalize">{g.role}</CardTitle>
              </div>
              <p className="text-xs text-muted-foreground">{g.users.length} user(s)</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {g.perms.map((p) => (
                  <Badge key={p} variant="secondary" className="text-xs">{p}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base">User Role Assignments</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((u) => (
                <TableRow key={u.id}>
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell className="text-muted-foreground">{u.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {roleIcon[u.role]}
                      <span className="capitalize">{u.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={u.status === "active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}>
                      {u.status}
                    </Badge>
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

export default AdminRoles;
