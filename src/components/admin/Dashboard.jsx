import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Users, 
  Briefcase, 
  FileText, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

export function Dashboard({ user }) {
  const stats = [
    {
      title: "Total Students",
      value: "50,432",
      change: "+1,234 this month",
      icon: Users,
      trend: "up"
    },
    {
      title: "Total Employers",
      value: "2,156",
      change: "+45 this month",
      icon: Briefcase,
      trend: "up"
    },
    {
      title: "Active Gigs",
      value: "1,890",
      change: "+123 this week",
      icon: FileText,
      trend: "up"
    },
    {
      title: "Platform Revenue",
      value: "$245K",
      change: "+18% from last month",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  const pendingActions = [
    { type: 'student', count: 25, label: 'Student verifications pending' },
    { type: 'employer', count: 8, label: 'Employer verifications pending' },
    { type: 'gig', count: 12, label: 'Gigs awaiting review' },
    { type: 'report', count: 3, label: 'Reports to investigate' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and pending actions</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Shield size={16} />
          Administrator
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                  <Icon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Pending Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="text-orange-500" size={20} />
            Pending Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendingActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                    {action.type === 'student' && <Users size={20} />}
                    {action.type === 'employer' && <Briefcase size={20} />}
                    {action.type === 'gig' && <FileText size={20} />}
                    {action.type === 'report' && <AlertTriangle size={20} />}
                  </div>
                  <div>
                    <p className="font-medium">{action.label}</p>
                    <Badge variant="secondary">{action.count} pending</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Alex Kim - Stanford", type: "student", status: "approved", time: "2 hours ago" },
                { name: "TechStart Inc.", type: "employer", status: "approved", time: "4 hours ago" },
                { name: "Sarah Chen - MIT", type: "student", status: "pending", time: "6 hours ago" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.type} verification</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={item.status === 'approved' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">API Response Time</span>
                <Badge variant="default" className="bg-green-500">125ms</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Performance</span>
                <Badge variant="default" className="bg-green-500">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Server Uptime</span>
                <Badge variant="default" className="bg-green-500">99.9%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Users</span>
                <Badge variant="secondary">12,456</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}