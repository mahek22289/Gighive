import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold">GigHive</span>
            </div>
            <p className="text-muted-foreground">
              Connecting talented students with meaningful opportunities from top employers.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
              <li><Link to="/for-students" className="text-muted-foreground hover:text-primary">For Students</Link></li>
              <li><Link to="/for-employers" className="text-muted-foreground hover:text-primary">For Employers</Link></li>
              <li><Link to="/popular-gigs" className="text-muted-foreground hover:text-primary">Popular Gigs</Link></li>
              <li><Link to="/about-us" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Safety</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Community Guidelines</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">support@gighive.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 GigHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}