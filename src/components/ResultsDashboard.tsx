import React from 'react';
import { Button } from '@/components/ui/button';
import { InternshipCard } from '@/components/InternshipCard';
import { SkillChart } from '@/components/SkillChart';
import { ReservationChart } from '@/components/ReservationChart';
import { InteractiveMap } from '@/components/InteractiveMap';
import { RotateCcw, Award, MapPin, BarChart } from 'lucide-react';

interface ResultsDashboardProps {
  onRestart: () => void;
}

const mockInternships = [
  {
    id: 1,
    title: "AI/ML Intern",
    company: "TechCorp Solutions",
    location: "Bengaluru, Karnataka",
    matchScore: 92,
    tags: ["Reservation Applied", "High Skill Match"],
    logo: "🏢"
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "InnovateLabs",
    location: "Hyderabad, Telangana", 
    matchScore: 88,
    tags: ["Rural Priority", "Tech Focus"],
    logo: "🔬"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "StartupHub",
    location: "Pune, Maharashtra",
    matchScore: 85,
    tags: ["Reservation Applied", "Growth Opportunity"],
    logo: "🚀"
  },
  {
    id: 4,
    title: "Python Developer",
    company: "DataDriven Inc",
    location: "Delhi, NCR",
    matchScore: 82,
    tags: ["High Skill Match", "Mentorship"],
    logo: "🐍"
  },
  {
    id: 5,
    title: "Research Intern",
    company: "AI Research Labs",
    location: "Chennai, Tamil Nadu",
    matchScore: 79,
    tags: ["Rural Priority", "Research Focus"],
    logo: "🧬"
  }
];

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ onRestart }) => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold gradient-text mb-4">Your Perfect Matches</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Based on AI analysis of your profile and fair allocation principles
          </p>
          <Button onClick={onRestart} variant="outline" className="neumorphic hover:glow">
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Another Resume
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Internship Results */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center mb-6">
              <MapPin className="w-5 h-5 text-primary mr-2" />
              <h2 className="text-2xl font-bold">Top Internship Matches</h2>
            </div>
            
            {mockInternships.map((internship, index) => (
              <div
                key={internship.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <InternshipCard internship={internship} />
              </div>
            ))}
          </div>

          {/* Right Column - Analytics */}
          <div className="space-y-8">
            {/* Skill Match Breakdown */}
            <div className="neumorphic rounded-3xl p-6 bg-card">
              <div className="flex items-center mb-4">
                <BarChart className="w-5 h-5 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Skill Match Breakdown</h3>
              </div>
              <SkillChart />
            </div>

            {/* Reservation Allocation */}
            <div className="neumorphic rounded-3xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Reservation Category Allocation</h3>
              <ReservationChart />
            </div>

            {/* Interactive Map */}
            <div className="neumorphic rounded-3xl p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">Internship Locations</h3>
              <InteractiveMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};