import React, { useState, useEffect } from 'react';
import { CheckCircle, FileText, Brain, GraduationCap, Users, Target, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface LoadingSimulationProps {
  fileName: string;
  onComplete: () => void;
}

const loadingSteps = [
  { 
    id: 1, 
    text: "Reading Resume", 
    icon: FileText, 
    duration: 2000,
    details: "Parsing PDF content and structure..."
  },
  { 
    id: 2, 
    text: "Extracting Skills (NLP + NER magic ✨)", 
    icon: Brain, 
    duration: 2500,
    details: "Identifying technical skills and competencies..."
  },
  { 
    id: 3, 
    text: "Checking CGPA & Experience", 
    icon: GraduationCap, 
    duration: 1800,
    details: "Analyzing academic performance and work history..."
  },
  { 
    id: 4, 
    text: "Applying Reservation Rules (GEN/SC/ST/OBC + Rural/Urban ✅)", 
    icon: Users, 
    duration: 2200,
    details: "Fair allocation algorithm processing..."
  },
  { 
    id: 5, 
    text: "Matching Internships", 
    icon: Target, 
    duration: 2000,
    details: "Finding best-fit opportunities..."
  },
  { 
    id: 6, 
    text: "Generating Results", 
    icon: Sparkles, 
    duration: 1500,
    details: "Preparing your personalized matches..."
  }
];

export const LoadingSimulation: React.FC<LoadingSimulationProps> = ({ fileName, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (currentStep >= loadingSteps.length) {
      setTimeout(onComplete, 1000);
      return;
    }

    const step = loadingSteps[currentStep];
    
    // Start typing animation
    setIsTyping(true);
    
    // Complete step after duration
    const timer = setTimeout(() => {
      setIsTyping(false);
      setCompletedSteps(prev => [...prev, step.id]);
      setProgress(((currentStep + 1) / loadingSteps.length) * 100);
      
      // Move to next step after a brief pause
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
    }, step.duration);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center animate-slide-up">
        {/* Header */}
        <div className="mb-12">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Brain className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl font-bold gradient-text mb-4">Processing Your Resume</h2>
          <p className="text-muted-foreground">File: {fileName}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <Progress value={progress} className="h-3 mb-4" />
          <p className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</p>
        </div>

        {/* Loading steps */}
        <div className="space-y-6">
          {loadingSteps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = index === currentStep;
            const isPending = index > currentStep;
            
            return (
              <div
                key={step.id}
                className={`flex items-center p-6 rounded-2xl transition-all duration-500 ${
                  isCompleted 
                    ? 'bg-green-50 border-2 border-green-200' 
                    : isCurrent 
                    ? 'neumorphic glow bg-card' 
                    : 'bg-muted/30'
                }`}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  isCompleted 
                    ? 'bg-green-500' 
                    : isCurrent 
                    ? 'bg-primary animate-pulse-glow' 
                    : 'bg-muted'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <Icon className={`w-6 h-6 ${isCurrent ? 'text-white' : 'text-muted-foreground'}`} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center">
                    <h3 className={`text-lg font-semibold ${
                      isCompleted 
                        ? 'text-green-700' 
                        : isCurrent 
                        ? 'text-foreground' 
                        : 'text-muted-foreground'
                    }`}>
                      {step.text}
                    </h3>
                    {isCurrent && isTyping && (
                      <span className="ml-2 typing-dots text-primary"></span>
                    )}
                  </div>
                  <p className={`text-sm mt-1 ${
                    isCompleted 
                      ? 'text-green-600' 
                      : isCurrent 
                      ? 'text-muted-foreground' 
                      : 'text-muted-foreground/50'
                  }`}>
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};