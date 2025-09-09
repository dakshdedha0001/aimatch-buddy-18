import React, { useState } from 'react';
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
      
      {/* Main content */}
      <div className="relative z-10">
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
      </div>

      {/* About section - always visible at bottom */}
      {currentState === 'upload' && <AboutSection />}
    </div>
  );
};

export default Index;