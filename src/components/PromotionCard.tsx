
import { useState } from 'react';

interface PromotionCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  date?: string;
}

const PromotionCard = ({ title, description, image, tags, date }: PromotionCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="promotion-card rounded-lg overflow-hidden bg-secondary mb-4 animate-slide-up">
      {!imageLoaded && (
        <div className="h-40 flex items-center justify-center bg-secondary">
          <div className="loader"></div>
        </div>
      )}
      
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-40 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="p-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs py-1 px-2 rounded bg-background text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {date && (
          <div className="flex items-center text-xs text-gray-400 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {date}
          </div>
        )}
        
        <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        
        <button className="mt-3 text-teal-500 flex items-center text-sm font-medium">
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
