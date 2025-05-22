
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';

interface PaymentMethodProps {
  logo: string;
  name: string;
  bonus: string;
  selected: boolean;
  onClick: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ logo, name, bonus, selected, onClick }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center p-3 rounded-md cursor-pointer ${selected ? 'border border-teal-500' : 'border border-gray-700'}`}
      onClick={onClick}
    >
      <div className="relative">
        <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center mb-2">
          <span className="text-2xl">{logo}</span>
        </div>
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded">
          {bonus}
        </div>
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
};

const EWallet = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<string | null>("bKash Payment");

  const handlePaymentSelect = (name: string) => {
    setSelectedPayment(name);
  };

  const handleContinue = () => {
    navigate('/deposit/select-promotion');
  };

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
        <h1 className="text-xl font-bold">E-wallet</h1>
      </div>
      
      {/* Content */}
      <div className="px-4 mb-20">
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Select promotion</h2>
          <div 
            className="flex items-center justify-between p-4 bg-secondary rounded-md cursor-pointer hover:bg-opacity-80 transition-colors"
            onClick={() => navigate('/deposit/select-promotion')}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">🎁</span>
              <span className="text-white text-base">Promotions</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 text-sm mr-2">8% পর্যন্ত আনলিমিটেড বুস্ট</span>
              <ChevronRight size={20} className="text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Select payment</h2>
          <div className="grid grid-cols-3 gap-3">
            <PaymentMethod 
              logo="💸"
              name="bKash"
              bonus="+3%"
              selected={selectedPayment === "bKash"}
              onClick={() => handlePaymentSelect("bKash")}
            />
            <PaymentMethod 
              logo="🔄"
              name="Nagad"
              bonus="+3%"
              selected={selectedPayment === "Nagad"}
              onClick={() => handlePaymentSelect("Nagad")}
            />
            <PaymentMethod 
              logo="🚀"
              name="Rocket"
              bonus="+3%"
              selected={selectedPayment === "Rocket"}
              onClick={() => handlePaymentSelect("Rocket")}
            />
            <PaymentMethod 
              logo="💰"
              name="UPay"
              bonus="+3%"
              selected={selectedPayment === "UPay"}
              onClick={() => handlePaymentSelect("UPay")}
            />
            <PaymentMethod 
              logo="💲"
              name="TAP"
              bonus="+3%"
              selected={selectedPayment === "TAP"}
              onClick={() => handlePaymentSelect("TAP")}
            />
            <PaymentMethod 
              logo="👌"
              name="OKWallet"
              bonus="+3%"
              selected={selectedPayment === "OKWallet"}
              onClick={() => handlePaymentSelect("OKWallet")}
            />
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Select channel</h2>
          <div 
            className="flex items-center justify-between p-4 bg-secondary border border-teal-500 rounded-md cursor-pointer"
          >
            <span className="text-white text-base">bKash Payment</span>
            <Check size={20} className="text-teal-500" />
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Deposit channel</h2>
          <div className="flex items-center justify-between p-4 bg-secondary rounded-md">
            <span className="text-white text-base">SG-Cashout</span>
            <div className="flex items-center">
              <span className="text-teal-500 text-xs mr-2 px-2 py-1 bg-teal-500 bg-opacity-20 rounded">Recommend</span>
              <ChevronRight size={20} className="text-teal-500" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Button */}
      <div className="fixed bottom-16 left-0 right-0 p-4">
        <button 
          className="w-full py-3 bg-teal-500 rounded-md text-white font-medium"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EWallet;
