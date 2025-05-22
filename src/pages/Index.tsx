
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Exclusive');
  
  const categories = ['Exclusive', 'Sports', 'Casino', 'Slots'];
  
  const featuredGames = [
    {
      id: 'ipl',
      title: 'IPL',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'money-wheel',
      title: 'MONEY WHEEL',
      image: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'fortune-gems',
      title: 'FORTUNE GEMS',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'divas-ace',
      title: "DIVA'S ACE",
      image: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'kings-ace',
      title: "THE KING'S ACE",
      image: 'https://images.unsplash.com/photo-1586183272072-9e5a952b9f15?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'golden-genie',
      title: 'GOLDEN GENIE',
      image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    }
  ];
  
  const promotionBanner = {
    title: 'IPL SUPER FEST',
    description: '₹63 CRORE YAMAHA R15M & CASH!',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=300&q=80',
  };
  
  return (
    <div className="animate-fade-in">
      {/* Main Banner */}
      <div className="relative h-48 bg-gradient-to-r from-blue-900 to-teal-700 mb-6">
        <img 
          src={promotionBanner.image} 
          alt={promotionBanner.title} 
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h1 className="text-yellow-400 text-2xl font-bold">{promotionBanner.title}</h1>
          <p className="text-white font-bold text-lg">{promotionBanner.description}</p>
        </div>
      </div>
      
      {/* Category Tabs */}
      <div className="px-4 mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              className={`py-2 px-4 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-secondary text-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Game Grid */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {featuredGames.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id}>
              <GameCard 
                title={game.title} 
                image={game.image}
                provider={game.provider}
              />
            </Link>
          ))}
        </div>
      </div>
      
      {/* Providers Section */}
      <div className="px-4 mb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Provider</h2>
          <div className="flex gap-1">
            <button className="p-1 rounded-full border border-border">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-1 rounded-full border border-border">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-secondary rounded-lg p-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-600 mb-2 flex items-center justify-center">
              <span className="text-white font-bold">SE</span>
            </div>
            <span className="text-gray-300 text-sm">Sexy</span>
          </div>
          
          <div className="bg-secondary rounded-lg p-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500 mb-2 flex items-center justify-center">
              <span className="text-white font-bold">JI</span>
            </div>
            <span className="text-gray-300 text-sm">JILI</span>
          </div>
          
          <div className="bg-secondary rounded-lg p-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-600 mb-2 flex items-center justify-center">
              <span className="text-white font-bold">PG</span>
            </div>
            <span className="text-gray-300 text-sm">PGSoft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
