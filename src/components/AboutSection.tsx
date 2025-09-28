import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Linkedin, Github, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <footer className="mt-32 border-t border-gray-200/60">
      {/* Main Footer Content */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Branding Line */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              <span className="text-blue-600 font-bold">Avsar</span> – Where Talents Meet Great Opportunities
            </h3>
            
            {/* About Text */}
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl text-black leading-relaxed font-semibold">
                Our intelligent platform leverages advanced AI and machine learning to match students with their ideal internship opportunities.
              </p>
              <p className="text-xl text-black leading-relaxed font-semibold">
                Built with fairness and transparency in mind, ensuring equal opportunities for all students through smart allocation policies.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button variant="outline" className="bg-white hover:bg-blue-50 border-gray-400 hover:border-blue-600 px-8 py-4 text-base font-bold rounded-full transition-all duration-300 hover:shadow-lg text-black border-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Button>
            <Button variant="outline" className="bg-white hover:bg-blue-50 border-gray-400 hover:border-blue-600 px-8 py-4 text-base font-bold rounded-full transition-all duration-300 hover:shadow-lg text-black border-2">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button variant="ghost" className="text-black hover:text-blue-600 hover:bg-blue-50 px-8 py-4 text-base font-bold rounded-full transition-all duration-300">
              About This Demo
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center space-x-6">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 text-black">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 text-black">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 text-black">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="py-6 px-6 bg-gray-50 border-t border-gray-300">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-base text-black font-bold">
            © 2025 Avsar. All Rights Reserved.
          </p>
          <p className="text-base text-black flex items-center font-bold">
            Demo prototype inspired by SIH Problem Statement 25033
            <Heart className="w-4 h-4 ml-2 text-red-600" />
          </p>
        </div>
      </div>
    </footer>
  );
};