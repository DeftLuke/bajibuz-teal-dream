
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check } from 'lucide-react';

interface PromotionProps {
  title: string;
  subtitle: string;
  dateRange: string;
  selected: boolean;
  onClick: () => void;
}

const Promotion: React.FC<PromotionProps> = ({ title, subtitle, dateRange, selected, onClick }) => {
  return (
    <div 
      className={`p-4 mb-2 rounded-md cursor-pointer ${selected ? 'border border-teal-500 bg-secondary' : 'bg-gray-800'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-white">{title}</h3>
        {selected && <Check className="h-5 w-5 text-teal-500" />}
      </div>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      <p className="text-gray-500 text-xs mt-2">{dateRange}</p>
    </div>
  );
};

const SelectPromotion = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Valid');
  const [selectedPromotion, setSelectedPromotion] = useState<number>(0);
  
  const handleClose = () => {
    navigate(-1);
  };
  
  const handleConfirm = () => {
    navigate('/deposit/enter-amount');
  };

  const promotions = [
    {
      id: 1,
      title: '8% পর্যন্ত আনলিমিটেড বুস্ট',
      subtitle: 'ডেইলি অফার',
      dateRange: '2025-03-26 18:00:00 - 2025-12-31 22:12:00'
    },
    {
      id: 2,
      title: 'Yamaha R15M + ৳২৬,৬৫৫ ক্যাশ',
      subtitle: 'আর্থিকাল প্রেডিকশন মাস্টার',
      dateRange: '2025-03-16 21:03:00 - 2025-05-28 20:05:00'
    },
    {
      id: 3,
      title: '৯৬.৭ কোটিটা বিশাল পুল',
      subtitle: 'আর্থিকাল ম্যাচ-ফিক্স ড',
      dateRange: '2025-03-20 23:03:00 - 2025-06-03 22:06:00'
    },
    {
      id: 4,
      title: '১০০% রিলোড বোনাস',
      subtitle: 'আর্থিকাল ২০২৫ ওয়েলকাম অফার',
      dateRange: '2025-05-17 01:05:00 - 2025-06-04 00:06:00'
    }
  ];
  
  return (
    <div className="fixed inset-0 bg-background z-50 animate-fade-in">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <h1 className="text-xl font-bold">Select promotion</h1>
        <button onClick={handleClose}>
          <X className="h-5 w-5 text-white" />
        </button>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          className={`flex-1 py-3 text-center ${activeTab === 'Valid' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-400'}`}
          onClick={() => setActiveTab('Valid')}
        >
          Valid ({promotions.length})
        </button>
        <button
          className={`flex-1 py-3 text-center ${activeTab === 'Invalid' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-400'}`}
          onClick={() => setActiveTab('Invalid')}
        >
          Invalid (0)
        </button>
      </div>
      
      {/* Promotions List */}
      <div className="p-4 mb-20 overflow-y-auto h-[calc(100vh-160px)]">
        {promotions.map((promo, index) => (
          <Promotion
            key={promo.id}
            title={promo.title}
            subtitle={promo.subtitle}
            dateRange={promo.dateRange}
            selected={selectedPromotion === index}
            onClick={() => setSelectedPromotion(index)}
          />
        ))}
      </div>
      
      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-gray-800">
        <div className="text-center mb-2">
          <p className="text-gray-400">Get an extra <span className="text-teal-500">3%</span></p>
        </div>
        <button 
          className="w-full py-3 bg-teal-500 rounded-md text-white font-medium"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SelectPromotion;
