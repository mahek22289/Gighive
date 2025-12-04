import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Users, 
  Target, 
  Shield, 
  Heart,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Award,
  Lightbulb,
  Rocket
} from 'lucide-react';

export function AboutUs() {
  const founders = [
    {
      name: 'Kavya Joshi',
      role: 'CEO & Founder',
      bio: 'Former Goldman Sachs analyst turned entrepreneur. Passionate about empowering students through meaningful work opportunities.',
      education: 'Harvard Business School, MIT',
      linkedin: '#',
      twitter: '#',
      avatar: 'SJ'
    },
    {
      name: 'Parth Dande',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google engineer with 8 years of experience building scalable platforms. Believes technology can bridge the gap between talent and opportunity.',
      education: 'Stanford CS, Berkeley',
      linkedin: '#',
      github: '#',
      avatar: 'MC'
    },
    {
      name: 'Abhishek Mishra',
      role: 'CPO & Co-Founder',
      bio: 'Former Head of Product at Uber. Expert in user experience and marketplace dynamics. Champion for student success.',
      education: 'NYU Stern, Columbia',
      linkedin: '#',
      twitter: '#',
      avatar: 'ER'
    }
  ];

  const teamMembers = [
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      avatar: 'DK'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Marketing',
      avatar: 'LW'
    },
    {
      name: 'James Wilson',
      role: 'Head of Operations',
      avatar: 'JW'
    },
    {
      name: 'Anna Patel',
      role: 'Head of Customer Success',
      avatar: 'AP'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Student-First Approach',
      description: 'Every decision we make prioritizes the success and safety of our student community.'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We maintain the highest standards of verification and honest communication.'
    },
    {
      icon: Target,
      title: 'Quality Over Quantity',
      description: 'We focus on meaningful opportunities that truly benefit both students and employers.'
    },
    {
      icon: Heart,
      title: 'Community Building',
      description: 'We foster long-term relationships and professional networks that last beyond college.'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'The Idea',
      description: 'Founded by three friends who struggled to find reliable gig work during college.',
      icon: Lightbulb
    },
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'Launched with 5 universities and 50 verified employers. First 1,000 students joined.',
      icon: Rocket
    },
    {
      year: '2024',
      title: 'Rapid Growth',
      description: 'Expanded to 100+ universities and 2,500+ employers. 50,000 students now active.',
      icon: Target
    },
    {
      year: '2025',
      title: 'National Scale',
      description: 'Serving students nationwide with advanced AI matching and enterprise partnerships.',
      icon: Award
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <Badge variant="secondary" className="w-fit mx-auto">
            🚀 Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About <span className="text-primary">GigHive</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize how students find work and how employers discover top talent. 
            Built by students, for students, with safety and success at our core.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Origin Story</h2>
                <p className="text-xl text-muted-foreground">
                  It all started in a cramped dorm room at Stanford...
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Like many college students, our founders struggled to find legitimate, well-paying gig work. 
                  Traditional job boards were full of scams, and the few real opportunities were buried under 
                  hundreds of fake postings.
                </p>
                <p className="text-muted-foreground">
                  After Sarah lost $200 to a fake "marketing internship" and Michael spent weeks applying to 
                  non-existent coding gigs, they realized there had to be a better way. Emily joined them 
                  with her product expertise, and together they built the platform they wished existed during 
                  their college years.
                </p>
                <p className="text-muted-foreground">
                  Today, GigHive is the result of that frustration turned into determination. We've created 
                  a safe, verified ecosystem where students can find meaningful work and employers can 
                  discover incredible talent.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1733826544831-ad71d05c8423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZm91bmRlcnMlMjBzdGFydHVwJTIwb2ZmaWNlfGVufDF8fHx8MTc1NzcwNDAyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team founders in office"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders & Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Founders</h2>
          <p className="text-xl text-muted-foreground">
            The passionate team behind GigHive's mission
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8 space-y-6">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  {founder.avatar}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                  <p className="text-sm text-muted-foreground">{founder.education}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
                <div className="flex justify-center space-x-3">
                  {founder.linkedin && (
                    <a href={founder.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {founder.twitter && (
                    <a href={founder.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {founder.github && (
                    <a href={founder.github} className="text-muted-foreground hover:text-primary">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold">Our Amazing Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto text-lg font-semibold">
                  {member.avatar}
                </div>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-xl opacity-90">
                To empower every student with safe, meaningful work opportunities that build their career while supporting their education.
              </p>
              <p className="opacity-80">
                We believe that students shouldn't have to choose between earning money and focusing on their studies. 
                Our platform creates flexible opportunities that enhance both financial stability and professional growth.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              <p className="text-xl opacity-90">
                A world where every student has access to verified, high-quality work experiences that launch successful careers.
              </p>
              <p className="opacity-80">
                We envision a future where the transition from education to career is seamless, supported by meaningful 
                professional relationships and real-world experience gained during college years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <p className="text-xl text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From a dorm room idea to a national platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                    <milestone.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-primary">{milestone.year}</div>
                    <h3 className="font-semibold">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </CardContent>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Trust & Safety Commitment</h2>
          <p className="text-xl text-muted-foreground">
            Your safety is our top priority
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-8 space-y-4">
              <Shield className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Rigorous Verification</h3>
              <p className="text-muted-foreground">
                Every employer undergoes background checks, business verification, and identity confirmation 
                before joining our platform.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-8 space-y-4">
              <Users className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">Community Monitoring</h3>
              <p className="text-muted-foreground">
                Our team actively monitors all interactions, reviews reports, and maintains community 
                standards to ensure a safe environment.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-8 space-y-4">
              <Heart className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated support team is available around the clock to help resolve any issues 
                and ensure positive experiences for all users.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                <p className="text-xl text-muted-foreground">
                  Have questions, feedback, or just want to say hello? We'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-muted-foreground">hello@gighive.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-muted-foreground">1-800-GIGHIVE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-muted-foreground">123 Innovation Drive<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-semibold">Send us a message</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="What's this about?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell us more..." rows={4} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}