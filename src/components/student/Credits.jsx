import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { 
  CreditCard, 
  Gift, 
  Zap, 
  TrendingUp,
  Award,
  ShoppingCart
} from 'lucide-react';

export function Credits({ user }) {
  const creditBalance = user?.credits || 850;
  
  const recentEarnings = [
    { source: "React Project Completion", amount: 150, date: "2 days ago", type: "gig" },
    { source: "5-Star Rating Bonus", amount: 25, date: "1 week ago", type: "bonus" },
    { source: "Profile Completion", amount: 50, date: "2 weeks ago", type: "milestone" }
  ];

  const redeemOptions = [
    { name: "Amazon Gift Card", credits: 500, value: "$50", popular: true },
    { name: "Textbook Voucher", credits: 300, value: "$30", popular: false },
    { name: "Coffee Shop Gift Card", credits: 200, value: "$20", popular: true },
    { name: "Cash Transfer", credits: 1000, value: "$100", popular: false }
  ];

  const milestones = [
    { name: "First Gig", credits: 50, completed: true },
    { name: "5 Completed Gigs", credits: 100, completed: true },
    { name: "10 Completed Gigs", credits: 200, completed: false, progress: 70 },
    { name: "Perfect Rating Month", credits: 150, completed: false, progress: 0 }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Credits</h1>
        <p className="text-muted-foreground">Earn credits and redeem rewards</p>
      </div>

      {/* Credit Balance */}
      <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 mb-2">Your Credit Balance</p>
              <p className="text-4xl font-bold">{creditBalance}</p>
              <p className="text-purple-100 mt-2">Credits Available</p>
            </div>
            <CreditCard size={64} className="text-purple-200" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Earnings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp size={20} />
              Recent Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEarnings.map((earning, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      {earning.type === 'gig' && <Award size={20} />}
                      {earning.type === 'bonus' && <Zap size={20} />}
                      {earning.type === 'milestone' && <Gift size={20} />}
                    </div>
                    <div>
                      <h4 className="font-medium">{earning.source}</h4>
                      <p className="text-sm text-muted-foreground">{earning.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">+{earning.amount}</p>
                    <Badge variant="secondary" className="text-xs">
                      {earning.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Credit Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-2xl font-bold">325</p>
              <p className="text-sm text-muted-foreground">Credits This Month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">1,250</p>
              <p className="text-sm text-muted-foreground">Total Earned</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">$85</p>
              <p className="text-sm text-muted-foreground">Total Redeemed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Redeem Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift size={20} />
            Redeem Credits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {redeemOptions.map((option, index) => (
              <div key={index} className={`p-4 border rounded-lg relative ${
                option.popular ? 'border-primary bg-primary/5' : ''
              }`}>
                {option.popular && (
                  <Badge className="absolute -top-2 left-2">Popular</Badge>
                )}
                <div className="text-center">
                  <ShoppingCart className="mx-auto mb-3 text-muted-foreground" size={32} />
                  <h4 className="font-medium mb-2">{option.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{option.value}</p>
                  <p className="font-semibold text-primary mb-3">{option.credits} Credits</p>
                  <Button 
                    size="sm" 
                    className="w-full"
                    disabled={creditBalance < option.credits}
                    variant={option.popular ? "default" : "outline"}
                  >
                    {creditBalance >= option.credits ? 'Redeem' : 'Need More Credits'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award size={20} />
            Credit Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {milestones.map((milestone, index) => (
              <div key={index} className={`p-4 border rounded-lg ${
                milestone.completed ? 'bg-green-50 border-green-200' : ''
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{milestone.name}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.credits} credits reward</p>
                  </div>
                  {milestone.completed ? (
                    <Badge className="bg-green-500">Completed</Badge>
                  ) : (
                    <Badge variant="secondary">In Progress</Badge>
                  )}
                </div>
                
                {!milestone.completed && milestone.progress > 0 && (
                  <div>
                    <Progress value={milestone.progress} className="h-2 mb-2" />
                    <p className="text-xs text-muted-foreground">{milestone.progress}% complete</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}