import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Users, Check, X, Eye } from 'lucide-react';

export function Students({ user }) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Student Management</h1>
        <p className="text-muted-foreground">Manage student verifications and accounts</p>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending">Pending Verification (25)</TabsTrigger>
          <TabsTrigger value="approved">Approved Students</TabsTrigger>
          <TabsTrigger value="blacklisted">Blacklisted</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users size={20} />
                Pending Student Verifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Alex Kim", email: "alex.kim@stanford.edu", college: "Stanford University", submitted: "2 hours ago" },
                  { name: "Sarah Chen", email: "sarah.chen@mit.edu", college: "MIT", submitted: "4 hours ago" }
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{student.name}</h4>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                      <p className="text-sm text-muted-foreground">{student.college}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        Submitted {student.submitted}
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
            Approved students will appear here
          </p>
        </TabsContent>

        <TabsContent value="blacklisted">
          <p className="text-muted-foreground text-center py-8">
            Blacklisted students will appear here
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}