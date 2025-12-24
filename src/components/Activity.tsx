import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Activity: React.FC = () => {
  const activities = [
    {
      id: 1,
      title: '年度技術創新大會',
      description: '匯聚業界頂尖技術專家，分享最新的技術趨勢與實踐經驗，為企業發展注入新動力。',
      image: 'https://picsum.photos/id/42/600/400',
      date: '2024年1月15日',
    },
    {
      id: 2,
      title: '企業合作論壇',
      description: '邀請各行業領頭羊與我們共同探討合作機遇，開創雙贏局面，助力企業持續發展。',
      image: 'https://picsum.photos/id/48/600/400',
      date: '2024年1月25日',
    },
    {
      id: 3,
      title: '客戶感謝會',
      description: '感謝長期支持與信任的客戶，分享我們的成長故事與未來願景，共創美好未來。',
      image: 'https://picsum.photos/id/52/600/400',
      date: '2024年2月10日',
    },
    {
      id: 4,
      title: '公益慈善活動',
      description: '企業社會責任是我們的承諾，積極參與各類公益活動，回饋社會與社區發展。',
      image: 'https://picsum.photos/id/56/600/400',
      date: '2024年2月20日',
    },
  ];

  return (
    <section className="py-80px bg-white">
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <div className="w-16 h-1 bg-accent"></div>
          <h2 className="text-3xl font-bold text-textMain whitespace-nowrap">
            會員活動
          </h2>
          <div className="w-16 h-1 bg-accent"></div>
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              {/* Image Section - 40% */}
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section - 60% */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-textMuted mb-2">
                    {activity.date}
                  </p>
                  <h3 className="text-xl font-bold text-textDark mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-textSecondary text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold hover:text-primaryDark transition-colors duration-300 w-fit">
                  詳細資訊
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
