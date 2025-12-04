import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Play, UserPlus, Search, MessageSquare, CheckCircle, Award } from 'lucide-react';

export function HowItWorks() {
  const studentSteps = [
    {
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Sign up and build a compelling profile showcasing your skills, experience, and interests.',
      details: 'Add your education, skills, portfolio items, and availability preferences.'
    },
    {
      icon: Search,
      title: 'Browse & Apply',
      description: 'Explore thousands of verified gig opportunities that match your interests and schedule.',
      details: 'Use smart filters to find gigs by category, pay rate, duration, and location.'
    },
    {
      icon: MessageSquare,
      title: 'Connect & Interview',
      description: 'Chat directly with employers, discuss project details, and showcase your enthusiasm.',
      details: 'Use our in-app messaging system for secure, professional communication.'
    },
    {
      icon: CheckCircle,
      title: 'Complete & Earn',
      description: 'Deliver quality work, get paid securely, and build your reputation with reviews.',
      details: 'Track your progress, submit deliverables, and receive payments through our secure system.'
    }
  ];

  const employerSteps = [
    {
      icon: UserPlus,
      title: 'Create Company Profile',
      description: 'Set up your employer account with company details and verification documents.',
      details: 'Add company information, verify your business, and set up payment methods.'
    },
    {
      icon: Search,
      title: 'Post Your Gig',
      description: 'Create detailed job postings with clear requirements, timeline, and compensation.',
      details: 'Use our posting template to attract the right candidates with clear expectations.'
    },
    {
      icon: MessageSquare,
      title: 'Review & Interview',
      description: 'Browse applications, review student profiles, and conduct interviews to find the perfect match.',
      details: 'Access student portfolios, ratings, and previous work samples to make informed decisions.'
    },
    {
      icon: Award,
      title: 'Hire & Collaborate',
      description: 'Select your ideal candidate, manage the project, and build lasting professional relationships.',
      details: 'Use project management tools, milestone tracking, and secure payment processing.'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section with Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            How <span className="text-primary">GigHive</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our founders explain how we're revolutionizing the way students and employers connect for meaningful work opportunities.
          </p>
          
          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <Button size="lg" className="relative z-10">
                <Play className="w-6 h-6 mr-2" />
                Watch Explainer Video
              </Button>
            </div>
          </div>

          <p className="text-muted-foreground">
            Meet our founders and learn about our mission to create meaningful connections between students and employers.
          </p>
        </div>
      </section>

      {/* For Students Flow */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">For Students</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start earning while building your career
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 space-y-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <p className="text-xs text-muted-foreground border-t pt-3">{step.details}</p>
                </CardContent>
                {index < studentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">For Employers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find and hire talented students in just a few clicks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {employerSteps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6 space-y-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                <p className="text-xs text-muted-foreground border-t pt-3">{step.details}</p>
              </CardContent>
              {index < employerSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Features designed to make your experience seamless and successful
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Verified Profiles</h3>
                <p className="text-muted-foreground">
                  All users go through our verification process to ensure safety and authenticity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">In-App Communication</h3>
                <p className="text-muted-foreground">
                  Secure messaging system keeps all project discussions organized and professional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">Rating System</h3>
                <p className="text-muted-foreground">
                  Build your reputation through our transparent rating and review system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl opacity-90">
            Join our community today and start building meaningful professional relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Sign Up as Student
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Post Your First Gig
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}