import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Users, Plus, MessageSquare, UserPlus } from 'lucide-react';

export function Collaboration({ user }) {
  const teams = [
    {
      id: 1,
      name: "React Masters",
      members: 3,
      maxMembers: 4,
      project: "E-commerce Platform",
      skills: ["React", "Node.js", "MongoDB"],
      status: "active"
    },
    {
      id: 2,
      name: "Design Innovators",
      members: 2,
      maxMembers: 3,
      project: "Mobile App UI",
      skills: ["Figma", "UI/UX", "Prototyping"],
      status: "recruiting"
    }
  ];

  const suggestedFriends = [
    {
      name: "Mike Johnson",
      university: "Stanford University",
      skills: ["Python", "Data Science"],
      mutualFriends: 3
    },
    {
      name: "Lisa Wang",
      university: "MIT",
      skills: ["React", "JavaScript"],
      mutualFriends: 2
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Collaboration</h1>
        <p className="text-muted-foreground">Team up with fellow students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Teams */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  Your Teams
                </div>
                <Button size="sm">
                  <Plus size={16} className="mr-2" />
                  Create Team
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teams.map((team) => (
                  <div key={team.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{team.name}</h4>
                        <p className="text-sm text-muted-foreground">{team.project}</p>
                      </div>
                      <Badge variant={team.status === 'active' ? 'default' : 'secondary'}>
                        {team.status}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {team.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        {team.members}/{team.maxMembers} members
                      </span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare size={16} className="mr-2" />
                          Chat
                        </Button>
                        {team.status === 'recruiting' && (
                          <Button size="sm">
                            <UserPlus size={16} className="mr-2" />
                            Invite
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Suggested Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {suggestedFriends.map((friend, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold">
                          {friend.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-sm">{friend.name}</h5>
                        <p className="text-xs text-muted-foreground">{friend.university}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {friend.skills.slice(0, 2).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {friend.mutualFriends} mutual friends
                      </span>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}