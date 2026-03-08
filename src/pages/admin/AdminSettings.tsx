import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { platformSettings } from "@/data/admin-mock-data";
import { toast } from "sonner";

const AdminSettings = () => {
  const [settings, setSettings] = useState(platformSettings);

  const handleSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Platform Settings</h2>
        <p className="text-sm text-muted-foreground">Configure your platform</p>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base">General</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Site Name</Label>
            <Input value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>Contact Email</Label>
            <Input value={settings.siteEmail} onChange={(e) => setSettings({ ...settings, siteEmail: e.target.value })} />
          </div>
          <div className="space-y-2">
            <Label>WhatsApp Number</Label>
            <Input value={settings.whatsappNumber} onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Currency</Label>
              <Input value={settings.currency} onChange={(e) => setSettings({ ...settings, currency: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Timezone</Label>
              <Input value={settings.timezone} onChange={(e) => setSettings({ ...settings, timezone: e.target.value })} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-base">Preferences</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive email alerts for new leads and activity</p>
            </div>
            <Switch checked={settings.notificationsEnabled} onCheckedChange={(v) => setSettings({ ...settings, notificationsEnabled: v })} />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Auto-Approve Content</p>
              <p className="text-xs text-muted-foreground">Automatically approve creator content submissions</p>
            </div>
            <Switch checked={settings.autoApproveContent} onCheckedChange={(v) => setSettings({ ...settings, autoApproveContent: v })} />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label>Max Creators per Campaign</Label>
            <Input type="number" value={settings.maxCreatorsPerCampaign} onChange={(e) => setSettings({ ...settings, maxCreatorsPerCampaign: parseInt(e.target.value) || 0 })} />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="w-full">Save Settings</Button>
    </div>
  );
};

export default AdminSettings;
