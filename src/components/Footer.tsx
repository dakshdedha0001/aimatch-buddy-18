import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">InternMitra-AI</h3>
            <p className="text-gray-600 text-sm">
              Empowering careers with AI-powered resume analysis and personalized guidance.
            </p>
          </div>
          
          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Resume Analysis</li>
              <li>Skill Assessment</li>
              <li>Career Guidance</li>
              <li>Learning Paths</li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>GitHub</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 InternMitra-AI. All rights reserved. Powered by AI for your career success.
          </p>
        </div>
      </div>
    </footer>
  );
};