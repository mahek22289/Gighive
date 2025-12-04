import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Clock, 
  UserX, 
  DollarSign, 
  Shield, 
  Zap, 
  Target, 
  Star,
  Users,
  MessageSquare,
  CheckCircle,
  Search,
  Filter,
  Calendar,
  Play
} from 'lucide-react';

export function ForEmployers() {
  const employerProblems = [
    {
      icon: UserX,
      title: 'Finding Reliable Students',
      description: 'Difficult to identify trustworthy, skilled students who will deliver quality work on time.'
    },
    {
      icon: Shield,
      title: 'Trust & Verification Issues',
      description: 'No way to verify student credentials, past work, or reliability before hiring.'
    },
    {
      icon: Clock,
      title: 'Manual Hiring Process',
      description: 'Time-consuming application reviews, interviews, and onboarding processes slow you down.'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Pre-Verified Student Pool',
      description: 'Access thousands of students who have been verified through our academic partnerships.',
      details: 'University partnerships, GPA verification, skill assessments, and background checks.'
    },
    {
      icon: Zap,
      title: 'Faster Hiring Process',
      description: 'Streamlined posting, smart matching, and integrated communication tools save you time.',
      details: 'Post gigs in minutes, get matched candidates instantly, interview through our platform.'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Communication',
      description: 'Built-in messaging, file sharing, and project management tools keep everything organized.',
      details: 'In-app chat, document sharing, milestone tracking, and payment processing.'
    }
  ];

  const features = [
    {
      icon: Search,
      title: 'Smart Candidate Matching',
      description: 'Our AI matches your gigs with students who have the right skills and availability.',
      visual: 'AI algorithm visualization'
    },
    {
      icon: Filter,
      title: 'Advanced Filtering',
      description: 'Filter candidates by university, GPA, skills, experience, and availability.',
      visual: 'Filter interface mockup'
    },
    {
      icon: Calendar,
      title: 'Project Management',
      description: 'Track progress, set milestones, and manage deadlines all in one place.',
      visual: 'Project dashboard'
    },
    {
      icon: DollarSign,
      title: 'Secure Payments',
      description: 'Built-in escrow system ensures fair payment for both parties.',
      visual: 'Payment security features'
    }
  ];

  const successStories = [
    {
      company: 'TechStart Inc.',
      industry: 'Technology',
      story: 'Found 5 talented developers for our mobile app project. Completed 2 weeks ahead of schedule!',
      result: '2 weeks faster delivery',
      avatar: 'TS',
      rating: 5
    },
    {
      company: 'Green Marketing',
      industry: 'Marketing',
      story: 'Hired a creative team for our social media campaign. The results exceeded our expectations.',
      result: '150% increase in engagement',
      avatar: 'GM',
      rating: 5
    },
    {
      company: 'EduTech Solutions',
      industry: 'Education',
      story: 'Amazing design students helped us create our new course materials. Professional quality work!',
      result: '95% client satisfaction',
      avatar: 'ES',
      rating: 5
    }
  ];

  const reelStories = [
    {
      title: 'From Startup to Scale',
      description: 'How TechStart found their entire development team through GigHive',
      duration: '2:30',
      views: '12K'
    },
    {
      title: 'Marketing Magic',
      description: 'Green Marketing shares their success story with student creatives',
      duration: '1:45',
      views: '8.5K'
    },
    {
      title: 'Educational Excellence',
      description: 'EduTech reveals how students helped them innovate',
      duration: '3:15',
      views: '15K'
    }
  ];

  const employerReviews = [
    {
      name: 'David Chen',
      company: 'InnovateCorp',
      position: 'CTO',
      content: 'The quality of students on GigHive is exceptional. We have hired 12 students over the past year and every single one exceeded our expectations.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Creative Studio',
      position: 'Creative Director',
      content: 'The verification process gives us confidence in every hire. No more risky recruitment - just talented, verified students ready to work.',
      rating: 5,
      avatar: 'LR'
    },
    {
      name: 'Michael Thompson',
      company: 'DataFlow Analytics',
      position: 'Founder',
      content: 'GigHive has become our go-to platform for finding student talent. The integrated communication tools make managing projects effortless.',
      rating: 5,
      avatar: 'MT'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            🏢 Trusted by 2,500+ Companies
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hire Verified Students <br />
            <span className="text-primary">In Minutes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop wasting time on unreliable freelancers. Get access to a pre-verified pool of talented students from top universities, ready to deliver quality work.
          </p>
          <Button size="lg" className="px-8">
            Post Your First Gig
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-destructive/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhpcmluZyUyMGludGVydmlld3xlbnwxfHx8fDE3NTc3MDM4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business hiring process"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hiring Challenges Getting You Down?
                </h2>
                <p className="text-xl text-muted-foreground">
                  We understand the frustrations of traditional hiring. Here's what most employers struggle with.
                </p>
              </div>
              <div className="space-y-6">
                {employerProblems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{problem.title}</h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How GigHive Solves Your Problems</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is specifically designed to eliminate the common pain points of hiring student talent.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
                <p className="text-sm text-muted-foreground border-t pt-4">{solution.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features for Smart Hiring</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to find, hire, and manage student talent effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <feature.icon className="w-16 h-16 text-primary" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Success Stories (Reels Format) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
          <p className="text-xl text-muted-foreground">
            Watch how other companies found success with GigHive students.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reelStories.map((story, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative flex items-center justify-center">
                <Play className="w-16 h-16 text-white bg-primary/80 rounded-full p-4" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs bg-black/50 px-2 py-1 rounded">{story.duration}</div>
                </div>
                <div className="absolute top-4 right-4 text-white">
                  <div className="text-xs bg-black/50 px-2 py-1 rounded">{story.views} views</div>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold">{story.title}</h3>
                <p className="text-sm text-muted-foreground">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Success Stats */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {successStories.map((story, index) => (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold">{story.avatar}</span>
                </div>
                <h3 className="font-semibold">{story.company}</h3>
                <p className="text-sm opacity-90">"{story.story}"</p>
                <div className="text-lg font-bold text-secondary">{story.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Employers Are Saying</h2>
          <p className="text-xl text-muted-foreground">
            Real feedback from companies who found great student talent on GigHive.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {employerReviews.map((review, index) => (
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
                    <div className="text-sm text-muted-foreground">{review.position}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing & Value Proposition */}
      <section className="bg-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pay Only When You Hire</h3>
                <p className="text-muted-foreground">No subscription fees, no hidden costs. Just a small service fee when you successfully hire a student.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Free to Post</h4>
                  <p className="text-sm text-muted-foreground">Create unlimited gig postings</p>
                </div>
                <div className="space-y-2">
                  <Users className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Free to Browse</h4>
                  <p className="text-sm text-muted-foreground">Review all candidate profiles</p>
                </div>
                <div className="space-y-2">
                  <DollarSign className="w-8 h-8 text-primary mx-auto" />
                  <h4 className="font-semibold">5% Service Fee</h4>
                  <p className="text-sm text-muted-foreground">Only charged on successful hires</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Next Star Employee?</h2>
          <p className="text-xl opacity-90">
            Join 2,500+ companies who have already discovered the power of verified student talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Post Your First Gig
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Browse Student Profiles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}