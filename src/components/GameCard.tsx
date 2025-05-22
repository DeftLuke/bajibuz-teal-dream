
import { useState } from 'react';

interface GameCardProps {
  title: string;
  provider?: string;
  image: string;
}

const GameCard = ({ title, provider, image }: GameCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="game-card rounded-lg overflow-hidden relative animate-slide-up">
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary">
          <div className="loader"></div>
        </div>
      )}
      
      <div className="relative aspect-[3/4]">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute top-2 right-2 text-xs bg-black/60 py-1 px-2 rounded-full text-white">
            {provider || 'BJ'}
          </div>
          <h3 className="font-bold text-white text-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
