import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  AlertTriangle, 
  Shield, 
  Zap, 
  Target, 
  Award, 
  Coins, 
  Star,
  CheckCircle,
  BookOpen,
  Globe,
  Users,
  TrendingUp
} from 'lucide-react';

export function ForStudents() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Scam Job Postings',
      description: 'Fake opportunities that waste your time and sometimes even ask for money upfront.'
    },
    {
      icon: Target,
      title: 'Lack of Guidance',
      description: 'No clear direction on which opportunities are legitimate or worth your time.'
    },
    {
      icon: Zap,
      title: 'No Easy Gigs',
      description: 'Traditional job boards focus on full-time roles, not flexible student-friendly gigs.'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Verified Employers Only',
      description: 'Every employer goes through our rigorous verification process. No scams, just real opportunities.',
      details: 'Company registration, business verification, and background checks ensure your safety.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Application Process',
      description: 'Apply to multiple gigs with one click. Our smart matching shows you the best opportunities.',
      details: 'AI-powered recommendations based on your skills, schedule, and preferences.'
    },
    {
      icon: Target,
      title: 'Personalized Matches',
      description: 'Get gig recommendations tailored to your skills, availability, and career goals.',
      details: 'Machine learning algorithms improve matches over time based on your activity.'
    }
  ];

  const colleges = [
    'MIT', 'Stanford', 'Harvard', 'UC Berkeley', 'NYU', 'Georgia Tech', 'CMU', 'UT Austin'
  ];

  const features = [
    {
      icon: Globe,
      title: 'Smart Gig Discovery',
      description: 'AI-powered recommendations help you find gigs that match your skills and interests.',
      image: 'mobile-app-interface'
    },
    {
      icon: Users,
      title: 'Professional Network',
      description: 'Build connections with industry professionals and fellow students.',
      image: 'networking-connections'
    },
    {
      icon: BookOpen,
      title: 'Skill Development',
      description: 'Access learning resources and get feedback to improve your professional skills.',
      image: 'online-learning'
    }
  ];

  const creditLevels = [
    { level: 'Bronze', credits: '0-100', benefits: 'Basic gig access, profile verification' },
    { level: 'Silver', credits: '101-500', benefits: 'Priority applications, featured profile' },
    { level: 'Gold', credits: '501-1000', benefits: 'Exclusive gigs, mentor access' },
    { level: 'Platinum', credits: '1000+', benefits: 'All benefits + premium support' }
  ];

  const studentReviews = [
    {
      name: 'Alex Chen',
      university: 'Stanford University',
      major: 'Computer Science',
      content: 'Got my first coding gig through GigHive and loved the experience. The payment was prompt and the project was exactly as described.',
      rating: 5,
      avatar: 'AC',
      credits: 850
    },
    {
      name: 'Maya Patel',
      university: 'NYU',
      major: 'Marketing',
      content: 'The credit system is genius! I am motivated to take on more projects and the quality of gigs keeps getting better.',
      rating: 5,
      avatar: 'MP',
      credits: 1250
    },
    {
      name: 'Jordan Williams',
      university: 'UC Berkeley',
      major: 'Design',
      content: 'Finally found a platform that understands student needs. Flexible timing and fair compensation make this perfect for my schedule.',
      rating: 5,
      avatar: 'JW',
      credits: 620
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            👩‍🎓 Built for Students, By Students
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Your Future Starts <br />
            <span className="text-primary">Here</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop struggling with unreliable job boards and questionable opportunities. 
            Join thousands of students earning money while building their careers.
          </p>
          <Button size="lg" className="px-8">
            Start Earning Today
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-destructive/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Tired of These Problems?
                </h2>
                <p className="text-xl text-muted-foreground">
                  We know the struggle. Here's what most students face when looking for work.
                </p>
              </div>
              <div className="space-y-6">
                {problems.map((problem, index) => (
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
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709718499852-4d4aa8162047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVzdHJhdGVkJTIwc3R1ZGVudCUyMGxhcHRvcCUyMHN0cmVzc3xlbnwxfHx8fDE3NTc3MDM4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Frustrated student"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How We Help You Succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            GigHive is designed specifically to solve the problems students face in finding reliable work.
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

      {/* College Partners */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Partnered with Top Universities
                </h2>
                <p className="text-xl text-muted-foreground">
                  We work directly with career centers and student organizations at leading universities to provide verified opportunities.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colleges.map((college) => (
                  <div key={college} className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold text-primary text-sm">
                        {college.split(' ')[0].slice(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{college}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU3NjcxODI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="College campus"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Features That Make a Difference</h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools designed to help you succeed in your gig work journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <feature.icon className="w-16 h-16 text-primary" />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Credits System */}
      <section className="bg-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              <Coins className="w-8 h-8 inline mr-2 text-primary" />
              GigHive Credits System
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Earn credits for every completed gig and unlock exclusive benefits. The more you work, the better opportunities you get!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditLevels.map((level, index) => (
              <Card key={index} className={`text-center ${level.level === 'Platinum' ? 'border-primary shadow-lg' : ''}`}>
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                    level.level === 'Bronze' ? 'bg-orange-100 text-orange-600' :
                    level.level === 'Silver' ? 'bg-gray-100 text-gray-600' :
                    level.level === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{level.level}</h3>
                    <p className="text-sm text-muted-foreground">{level.credits} credits</p>
                  </div>
                  <p className="text-sm">{level.benefits}</p>
                  {level.level === 'Bronze' && (
                    <Progress value={30} className="h-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Earn 10-50 credits per completed gig based on project complexity and client rating
            </p>
            <Button>Learn More About Credits</Button>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Students Are Saying</h2>
          <p className="text-xl text-muted-foreground">
            Real stories from students who found success on GigHive.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {studentReviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">"{review.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">{review.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.university}</div>
                      <div className="text-xs text-muted-foreground">{review.major}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-primary">
                      <Coins className="w-4 h-4" />
                      <span className="text-sm font-semibold">{review.credits}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Credits</div>
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
            Join thousands of students already earning money and building their careers on GigHive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Create Student Profile
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Browse Available Gigs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}