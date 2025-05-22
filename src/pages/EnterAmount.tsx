
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Edit2, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const EnterAmount = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>('0');
  const [showReminder, setShowReminder] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSubmit = () => {
    if (parseInt(amount) < 200) {
      toast({
        title: "Invalid amount",
        description: "Minimum deposit amount is ₺ 200",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    toast({
      title: "Processing deposit",
      description: "Your deposit is being processed...",
    });
    
    // Simulate processing time
    setTimeout(() => {
      toast({
        title: "Deposit successful",
        description: `You have successfully deposited ₺ ${amount}`,
        variant: "default"
      });
      setLoading(false);
      navigate('/');
    }, 2000);
  };
  
  const handleClearAmount = () => {
    setAmount('0');
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
        <h1 className="text-xl font-bold">Enter the amount</h1>
      </div>
      
      {/* Content */}
      <div className="px-4 mb-20">
        <div className="mb-4">
          <p className="text-gray-400 mb-2">Available balance ₺ 200.00 - ₺ 25,000.00</p>
          <div className="flex items-center justify-between p-4 bg-secondary rounded-md">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-xs">₺</div>
              <span className="text-white text-2xl">
                {amount}
              </span>
            </div>
            <button onClick={handleClearAmount}>
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-gray-400 mb-2">Payment method</h2>
          <div className="flex items-center justify-between p-4 bg-secondary rounded-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <div>
                <p className="text-white">Nagad</p>
                <p className="text-gray-400 text-sm">Nagad Payment</p>
                <p className="text-gray-400 text-xs">SG-Cashout</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-teal-500 mr-2">+3%</span>
              <Edit2 size={18} className="text-teal-500" />
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <button 
            className="flex items-center justify-between w-full p-4 bg-secondary rounded-md"
            onClick={() => setShowReminder(!showReminder)}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                <span className="text-white text-lg">ℹ️</span>
              </div>
              <span className="text-white">Reminder</span>
            </div>
            <ChevronDown className={`h-5 w-5 text-white transition-transform ${showReminder ? 'rotate-180' : ''}`} />
          </button>
          
          {showReminder && (
            <div className="mt-2 p-4 bg-gray-800 rounded-md">
              <p className="text-gray-400 text-sm">
                Do not save the phone number displayed on Baji website on your device to avoid losing money.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer Button */}
      <div className="fixed bottom-16 left-0 right-0 p-4">
        <button 
          className={`w-full py-3 rounded-md text-white font-medium ${loading ? 'bg-gray-600' : 'bg-teal-500'}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default EnterAmount;
