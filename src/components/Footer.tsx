import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Avsar</h3>
            <p className="text-gray-600 text-sm">
              Where talents meet opportunities through AI-powered matching and personalized guidance.
            </p>
          </div>
          
          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#resume-analysis" className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Resume Analysis</a></li>
              <li><a href="#skill-assessment" className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Skill Assessment</a></li>
              <li><a href="#career-guidance" className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Career Guidance</a></li>
              <li><a href="#learning-paths" className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Learning Paths</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.open('mailto:support@internmitra-ai.com', '_blank')}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('tel:+1-555-0123', '_blank')}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  Help Center
                </button>
              </li>
              <li><a href="#privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => window.open('https://linkedin.com/company/internmitra-ai', '_blank')}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://twitter.com/internmitra_ai', '_blank')}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Twitter className="w-3 h-3" />
                  Twitter
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://github.com/internmitra-ai', '_blank')}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Github className="w-3 h-3" />
                  GitHub
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open('https://blog.internmitra-ai.com', '_blank')}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  Blog
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Avsar. All rights reserved. Where talents meet opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};