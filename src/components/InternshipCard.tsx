import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, ExternalLink, Star } from 'lucide-react';

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  tags: string[];
  logo: string;
}

interface InternshipCardProps {
  internship: Internship;
}

export const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  const getTagColor = (tag: string) => {
    if (tag.includes('Reservation')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (tag.includes('Rural')) return 'bg-green-100 text-green-800 border-green-200';
    if (tag.includes('High Skill')) return 'bg-blue-100 text-blue-800 border-blue-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="neumorphic rounded-3xl p-6 bg-card hover:glow transition-all duration-300 group hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          {/* Company Logo */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {internship.logo}
          </div>
          
          {/* Title and Company */}
          <div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
              {internship.title}
            </h3>
            <p className="text-muted-foreground font-medium">{internship.company}</p>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {internship.location}
            </div>
          </div>
        </div>

        {/* Match Score */}
        <div className="text-right">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-2xl font-bold text-primary">{internship.matchScore}%</span>
          </div>
          <p className="text-xs text-muted-foreground">Match Score</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <Progress 
          value={internship.matchScore} 
          className="h-2 bg-muted"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {internship.tags.map((tag, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`border-2 transition-all duration-300 hover:scale-105 ${getTagColor(tag)}`}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Apply Button */}
      <Button 
        className="w-full neumorphic hover:glow transition-all duration-300 group-hover:scale-105"
        size="lg"
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Apply Now
      </Button>
    </div>
  );
};