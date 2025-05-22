import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';

interface PaymentMethodProps {
  logoSrc: string;
  name: string;
  bonus: string;
  selected: boolean;
  onClick: () => void;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ logoSrc, name, bonus, selected, onClick }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center p-3 rounded-md cursor-pointer transition-all ${
        selected ? 'border border-teal-500 scale-105' : 'border border-gray-700'
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <div className="w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center mb-2">
          <img src={logoSrc} alt={name} className="h-8 object-contain" />
        </div>
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-1 rounded">
          {bonus}
        </div>
      </div>
      <span className="text-sm text-white">{name}</span>
    </div>
  );
};

const EWallet = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentSelect = (name: string) => {
    setSelectedPayment(name);
  };

  const handleContinue = () => {
    navigate('/deposit/select-promotion');
  };

  return (
    <div className="animate-fade-in min-h-screen bg-[#222424] text-white">
      {/* Header */}
      <div className="px-4 py-3 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-3">
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-xl font-bold">E-wallet</h1>
      </div>

      {/* Content */}
      <div className="px-4 mb-20">
        {/* Promotion */}
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Select promotion</h2>
          <div 
            className="flex items-center justify-between p-4 bg-gray-800 rounded-md cursor-pointer hover:bg-gray-700 transition-colors"
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

        {/* Payment Methods */}
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Select payment</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { name: 'bKash', logo: '/payment/bkash.png' },
              { name: 'Nagad', logo: '/payment/nagad.png' },
              { name: 'Rocket', logo: '/payment/rocket.png' },
              { name: 'UPay', logo: '/payment/upay.png' },
              { name: 'TAP', logo: '/payment/taptap.png' },
              { name: 'OKWallet', logo: '/payment/okwallet.png' }
            ].map((method) => (
              <PaymentMethod
                key={method.name}
                logoSrc={method.logo}
                name={method.name}
                bonus="+3%"
                selected={selectedPayment === method.name}
                onClick={() => handlePaymentSelect(method.name)}
              />
            ))}
          </div>
        </div>

        {/* Channel */}
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Select channel</h2>
          <div className="flex items-center justify-between p-4 bg-gray-800 border border-teal-500 rounded-md cursor-pointer">
            <span className="text-white text-base">bKash Payment</span>
            <Check size={20} className="text-teal-500" />
          </div>
        </div>

        {/* Deposit */}
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Deposit channel</h2>
          <div className="flex items-center justify-between p-4 bg-gray-800 rounded-md">
            <span className="text-white text-base">SG-Cashout</span>
            <div className="flex items-center">
              <span className="text-teal-500 text-xs mr-2 px-2 py-1 bg-teal-500 bg-opacity-20 rounded">Recommend</span>
              <ChevronRight size={20} className="text-teal-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
