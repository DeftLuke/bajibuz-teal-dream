
import { useState } from 'react';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';

const Casino = () => {
  const casinoGames = [
    {
      id: 'crazy-time',
      title: 'CRAZY TIME',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'bac-bo',
      title: 'BAC BO',
      image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'super-sic-bo',
      title: 'SUPER SIC BO',
      image: 'https://images.unsplash.com/photo-1606293459339-011f416283e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'auto-roulette',
      title: 'AUTO ROULETTE',
      image: 'https://images.unsplash.com/photo-1618173745201-8e3bf8978acc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'baccarat-classic',
      title: 'BACCARAT CLASSIC',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'funky-time',
      title: 'FUNKY TIME',
      image: 'https://images.unsplash.com/photo-1626082936010-109d85d04fc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'lightning-roulette',
      title: 'LIGHTNING ROULETTE',
      image: 'https://images.unsplash.com/photo-1606293459339-011f416283e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'dragon-tiger',
      title: 'DRAGON TIGER',
      image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'mega-wheel',
      title: 'MEGA WHEEL',
      image: 'https://images.unsplash.com/photo-1626082936010-109d85d04fc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'no-commission-baccarat',
      title: 'NO COMMISSION BACCARAT',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'crazy-time-a',
      title: 'CRAZY TIME A',
      image: 'https://images.unsplash.com/photo-1618173745201-8e3bf8978acc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
      provider: 'bj'
    },
    {
      id: 'top-card',
      title: 'TOP CARD',
      image: 'https://images.unsplash.com/photo-1626082936010-109d85d04fc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=400&q=80',
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
          <h1 className="text-xl font-bold">Casino</h1>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Game Grid */}
      <div className="px-4 mt-2 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {casinoGames.map((game) => (
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

export default Casino;
