
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [copyIcon, setCopyIcon] = useState({
    username: <Copy size={16} />,
    name: <Copy size={16} />,
    phone: <Copy size={16} />,
    email: <Copy size={16} />
  });

  const handleCopy = (text: string, field: 'username' | 'name' | 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    
    // Update icon to checkmark temporarily
    setCopyIcon({
      ...copyIcon,
      [field]: <Check size={16} className="text-teal-500" />
    });
    
    // Revert back to copy icon after 2 seconds
    setTimeout(() => {
      setCopyIcon({
        ...copyIcon,
        [field]: <Copy size={16} />
      });
    }, 2000);
    
    toast({
      title: "Copied",
      description: `${text} has been copied to clipboard`,
      duration: 2000,
    });
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Header */}
      <div className="px-4 py-4 flex items-center border-b border-gray-800">
        <button 
          className="mr-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-xl font-bold">Profile</h1>
        <div className="ml-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/profile/change-password')}
            className="text-teal-500"
          >
            Login & Security
          </Button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex bg-background border-b border-gray-800">
        <button
          className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'personal' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-400'}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal info
        </button>
        <button
          className={`flex-1 py-3 px-4 text-sm font-medium ${activeTab === 'security' ? 'text-teal-500 border-b-2 border-teal-500' : 'text-gray-400'}`}
          onClick={() => setActiveTab('security')}
        >
          Login & Security
        </button>
      </div>
      
      {/* Personal Info Content */}
      <div className="p-4">
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-1">Username</div>
          <div className="flex justify-between items-center">
            <input 
              type="text" 
              value="helloshamim" 
              readOnly
              className="bg-transparent border-none text-white text-base outline-none w-full" 
            />
            <button 
              onClick={() => handleCopy("helloshamim", "username")}
              className="text-gray-400"
            >
              {copyIcon.username}
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-1">Full legal name</div>
          <div className="flex justify-between items-center">
            <input 
              type="text" 
              value="Shamim Shaharear" 
              readOnly
              className="bg-transparent border-none text-white text-base outline-none w-full" 
            />
            <button 
              onClick={() => handleCopy("Shamim Shaharear", "name")}
              className="text-gray-400"
            >
              {copyIcon.name}
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-1">Date of birth</div>
          <div className="flex justify-between items-center">
            <input 
              type="text" 
              value="2003/09/21" 
              readOnly
              className="bg-transparent border-none text-white text-base outline-none w-full" 
            />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-1">Phone</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 w-full">
              <input 
                type="text" 
                value="+880 1750577439" 
                readOnly
                className="bg-transparent border-none text-white text-base outline-none flex-grow" 
              />
              <Check size={16} className="text-teal-500" />
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => handleCopy("+880 1750577439", "phone")}
                className="text-gray-400"
              >
                {copyIcon.phone}
              </button>
              <button 
                className="text-gray-400"
                onClick={() => navigate('/profile/edit-phone')}
              >
                <Phone size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-1">Email</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 w-full">
              <input 
                type="text" 
                value="mdshamimkhanboss39@gmail.com" 
                readOnly
                className="bg-transparent border-none text-white text-base outline-none flex-grow" 
              />
              <Check size={16} className="text-teal-500" />
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => handleCopy("mdshamimkhanboss39@gmail.com", "email")}
                className="text-gray-400"
              >
                {copyIcon.email}
              </button>
              <button 
                className="text-gray-400"
                onClick={() => navigate('/profile/edit-email')}
              >
                <Mail size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
