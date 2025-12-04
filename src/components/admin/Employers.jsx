import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Briefcase, Check, X, Eye } from 'lucide-react';

export function Employers({ user }) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Employer Management</h1>
        <p className="text-muted-foreground">Manage employer verifications and accounts</p>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Verification (8)</TabsTrigger>
          <TabsTrigger value="approved">Approved Employers</TabsTrigger>
          <TabsTrigger value="blacklisted">Blacklisted</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase size={20} />
                Pending Employer Verifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { company: "TechStart Inc.", contact: "sarah@techstart.com", industry: "Technology", submitted: "1 hour ago" },
                  { company: "DesignFlow Studio", contact: "mike@designflow.com", industry: "Design", submitted: "3 hours ago" }
                ].map((employer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{employer.company}</h4>
                      <p className="text-sm text-muted-foreground">{employer.contact}</p>
                      <p className="text-sm text-muted-foreground">{employer.industry}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        Submitted {employer.submitted}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye size={16} className="mr-2" />
                        Review
                      </Button>
                      <Button size="sm" variant="outline">
                        <Check size={16} className="mr-2" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        <X size={16} className="mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved">
          <p className="text-muted-foreground text-center py-8">
            Approved employers will appear here
          </p>
        </TabsContent>

        <TabsContent value="blacklisted">
          <p className="text-muted-foreground text-center py-8">
            Blacklisted employers will appear here
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}