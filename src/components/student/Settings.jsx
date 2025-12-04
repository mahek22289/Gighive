import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import {
  User,
  Bell,
  Lock,
  Globe
} from 'lucide-react';

export function Settings({ user }) {
  const profileSettings = {
    name: user?.name || "Alex Kim",
    email: user?.email || "alex.kim@stanford.edu",
    bio: "Computer Science student at Stanford with a passion for web development and AI. Looking for challenging projects.",
    college: user?.college || "Stanford University",
    major: "Computer Science"
  };

  const notificationSettings = {
    newMessages: true,
    gigUpdates: true,
    newGigs: false,
    weeklyDigest: true
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      <div className="space-y-8">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User size={20} />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input defaultValue={profileSettings.name} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" defaultValue={profileSettings.email} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <Textarea defaultValue={profileSettings.bio} rows={3} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">College/University</label>
                <Input defaultValue={profileSettings.college} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Major</label>
                <Input defaultValue={profileSettings.major} />
              </div>
            </div>

            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell size={20} />
              Notification Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">New Messages</h4>
                <p className="text-sm text-muted-foreground">Notify me about new direct messages</p>
              </div>
              <Checkbox defaultChecked={notificationSettings.newMessages} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Gig Updates</h4>
                <p className="text-sm text-muted-foreground">Notify me about application status changes</p>
              </div>
              <Checkbox defaultChecked={notificationSettings.gigUpdates} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">New Gig Recommendations</h4>
                <p className="text-sm text-muted-foreground">Notify me about new gigs that match my profile</p>
              </div>
              <Checkbox defaultChecked={notificationSettings.newGigs} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Weekly Digest</h4>
                <p className="text-sm text-muted-foreground">Send me a weekly summary of my activity</p>
              </div>
              <Checkbox defaultChecked={notificationSettings.weeklyDigest} />
            </div>

            <Button>Save Notifications</Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock size={20} />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Current Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">New Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Confirm New Password</label>
              <Input type="password" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe size={20} />
              Language & Region
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Language</label>
              <Select defaultValue="en-us">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-us">English (US)</SelectItem>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Timezone</label>
              <Select defaultValue="pst">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                  <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                  <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Save Language Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}