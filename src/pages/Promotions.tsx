
import { useState } from 'react';
import PromotionCard from '../components/PromotionCard';

const Promotions = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const tabs = ['ALL', 'Welcome Offer', 'Slots', 'Casino'];
  
  const promotions = [
    {
      id: 'promo1',
      title: 'Up to 4% Unlimited Boost',
      description: 'Get extra 4% on every deposit you make, no limits!',
      image: 'https://images.unsplash.com/photo-1634979149798-e9a118734e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      tags: ['Slots', 'Casino', 'Sports', 'Fishing', 'E-sports', 'Lottery', 'Table', 'Arcade', 'Crash'],
      date: '2025/03/26 18:00:00 - 2025/12/31 23:59:59'
    },
    {
      id: 'promo2',
      title: 'Predict & Win',
      description: 'YAMAHA R15M +₹26,655 CASH!',
      image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80',
      tags: ['Normal', 'Sports'],
      date: '2025/03/01 00:00:00 - 2025/04/30 23:59:59'
    }
  ];
  
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-4 py-3 flex items-center">
        <button className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-bold">Promotions</h1>
      </div>
      
      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex space-x-2 overflow-x-auto scrollbar-none pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 rounded-md whitespace-nowrap ${
                activeTab === tab
                  ? 'tab-active'
                  : 'bg-background text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Promotions */}
      <div className="px-4 mb-16">
        {promotions.map((promo) => (
          <PromotionCard
            key={promo.id}
            title={promo.title}
            description={promo.description}
            image={promo.image}
            tags={promo.tags}
            date={promo.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Promotions;
