import React from 'react';
import { Progress } from '@/components/ui/progress';

const skillData = [
  { skill: 'Python', match: 95, color: 'bg-blue-500' },
  { skill: 'Machine Learning', match: 88, color: 'bg-purple-500' },
  { skill: 'Data Science', match: 92, color: 'bg-green-500' },
  { skill: 'React', match: 78, color: 'bg-cyan-500' },
  { skill: 'JavaScript', match: 82, color: 'bg-yellow-500' },
  { skill: 'SQL', match: 75, color: 'bg-pink-500' }
];

export const SkillChart: React.FC = () => {
  return (
    <div className="space-y-4">
      {skillData.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium text-sm">{item.skill}</span>
            <span className="text-sm text-primary font-semibold">{item.match}%</span>
          </div>
          <Progress 
            value={item.match} 
            className="h-2"
          />
        </div>
      ))}
      
      <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-primary">Overall Match</span>
          <span className="text-xl font-bold text-primary">85%</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Excellent compatibility with available internships
        </p>
      </div>
    </div>
  );
};