
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface DepositOptionProps {
  icon: React.ReactNode;
  title: string;
  bonus: string;
  onClick: () => void;
}

const DepositOption: React.FC<DepositOptionProps> = ({ icon, title, bonus, onClick }) => {
  return (
    <div 
      className="flex items-center justify-between p-4 bg-secondary rounded-md mb-3 cursor-pointer hover:bg-opacity-80 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-white text-base">{title}</span>
      </div>
      <div className="flex items-center">
        <span className="text-teal-500 text-sm mr-2">{bonus}</span>
        <ChevronRight size={20} className="text-teal-500" />
      </div>
    </div>
  );
};

const Deposit = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="px-4 py-3 flex items-center">
        <button 
          className="mr-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-xl font-bold">Deposit</h1>
      </div>
      
      {/* Deposit Options */}
      <div className="px-4 mb-16">
        <DepositOption 
          icon={
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-white text-lg">🏦</span>
            </div>
          }
          title="Local bank"
          bonus="Up to 100%"
          onClick={() => navigate('/deposit/local-bank')}
        />
        
        <DepositOption 
          icon={
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-white text-lg">💳</span>
            </div>
          }
          title="E-wallet"
          bonus="Up to 100%"
          onClick={() => navigate('/deposit/ewallet')}
        />
        
        <DepositOption 
          icon={
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-white text-lg">🪙</span>
            </div>
          }
          title="Crypto"
          bonus="Up to 100%"
          onClick={() => navigate('/deposit/crypto')}
        />
      </div>
    </div>
  );
};

export default Deposit;
