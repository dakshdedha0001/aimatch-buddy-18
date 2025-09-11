import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

export const usePageTitle = (currentState: string) => {
  const { user, isSignedIn } = useUser();
  
  useEffect(() => {
    let title = 'InternMitra-AI | Smart Learning & Career Platform';
    
    if (isSignedIn && user) {
      const userName = user.firstName || user.username || 'User';
      
      switch (currentState) {
        case 'upload':
          title = `Welcome ${userName} | InternMitra-AI`;
          break;
        case 'loading':
          title = `Analyzing Resume | InternMitra-AI`;
          break;
        case 'chat':
          title = `AI Consultation | InternMitra-AI`;
          break;
        case 'results':
          title = `Your Results | InternMitra-AI`;
          break;
        default:
          title = `${userName} | InternMitra-AI`;
      }
    }
    
    document.title = title;
  }, [currentState, isSignedIn, user]);
};