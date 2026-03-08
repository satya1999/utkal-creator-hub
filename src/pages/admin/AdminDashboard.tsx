import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp, Users, Megaphone, Eye, MessageSquare, Palette,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { dashboardMetrics, revenueByMonth, campaignsByStatus, mockLeads, mockCampaigns } from "@/data/admin-mock-data";

const statCards = [
  { title: "Total Revenue", value: `₹${(dashboardMetrics.totalRevenue / 1000).toFixed(0)}K`, growth: dashboardMetrics.revenueGrowth, icon: TrendingUp },
  { title: "Active Clients", value: dashboardMetrics.activeClients, growth: dashboardMetrics.clientGrowth, icon: Users },
  { title: "Active Campaigns", value: dashboardMetrics.activeCampaigns, growth: dashboardMetrics.campaignGrowth, icon: Megaphone },
  { title: "Total Reach", value: `${(dashboardMetrics.totalReach / 1000000).toFixed(1)}M`, growth: dashboardMetrics.reachGrowth, icon: Eye },
  { title: "New Leads", value: dashboardMetrics.newLeads, growth: dashboardMetrics.leadGrowth, icon: MessageSquare },
  { title: "Active Creators", value: dashboardMetrics.activeCreators, growth: dashboardMetrics.creatorGrowth, icon: Palette },
];

const statusColor: Record<string, string> = {
  new: "bg-primary/10 text-primary",
  contacted: "bg-blue-500/10 text-blue-600",
  active: "bg-primary/10 text-primary",
  completed: "bg-blue-500/10 text-blue-600",
  draft: "bg-muted text-muted-foreground",
  paused: "bg-yellow-500/10 text-yellow-600",
};

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Overview of your platform performance</p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {statCards.map((s) => (
          <Card key={s.title}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <s.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs font-medium text-primary">+{s.growth}%</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-base">Revenue Trend</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueByMonth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <Tooltip />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Campaigns by Status</CardTitle></CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={campaignsByStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name, value }) => `${name}: ${value}`}>
                  {campaignsByStatus.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle className="text-base">Recent Leads</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockLeads.slice(0, 4).map((lead) => (
                <div key={lead.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.business}</p>
                  </div>
                  <Badge variant="secondary" className={statusColor[lead.status]}>{lead.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Active Campaigns</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockCampaigns.filter(c => c.status === "active").map((c) => (
                <div key={c.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.brand}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{((c.spent / c.budget) * 100).toFixed(0)}% spent</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
