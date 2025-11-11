import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Globe,
  Award,
  Users,
  Building2,
  Star
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-brand-dark-blue via-brand-dark-blue to-brand-dark-blue text-white overflow-hidden">
      {/* Company Pin Icon Background Element */}
      <div className="absolute right-0 top-0 opacity-10 transform rotate-12">
        <Image 
          src="/images/company-pin-icon.png" 
          alt="Company Pin Icon" 
          width={400} 
          height={400} 
          className="w-96 h-96 object-contain"
        />
      </div>
      
      {/* Additional Subtle Company Pin Icon in Left Background */}
      <div className="absolute left-0 bottom-0 opacity-8 transform -rotate-6">
        <Image 
          src="/images/company-pin-icon.png" 
          alt="Company Pin Icon" 
          width={300} 
          height={300} 
          className="w-72 h-72 object-contain"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="RE/MAX Excellence" 
                  width={200} 
                  height={80} 
                  className="h-16 w-auto"
                  priority
                />
              </div>
              <p className="text-white/90 text-sm leading-relaxed font-arial">
                Youngest, fastest-growing real estate brokerage. We bring fresh energy with RE/MAX's unmatched global reach.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-bright-red rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-bright-red rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-bright-red rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-brand-bright-red rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-montserrat border-b-2 border-brand-bright-red pb-2">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/pre-construction" className="text-white/90 hover:text-brand-bright-red transition-colors duration-200 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Pre-Construction
                </a>
              </li>
              <li>
                <a href="/tools" className="text-white/90 hover:text-brand-bright-red transition-colors duration-200 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Tools & Technology
                </a>
              </li>
              <li>
                <a href="/events" className="text-white/90 hover:text-brand-bright-red transition-colors duration-200 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Events & Networking
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/90 hover:text-brand-bright-red transition-colors duration-200 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Market Insights
                </a>
              </li>
              <li>
                <a href="/support" className="text-white/90 hover:text-brand-bright-red transition-colors duration-200 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Support
                </a>
              </li>
              <li>
                <a href="/join-us" className="text-white/90 hover:text-brand-bright-red transition-colors duration-200 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Join Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-montserrat border-b-2 border-brand-bright-red pb-2">
              Get In Touch
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand-bright-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Mississauga Office</p>
                  <p className="text-white font-semibold text-sm leading-relaxed">100 Milverton Dr #610<br />Mississauga, ON L6R 4H1</p>
                  <a href="tel:9055074436" className="text-brand-bright-red hover:text-white transition-colors text-sm font-semibold">(905) 507-4436</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-brand-bright-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Brampton Office</p>
                  <p className="text-white font-semibold text-sm leading-relaxed">456 Vodden St E #21b<br />Brampton, ON L6S 5Y7</p>
                  <a href="tel:5193421961" className="text-brand-bright-red hover:text-white transition-colors text-sm font-semibold">519-342-1961</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-bright-red rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Email Us</p>
                  <p className="text-white font-semibold">info@remaxexcellence.ca</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-brand-bright-red hover:bg-brand-dark-red text-white font-bold py-3 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
              Book a Meeting
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
          <div className="text-white/90 text-sm text-center md:text-left mb-4 md:mb-0 max-w-md drop-shadow-lg">
            © 2024 RE/MAX Excellence. All rights reserved. | RE/MAX Excellence is an independently owned and operated franchise of RE/MAX, LLC.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-bright-red fill-current" />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium drop-shadow-lg">4.9/5</span>
            </div>
            
            <a href="https://share.google/0b8eBsJOqJ035ZZm4" target="_blank" rel="noopener noreferrer">
              <Button className="bg-brand-bright-red hover:bg-brand-dark-red text-white font-semibold px-6 py-2 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Leave a Review
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
