import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Check, 
  Star,
  CreditCard,
  Download,
  Zap
} from 'lucide-react';

export function Plans({ user }) {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "month",
      description: "Perfect for trying out the platform",
      features: [
        "Post 2 gigs per month",
        "Basic applicant filtering",
        "Standard support",
        "30-day application history"
      ],
      limitations: [
        "Limited to 10 applications per gig",
        "No priority listing",
        "Basic analytics"
      ],
      current: true,
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "month",
      description: "Ideal for small businesses and startups",
      features: [
        "Post unlimited gigs",
        "Advanced applicant filtering",
        "Priority support",
        "Unlimited application history",
        "Advanced analytics",
        "Priority gig listing",
        "Video call integration",
        "Team collaboration tools"
      ],
      limitations: [],
      current: false,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large companies with high volume hiring",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced reporting",
        "API access",
        "Bulk operations",
        "Custom contracts"
      ],
      limitations: [],
      current: false,
      popular: false
    }
  ];

  const paymentHistory = [
    {
      id: 1,
      plan: "Professional",
      amount: "$49.00",
      date: "Dec 1, 2024",
      status: "paid",
      invoice: "INV-001"
    },
    {
      id: 2,
      plan: "Professional",
      amount: "$49.00",
      date: "Nov 1, 2024",
      status: "paid",
      invoice: "INV-002"
    }
  ];

  const usage = {
    gigsPosted: 8,
    gigsLimit: "Unlimited",
    applicationsReceived: 156,
    applicationsLimit: "Unlimited",
    storageUsed: "2.3 GB",
    storageLimit: "50 GB"
  };

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Plans & Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information</p>
      </div>

      {/* Current Plan Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Current Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{usage.gigsPosted}</p>
              <p className="text-sm text-muted-foreground">Gigs Posted</p>
              <p className="text-xs text-muted-foreground">Limit: {usage.gigsLimit}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{usage.applicationsReceived}</p>
              <p className="text-sm text-muted-foreground">Applications Received</p>
              <p className="text-xs text-muted-foreground">Limit: {usage.applicationsLimit}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{usage.storageUsed}</p>
              <p className="text-sm text-muted-foreground">Storage Used</p>
              <p className="text-xs text-muted-foreground">Limit: {usage.storageLimit}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-primary' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">
                  <Star size={12} className="mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                {plan.name}
                {plan.current && (
                  <Badge variant="secondary">Current</Badge>
                )}
              </CardTitle>
              <div className="py-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <li key={limitIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">×</span>
                    <span className="text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.current ? "secondary" : "default"}
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : `Upgrade to ${plan.name}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Payment History
            <Button variant="outline" size="sm">
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{payment.plan} Plan</h4>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
                
                <div className="text-right">
                  <p className="font-medium">{payment.amount}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant={payment.status === 'paid' ? 'default' : 'secondary'}>
                      {payment.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Download size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Billing Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard size={20} />
            Billing Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <CreditCard className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Billing Address</h4>
              <p className="text-sm text-muted-foreground">
                123 Business St<br />
                San Francisco, CA 94105<br />
                United States
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                Update Address
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Plans; 