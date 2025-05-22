
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Eye, EyeOff, RefreshCw, Bell, User, LogOut, FileText, PieChart, BarChart3, Crown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetClose } from '@/components/ui/sheet';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showBalance, setShowBalance] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
    toast({
      title: showBalance ? "Balance hidden" : "Balance shown",
      description: showBalance ? "Your balance is now hidden" : "Your balance is now visible",
      duration: 2000,
    });
  };

  const navigateTo = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
      duration: 2000,
    });
    // In a real app, you would handle actual logout logic here
    navigate('/login');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="top" className="h-full w-full p-0 sm:max-w-full border-none">
        <div className="flex flex-col bg-background h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold">Profile</h2>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" onClick={handleClose}>
                <X size={24} />
              </Button>
            </SheetClose>
          </div>
          
          {/* User info */}
          <div className="p-4 bg-background">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <span className="text-white text-lg">S</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Full legal name</div>
                  <div className="font-medium">Shamim Shaharear</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Username</div>
                <div className="font-medium">helloshamim</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Sign up date: 2022-07-18</div>
            
            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button variant="outline" className="bg-background text-white border-gray-700 hover:bg-gray-700">
                Withdrawal
              </Button>
              <Button className="bg-teal-500 hover:bg-teal-600">
                Deposit
              </Button>
            </div>
            
            {/* Wallet info */}
            <div className="mt-4 p-3 bg-secondary rounded-md">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Main wallet</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleBalance}>
                    {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <RefreshCw size={16} />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-teal-500">₹</span>
                <span className="font-bold">{showBalance ? "10,000.00" : "**********"}</span>
              </div>
              
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">VIP Points</span>
                  <div className="bg-gray-700 text-xs text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <span>Normal</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-500">🪙</span>
                  <span className="font-bold">{showBalance ? "250" : "**********"}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Menu items */}
          <div className="flex flex-col">
            <MenuItem icon={Bell} label="Notifications" onClick={() => navigateTo('/notifications')} />
            <MenuItem icon={User} label="Personal info" onClick={() => navigateTo('/profile/personal-info')} />
            <MenuItem icon={LogOut} label="Login & Security" onClick={() => navigateTo('/profile/security')} />
            <MenuItem icon={FileText} label="Transaction records" onClick={() => navigateTo('/transaction-records')} />
            <MenuItem icon={PieChart} label="Betting records" onClick={() => navigateTo('/betting-records')} />
            <MenuItem icon={BarChart3} label="Turnover" onClick={() => navigateTo('/turnover')} />
            <MenuItem icon={Crown} label="My VIP" onClick={() => navigateTo('/my-vip')} />
            <MenuItem icon={Users} label="My referral" onClick={() => navigateTo('/my-referral')} />
          </div>
          
          {/* Logout button */}
          <div className="mt-auto p-4">
            <Button 
              variant="outline" 
              className="w-full bg-background text-white border-gray-700 hover:bg-gray-700"
              onClick={handleLogout}
            >
              Log out
            </Button>
            <div className="text-center mt-4">
              <button className="text-teal-500 text-sm">Switch to classic mode</button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MenuItem = ({ icon: Icon, label, onClick }: { icon: React.ElementType, label: string, onClick: () => void }) => {
  return (
    <button 
      className="flex items-center justify-between py-4 px-4 border-t border-gray-800 hover:bg-gray-800/50 transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <Icon size={20} className="text-gray-500" />
        <span>{label}</span>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 h-4 w-4">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </div>
    </button>
  );
};

export default Profile;
