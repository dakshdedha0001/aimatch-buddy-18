import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Linkedin, Github, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <footer className="mt-32 border-t border-gray-200/60">
      {/* Main Footer Content */}
      <div className="py-20 px-6 bg-gradient-to-t from-gray-50/95 via-white/98 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Branding Line */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              <span className="gradient-text">ShikshaSetu AI</span> – Bridging Students with AI-Powered Internship Matching
            </h3>
            
            {/* About Text */}
            <div className="max-w-3xl mx-auto space-y-2">
              <p className="text-base text-gray-700 leading-relaxed">
                Our intelligent platform leverages advanced AI algorithms to match students with their ideal internship opportunities.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Built with fairness and transparency in mind, ensuring equal opportunities for all students through smart reservation policies.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button variant="outline" className="bg-white hover:bg-gray-50 border-gray-300 hover:border-primary px-8 py-4 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Button>
            <Button variant="outline" className="bg-white hover:bg-gray-50 border-gray-300 hover:border-primary px-8 py-4 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-primary hover:bg-primary/5 px-8 py-4 text-base font-medium rounded-full transition-all duration-300">
              About This Demo
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="py-6 px-6 bg-gray-100/50 border-t border-gray-200/60">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600">
            © 2025 ShikshaSetu AI. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            Demo prototype inspired by SIH Problem Statement 25033
            <Heart className="w-4 h-4 ml-2 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};