import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { UploadSection } from '@/components/UploadSection';
import { LoadingSimulation } from '@/components/LoadingSimulation';
import { ChatSimulation } from '@/components/ChatSimulation';
import { ResultsDashboard } from '@/components/ResultsDashboard';
import { AboutSection } from '@/components/AboutSection';

type AppState = 'upload' | 'loading' | 'chat' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setCurrentState('loading');
  };

  const handleLoadingComplete = () => {
    setCurrentState('chat');
  };

  const handleChatComplete = () => {
    setCurrentState('results');
  };

  const handleRestart = () => {
    setCurrentState('upload');
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Header with authentication */}
      <header className="relative z-20 flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-gray-800">Resume Analyzer</h1>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>
      
      {/* Main content */}
      <div className="relative z-10">
        <SignedOut>
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Resume Analyzer</h2>
              <p className="text-gray-600 mb-8">Please sign in to upload and analyze your resume</p>
              <SignInButton mode="modal">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>
        
        <SignedIn>
          {currentState === 'upload' && (
            <UploadSection onFileUpload={handleFileUpload} />
          )}
          
          {currentState === 'loading' && (
            <LoadingSimulation 
              fileName={uploadedFile?.name || 'resume.pdf'}
              onComplete={handleLoadingComplete} 
            />
          )}
          
          {currentState === 'chat' && (
            <ChatSimulation onComplete={handleChatComplete} />
          )}
          
          {currentState === 'results' && (
            <ResultsDashboard onRestart={handleRestart} />
          )}
        </SignedIn>
      </div>

      {/* About section - always visible at bottom */}
      <SignedIn>
        {currentState === 'upload' && <AboutSection />}
      </SignedIn>
    </div>
  );
};

export default Index;