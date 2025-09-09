import React from 'react';

const reservationData = [
  { category: 'GEN', percentage: 50, color: '#3B82F6' },
  { category: 'OBC', percentage: 27, color: '#8B5CF6' },
  { category: 'SC', percentage: 15, color: '#10B981' },
  { category: 'ST', percentage: 8, color: '#F59E0B' }
];

export const ReservationChart: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Pie Chart Representation */}
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="20"
          />
          
          {reservationData.map((item, index) => {
            const previousPercentages = reservationData
              .slice(0, index)
              .reduce((sum, prev) => sum + prev.percentage, 0);
            
            const strokeDasharray = `${(item.percentage / 100) * 502.4} 502.4`;
            const strokeDashoffset = -((previousPercentages / 100) * 502.4);
            
            return (
              <circle
                key={item.category}
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={item.color}
                strokeWidth="20"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
                style={{
                  strokeLinecap: 'round'
                }}
              />
            );
          })}
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-xs text-muted-foreground">Allocation</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3">
        {reservationData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium">{item.category}</div>
              <div className="text-xs text-muted-foreground">{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>

      {/* Your Category Highlight */}
      <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
        <div className="flex items-center justify-between">
          <span className="font-medium text-purple-800">Your Category: OBC</span>
          <span className="text-sm font-semibold text-purple-600">Priority Applied ✓</span>
        </div>
      </div>
    </div>
  );
};