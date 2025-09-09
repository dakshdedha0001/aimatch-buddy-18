import React, { useCallback, useState } from 'react';
import { Upload, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UploadSectionProps {
  onFileUpload: (file: File) => void;
}

export const UploadSection: React.FC<UploadSectionProps> = ({ onFileUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);
      
      const files = Array.from(e.dataTransfer.files);
      const file = files.find(f => f.type === 'application/pdf' || f.name.endsWith('.pdf'));
      
      if (file) {
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-6 pt-24">
      <div className="text-center max-w-5xl mx-auto animate-slide-up">

        {/* Animated title */}
        <div className="relative mb-20">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8 animate-float">
            ShikshaSetu AI
          </h1>
          <div className="absolute -top-4 right-8 animate-pulse-glow">
            <Sparkles className="w-7 h-7 text-primary" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-700 mb-24 max-w-4xl mx-auto leading-relaxed font-medium">
          Bridging Students with Opportunities through AI-Powered Internship Matching
        </p>

        {/* Upload area */}
        <div className="mb-32">
          <div
            className={`relative mx-auto max-w-xl p-16 border-2 border-dashed rounded-3xl transition-all duration-300 cursor-pointer ${
              isDragOver 
                ? 'border-primary bg-primary/8 scale-[1.02] shadow-xl shadow-primary/25' 
                : 'border-primary/30 bg-white/90 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/15 hover:bg-white hover:-translate-y-1'
            } backdrop-blur-sm`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  {isDragOver ? (
                    <FileText className="w-10 h-10 text-primary" />
                  ) : (
                    <Upload className="w-10 h-10 text-primary" />
                  )}
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              {isDragOver ? 'Drop your resume here!' : 'Upload Your Resume'}
            </h3>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Drag and drop your PDF resume or click to browse
            </p>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/90 hover:bg-white border-primary/40 hover:border-primary text-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 px-8 py-3 text-base font-medium"
            >
              Choose File
            </Button>
          </div>
        </div>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-40">
          {[
            { icon: "🧠", title: "AI Analysis", desc: "Advanced NLP & NER processing for skill extraction" },
            { icon: "⚖️", title: "Fair Allocation", desc: "Transparent reservation policies applied" },
            { icon: "🎯", title: "Smart Matching", desc: "Intelligent internship-student pairing" }
          ].map((feature, index) => (
            <div key={index} className="text-center p-10 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/60 hover:bg-white hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-2 transition-all duration-300 h-full min-h-[280px] flex flex-col justify-center">
              <div className="text-5xl mb-6 filter drop-shadow-sm">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h4>
              <p className="text-base text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};