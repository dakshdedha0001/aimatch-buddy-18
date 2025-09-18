import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { Menu, X, Home, FileText, BarChart3, Settings, HelpCircle } from 'lucide-react';
import avsarLogo from '@/assets/avsar-logo.png';

interface HeaderProps {
  currentState: string;
  onStateChange: (state: 'upload' | 'loading' | 'chat' | 'results') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentState, onStateChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const navigation = [
    { name: 'Dashboard', icon: Home, action: () => onStateChange('upload'), active: currentState === 'upload' },
    { name: 'Resume Analysis', icon: FileText, action: () => onStateChange('upload'), active: currentState === 'loading' || currentState === 'chat' },
    { name: 'Results', icon: BarChart3, action: () => onStateChange('results'), active: currentState === 'results' },
  ];

  return (
    <header className="relative z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => onStateChange('upload')}
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            >
              Avsar
            </button>
          </div>

          {/* Desktop Navigation */}
          <SignedIn>
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </SignedIn>

          {/* User Section */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <div className="flex items-center gap-3">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            
            <SignedIn>
              <div className="flex items-center gap-3">
                <img 
                  src={avsarLogo} 
                  alt="Avsar Logo" 
                  className="w-8 h-8 drop-shadow-sm"
                />
                {user && (
                  <div className="hidden sm:block text-sm text-gray-600">
                    Welcome, {user.firstName || user.username || 'User'}!
                  </div>
                )}
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </SignedIn>

            {/* Mobile menu button */}
            <SignedIn>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </SignedIn>
          </div>
        </div>

        {/* Mobile Navigation */}
        <SignedIn>
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.action();
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      item.active
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <HelpCircle className="w-5 h-5" />
                    <span className="font-medium">Help & Support</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </SignedIn>
      </div>
    </header>
  );
};