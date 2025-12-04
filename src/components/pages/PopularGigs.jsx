import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Code, 
  Megaphone, 
  ShoppingBag, 
  Dumbbell, 
  PenTool,
  Camera,
  BookOpen,
  Music,
  MapPin,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  Eye,
  Calendar,
  Users
} from 'lucide-react';

export function PopularGigs() {
  const featuredGigs = [
    {
      id: 1,
      title: 'Mobile App UI/UX Design',
      company: 'TechStart Inc.',
      description: 'Design a modern, intuitive interface for our new fitness tracking app. Looking for creative minds with experience in mobile design.',
      category: 'Design',
      location: 'Remote',
      duration: '2-3 weeks',
      pay: '$800-1200',
      skillsRequired: ['Figma', 'UI/UX', 'Mobile Design'],
      applicants: 24,
      posted: '2 days ago',
      featured: true,
      urgent: false,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Social Media Marketing Campaign',
      company: 'Green Earth Co.',
      description: 'Create and execute a social media campaign for our sustainable products launch. Need creative content creators.',
      category: 'Marketing',
      location: 'Hybrid - NYC',
      duration: '1 month',
      pay: '$600-900',
      skillsRequired: ['Social Media', 'Content Creation', 'Canva'],
      applicants: 18,
      posted: '1 day ago',
      featured: true,
      urgent: true,
      rating: 4.8
    },
    {
      id: 3,
      title: 'React Developer - E-commerce Site',
      company: 'ShopSmart',
      description: 'Build responsive components for our e-commerce platform. Great opportunity to work with modern React and TypeScript.',
      category: 'IT',
      location: 'Remote',
      duration: '4-6 weeks',
      pay: '$1200-1800',
      skillsRequired: ['React', 'TypeScript', 'JavaScript'],
      applicants: 42,
      posted: '3 days ago',
      featured: true,
      urgent: false,
      rating: 4.7
    }
  ];

  const categories = [
    {
      name: 'IT & Development',
      icon: Code,
      count: 1247,
      avgPay: '$1200',
      color: 'bg-blue-50 text-blue-600',
      trending: true
    },
    {
      name: 'Marketing & Social Media',
      icon: Megaphone,
      count: 892,
      avgPay: '$700',
      color: 'bg-green-50 text-green-600',
      trending: true
    },
    {
      name: 'Design & Creative',
      icon: PenTool,
      count: 634,
      avgPay: '$800',
      color: 'bg-purple-50 text-purple-600',
      trending: false
    },
    {
      name: 'Retail & Sales',
      icon: ShoppingBag,
      count: 523,
      avgPay: '$500',
      color: 'bg-orange-50 text-orange-600',
      trending: false
    },
    {
      name: 'Fitness & Wellness',
      icon: Dumbbell,
      count: 287,
      avgPay: '$400',
      color: 'bg-red-50 text-red-600',
      trending: true
    },
    {
      name: 'Photography & Video',
      icon: Camera,
      count: 445,
      avgPay: '$600',
      color: 'bg-indigo-50 text-indigo-600',
      trending: false
    },
    {
      name: 'Education & Tutoring',
      icon: BookOpen,
      count: 678,
      avgPay: '$350',
      color: 'bg-yellow-50 text-yellow-600',
      trending: false
    },
    {
      name: 'Music & Audio',
      icon: Music,
      count: 156,
      avgPay: '$500',
      color: 'bg-pink-50 text-pink-600',
      trending: false
    }
  ];

  const recentGigs = [
    {
      id: 4,
      title: 'Content Writer for Tech Blog',
      company: 'DevInsights',
      category: 'Writing',
      location: 'Remote',
      duration: '2 weeks',
      pay: '$400-600',
      posted: '3 hours ago',
      applicants: 5
    },
    {
      id: 5,
      title: 'Personal Trainer Assistant',
      company: 'FitLife Gym',
      category: 'Fitness',
      location: 'Boston, MA',
      duration: '1 month',
      pay: '$15/hour',
      posted: '5 hours ago',
      applicants: 12
    },
    {
      id: 6,
      title: 'Event Photography',
      company: 'Celebration Events',
      category: 'Photography',
      location: 'Chicago, IL',
      duration: '1 day',
      pay: '$300-500',
      posted: '8 hours ago',
      applicants: 18
    },
    {
      id: 7,
      title: 'Data Entry Specialist',
      company: 'DataCorp Solutions',
      category: 'Admin',
      location: 'Remote',
      duration: '3 weeks',
      pay: '$350-450',
      posted: '1 day ago',
      applicants: 28
    },
    {
      id: 8,
      title: 'Spanish Tutor',
      company: 'Language Connect',
      category: 'Education',
      location: 'Remote',
      duration: 'Ongoing',
      pay: '$20/hour',
      posted: '1 day ago',
      applicants: 15
    },
    {
      id: 9,
      title: 'Product Photography',
      company: 'E-commerce Plus',
      category: 'Photography',
      location: 'San Francisco, CA',
      duration: '1 week',
      pay: '$600-800',
      posted: '2 days ago',
      applicants: 22
    }
  ];

  const stats = [
    { label: 'Active Gigs', value: '15,247', icon: Eye },
    { label: 'New This Week', value: '1,205', icon: Calendar },
    { label: 'Avg. Applications', value: '23', icon: Users },
    { label: 'Success Rate', value: '94%', icon: TrendingUp }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Popular <span className="text-primary">Gigs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover trending opportunities from verified employers. Browse by category, location, or skill level to find your perfect gig.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center space-y-3">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <div className="space-y-1">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Gigs</h2>
              <p className="text-xl text-muted-foreground">High-priority opportunities from top employers</p>
            </div>
            <Badge variant="secondary" className="px-4 py-2">
              <Star className="w-4 h-4 mr-1" />
              Premium
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredGigs.map((gig) => (
              <Card key={gig.id} className="border-2 border-primary/20 relative overflow-hidden">
                {gig.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary">Featured</Badge>
                  </div>
                )}
                {gig.urgent && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive">Urgent</Badge>
                  </div>
                )}
                
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-lg">{gig.title}</h3>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="font-medium">{gig.company}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{gig.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">{gig.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {gig.skillsRequired.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{gig.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{gig.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span>{gig.pay}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{gig.applicants} applied</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-xs text-muted-foreground">{gig.posted}</span>
                    <Button size="sm">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Trending Categories</h2>
          <p className="text-xl text-muted-foreground">
            Explore opportunities across different industries and skill sets
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${category.color}`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  {category.trending && (
                    <div className="absolute -top-2 -right-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{category.count} active gigs</p>
                    <p>Avg. pay: {category.avgPay}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recently Posted */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Recently Posted</h2>
            <p className="text-xl text-muted-foreground">
              Fresh opportunities just added to the platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentGigs.map((gig) => (
              <Card key={gig.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{gig.title}</h3>
                    <p className="text-sm text-muted-foreground">{gig.company}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs">{gig.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs">{gig.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs">{gig.pay}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs">{gig.applicants} applied</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-xs text-muted-foreground">{gig.posted}</span>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Gigs
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Apply?</h2>
          <p className="text-xl opacity-90">
            Join thousands of students already earning money and building their careers. 
            Sign up now to apply for these amazing opportunities!
          </p>
          
          <div className="bg-white/10 rounded-2xl p-6 max-w-md mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold">What happens when you sign up:</h3>
              <div className="space-y-2 text-sm text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Create your profile in 5 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Get matched with relevant gigs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Apply with one click</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Start earning immediately</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Sign Up to Apply
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Login to Your Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}