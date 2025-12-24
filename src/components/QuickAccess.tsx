import React from 'react';
import { Zap, Users, TrendingUp, Shield, Lightbulb, Award } from 'lucide-react';

export const QuickAccess: React.FC = () => {
  const quickAccessItems = [
    {
      id: 1,
      icon: Zap,
      label: '快速服務',
    },
    {
      id: 2,
      icon: Users,
      label: '團隊協作',
    },
    {
      id: 3,
      icon: TrendingUp,
      label: '數據分析',
    },
    {
      id: 4,
      icon: Shield,
      label: '安全保護',
    },
    {
      id: 5,
      icon: Lightbulb,
      label: '創新方案',
    },
    {
      id: 6,
      icon: Award,
      label: '獲獎記錄',
    },
  ];

  return (
    <section className="py-60px bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {quickAccessItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center gap-4"
              >
                <button className="w-120px h-120px rounded-full bg-primary hover:bg-primaryDark transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-lg">
                  <Icon
                    size={48}
                    className="text-white group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
                <p className="text-textMain font-bold text-center text-lg">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
