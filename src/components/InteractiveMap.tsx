import React from 'react';
import { MapPin } from 'lucide-react';

const cities = [
  { name: 'Delhi', x: 45, y: 25, count: 1 },
  { name: 'Bengaluru', x: 35, y: 70, count: 1 },
  { name: 'Pune', x: 25, y: 55, count: 1 },
  { name: 'Hyderabad', x: 40, y: 60, count: 1 },
  { name: 'Chennai', x: 40, y: 75, count: 1 }
];

export const InteractiveMap: React.FC = () => {
  return (
    <div className="relative">
      {/* Simplified India Map */}
      <div className="relative w-full h-64 bg-gradient-to-b from-blue-50 to-green-50 rounded-xl border-2 border-border overflow-hidden">
        {/* Map Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-primary">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* City Pins */}
        {cities.map((city, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${city.x}%`, top: `${city.y}%` }}
          >
            {/* Animated Pin */}
            <div className="relative animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 ring-4 ring-primary/20">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {city.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
            </div>
          </div>
        ))}

        {/* Map Title */}
        <div className="absolute top-4 left-4 text-sm font-medium text-muted-foreground">
          Internship Locations
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 text-xs">
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-primary" />
            <span>Available Positions</span>
          </div>
        </div>
      </div>

      {/* City List */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {cities.map((city, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
            <span>{city.name}</span>
            <span className="text-xs text-primary font-semibold">{city.count} position</span>
          </div>
        ))}
      </div>
    </div>
  );
};