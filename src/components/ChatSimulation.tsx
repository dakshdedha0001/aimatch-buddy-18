import React, { useState, useEffect } from 'react';
import { Bot, CheckCircle, Sparkles } from 'lucide-react';

interface ChatSimulationProps {
  onComplete: () => void;
}

const chatMessages = [
  {
    id: 1,
    text: "Resume received ✅",
    delay: 1000,
    type: "success" as const
  },
  {
    id: 2, 
    text: "Skills identified: Python, Data Science, Machine Learning, React, JavaScript",
    delay: 2000,
    type: "info" as const
  },
  {
    id: 3,
    text: "Academic Background: Computer Science, CGPA: 8.5/10",
    delay: 1800,
    type: "info" as const
  },
  {
    id: 4,
    text: "Reservation weight applied: OBC + Rural background 🌾",
    delay: 2200,
    type: "highlight" as const
  },
  {
    id: 5,
    text: "Finding best internship matches for you...",
    delay: 2500,
    type: "process" as const
  },
  {
    id: 6,
    text: "Analysis complete! Found 5 perfect matches with 85% average compatibility.",
    delay: 2000,
    type: "success" as const
  },
  {
    id: 7,
    text: "Here are your results 👇",
    delay: 1500,
    type: "final" as const
  }
];

export const ChatSimulation: React.FC<ChatSimulationProps> = ({ onComplete }) => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let messageIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const showNextMessage = () => {
      if (messageIndex >= chatMessages.length) {
        setTimeout(onComplete, 2000);
        return;
      }

      const message = chatMessages[messageIndex];
      setIsTyping(true);

      timeoutId = setTimeout(() => {
        setVisibleMessages(prev => [...prev, message.id]);
        setIsTyping(false);
        messageIndex++;
        
        setTimeout(showNextMessage, 800);
      }, message.delay);
    };

    showNextMessage();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete]);

  const getMessageStyle = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'highlight':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'process':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'final':
        return 'bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 text-primary font-semibold';
      default:
        return 'bg-card border-border text-foreground';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Bot className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold gradient-text mb-4">AI Analysis Complete</h2>
          <p className="text-muted-foreground">Processing your profile for best matches...</p>
        </div>

        {/* Chat messages */}
        <div className="space-y-4 max-w-2xl mx-auto">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`transform transition-all duration-500 ${
                visibleMessages.includes(message.id)
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-8 opacity-0'
              }`}
            >
              {visibleMessages.includes(message.id) && (
                <div className="flex items-start space-x-4 animate-slide-up">
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Message bubble */}
                  <div className={`flex-1 p-4 rounded-2xl border-2 ${getMessageStyle(message.type)} card-shadow`}>
                    <p className="text-sm md:text-base leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start space-x-4 animate-slide-up">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                </div>
              </div>
              <div className="flex-1 p-4 rounded-2xl bg-card border-2 border-border card-shadow">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};