
import { useState } from 'react';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';

const Slots = () => {
  const slotGames = [
    {
      id: 'super-ace',
      title: 'SUPER ACE',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'money-wheel',
      title: 'MONEY WHEEL',
      image: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'money-coming',
      title: 'MONEY COMING',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'fortune-gems',
      title: 'FORTUNE GEMS',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'fortune-gems-3',
      title: 'FORTUNE GEMS 3',
      image: 'https://images.unsplash.com/photo-1586183272072-9e5a952b9f15?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'boxing-king',
      title: 'BOXING KING',
      image: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'wild-bounty-showdown',
      title: 'WILD BOUNTY SHOWDOWN',
      image: 'https://images.unsplash.com/photo-1582628859742-7173940f483f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'divas-ace',
      title: "DIVA'S ACE",
      image: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'super-ace-deluxe',
      title: 'SUPER ACE DELUXE',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'fortune-gems-2',
      title: 'FORTUNE GEMS 2',
      image: 'https://images.unsplash.com/photo-1586183272072-9e5a952b9f15?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'money-coming-2',
      title: 'MONEY COMING',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'crazy-seven',
      title: 'CRAZY SEVEN',
      image: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    }
  ];
  
  const [isSearching, setIsSearching] = useState(false);
  
  return (
    <div className="animate-fade-in">
      {/* Header with search */}
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          <h1 className="text-xl font-bold">Slots</h1>
        </div>
        
        <div className="flex gap-2">
          {isSearching ? (
            <div className="relative">
              <input 
                type="text"
                placeholder="Search games..."
                className="bg-secondary border border-border rounded-lg pl-8 pr-3 py-1 text-sm"
              />
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setIsSearching(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          ) : (
            <button 
              className="p-1.5 rounded-lg bg-secondary"
              onClick={() => setIsSearching(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
          
          <button className="p-1.5 rounded-lg bg-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Game Grid */}
      <div className="px-4 mt-2 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {slotGames.map((game) => (
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
    </div>
  );
};

export default Slots;
