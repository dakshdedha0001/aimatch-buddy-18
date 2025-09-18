import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { useClerkSupabaseSync } from '@/hooks/useClerk';
import { usePageTitle } from '@/hooks/usePageTitle';
import { UploadSection } from '@/components/UploadSection';
import { LoadingSimulation } from '@/components/LoadingSimulation';
import { ChatSimulation } from '@/components/ChatSimulation';
import { ResultsDashboard } from '@/components/ResultsDashboard';
import { AboutSection } from '@/components/AboutSection';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import avsarLogo from '@/assets/avsar-logo.png';

type AppState = 'upload' | 'loading' | 'chat' | 'results';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { user } = useUser();
  
  // Sync Clerk user with Supabase
  useClerkSupabaseSync();
  
  // Update page title based on auth state and current screen
  usePageTitle(currentState);

  const handleFileUpload = async (file: File) => {
    if (!user) return;
    
    setUploadedFile(file);
    setCurrentState('loading');
    
    try {
      // Create unique file path with user ID folder structure for RLS
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;
      
      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file);
      
      if (uploadError) {
        console.error('Upload error:', uploadError);
        return;
      }
      
      // Save resume record to database
      const { error: dbError } = await supabase
        .from('resumes')
        .insert({
          clerk_user_id: user.id,
          original_filename: file.name,
          file_path: filePath,
          file_size: file.size,
          content_type: file.type,
          analysis_status: 'pending'
        });
      
      if (dbError) {
        console.error('Database error:', dbError);
      }
      
      console.log('Resume uploaded successfully!');
    } catch (error) {
      console.error('Error uploading resume:', error);
    }
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
      {/* Clean background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-teal-50/30" />
      
      {/* Functional Header */}
      <Header currentState={currentState} onStateChange={setCurrentState} />
      
      {/* Main content */}
      <div className="relative z-10 pt-4">
        <SignedOut>
          {/* Demo/Preview content for non-authenticated users */}
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Avsar</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Experience AI-powered career guidance and skill assessment. Upload your resume to get personalized 
                recommendations for learning paths, career opportunities, and skill development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SignInButton mode="modal">
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                    Get Started Free
                  </button>
                </SignInButton>
                <button 
                  onClick={() => setCurrentState('results')}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
                >
                  View Demo
                </button>
              </div>
            </div>
            
            {/* Show demo content or upload section based on state */}
            {currentState === 'upload' && (
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">How InternMitra-AI Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Upload Your Resume</h4>
                        <p className="text-gray-600">Simply upload your resume in PDF format</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">AI Analysis</h4>
                        <p className="text-gray-600">Our AI analyzes your skills, experience, and career trajectory</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Personalized Guidance</h4>
                        <p className="text-gray-600">Get tailored recommendations for career growth and learning</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Start?</h3>
                  <p className="text-gray-600 mb-6">Sign up to upload your resume and unlock personalized AI insights</p>
                  <SignUpButton mode="modal">
                    <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Sign Up Now
                    </button>
                  </SignUpButton>
                </div>
              </div>
            )}
            
            {currentState === 'results' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Demo Results Dashboard</h3>
                  <p className="text-gray-600">This is a preview of what you'll see after uploading your resume</p>
                  <button 
                    onClick={() => setCurrentState('upload')}
                    className="mt-4 text-blue-600 hover:text-blue-700 underline"
                  >
                    ← Back to Home
                  </button>
                </div>
                <ResultsDashboard onRestart={() => setCurrentState('upload')} />
              </div>
            )}
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

      {/* About section */}
      {currentState === 'upload' && <AboutSection />}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;