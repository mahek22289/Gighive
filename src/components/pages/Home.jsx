import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Users, Briefcase, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Home() {
  const stats = [
    { label: 'Students Registered', value: '50,000+', icon: Users },
    { label: 'Employers Onboarded', value: '2,500+', icon: Briefcase },
    { label: 'Gigs Posted', value: '15,000+', icon: TrendingUp },
    { label: 'Success Rate', value: '94%', icon: Star },
  ];

  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      description: 'Create your profile as a student or employer in minutes'
    },
    {
      number: '02',
      title: 'Apply or Post',
      description: 'Students apply to gigs, employers post opportunities'
    },
    {
      number: '03',
      title: 'Get Hired',
      description: 'Connect, collaborate, and complete amazing projects'
    }
  ];

  const companies = [
    'Microsoft', 'Google', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Spotify', 'Adobe'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Verified & Trusted',
      description: 'All employers and students are verified for safety and reliability'
    },
    {
      icon: Zap,
      title: 'Quick Matching',
      description: 'AI-powered matching connects you with perfect opportunities instantly'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Our rating system ensures high-quality work and fair compensation'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      content: 'GigHive helped me land my first tech internship. The platform is so easy to use!',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Startup Founder',
      content: 'Found amazing student talent for our marketing campaign. Highly recommend!',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emma Johnson',
      role: 'Design Student',
      content: 'Love the credit system and how it gamifies the whole experience. Great platform!',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🚀 The Future of Student Employment
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Connect. Work. <br />
                  <span className="text-primary">Grow Together.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  The trusted platform where students find meaningful gig work and employers discover top talent.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653669487404-09c3617c2b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjB3b3JraW5nJTIwbGFwdG9wc3xlbnwxfHx8fDE3NTc2MDQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students working together"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6 space-y-4">
                  <stat.icon className="w-8 h-8 mx-auto text-primary" />
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How GigHive Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these three easy steps to begin your journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Companies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-semibold">Trusted by Leading Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company) => (
              <div key={company} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto">
                  <span className="font-semibold text-muted-foreground text-sm">
                    {company.slice(0, 3).toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GigHive */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose GigHive?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just another job board. We're your partner in building successful careers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-8 text-center space-y-4">
                  <benefit.icon className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Community Says</h2>
          <p className="text-xl text-muted-foreground">
            Real stories from students and employers who found success on GigHive.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">"{review.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">{review.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90">
            Join thousands of students and employers who are already building their future on GigHive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Join as Student
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Join as Employer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}