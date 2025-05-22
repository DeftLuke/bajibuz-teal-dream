
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Gift, 
  Crown, 
  Users, 
  Share2, 
  Award, 
  Download, 
  Phone, 
  Info, 
  BookOpen, 
  MessageSquare, 
  ChevronDown,
  X,
  ExternalLink
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuLink = ({ 
  to, 
  icon: Icon, 
  children, 
  hasDropdown = false,
  isExternal = false,
  onClick
}: { 
  to: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  hasDropdown?: boolean;
  isExternal?: boolean;
  onClick?: () => void;
}) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={cn(
      "flex items-center justify-between py-4 px-5 text-gray-300 hover:text-teal-500 transition-colors",
      "border-b border-gray-800"
    )}
  >
    <div className="flex items-center gap-3">
      <Icon size={20} className="text-gray-500" />
      <span className="text-base">{children}</span>
    </div>
    {hasDropdown && <ChevronDown size={20} className="text-teal-500" />}
    {isExternal && <ExternalLink size={18} className="text-gray-500" />}
  </Link>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // For mobile devices, use a drawer
  const isMobile = window.innerWidth < 768;
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };
  
  const menuContent = (
    <div className="flex flex-col bg-black min-h-screen w-full">
      {/* Header with close button (mobile only) */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
        <div className="flex items-center">
          <span className="text-white text-xl font-bold">24/7 Live Chat</span>
        </div>
        <Button 
          onClick={onClose} 
          variant="ghost" 
          size="icon" 
          className="text-white hover:text-teal-500"
        >
          <X size={24} />
        </Button>
      </div>
      
      {/* Menu Items */}
      <div className="flex flex-col">
        <MenuLink 
          to="/promotions" 
          icon={Gift} 
          hasDropdown
          onClick={() => handleNavigation('/promotions')}
        >
          Promotions
        </MenuLink>
        <MenuLink to="/vip-club" icon={Crown}>
          VIP Club
        </MenuLink>
        <MenuLink to="/referral" icon={Users}>
          Referral program
        </MenuLink>
        <MenuLink to="/affiliate" icon={Share2} isExternal>
          Affiliate
        </MenuLink>
        <MenuLink to="/brand-ambassadors" icon={Award}>
          Brand Ambassadors
        </MenuLink>
        <MenuLink to="/app-download" icon={Download}>
          APP Download
        </MenuLink>
      </div>
      
      <div className="mt-5">
        <MenuLink to="/contact" icon={Phone} hasDropdown>
          Contact Us
        </MenuLink>
        <MenuLink to="/about" icon={Info} isExternal>
          About Baji
        </MenuLink>
        <MenuLink to="/guide" icon={BookOpen} isExternal>
          New Member Guide
        </MenuLink>
        <MenuLink to="/forum" icon={MessageSquare} isExternal>
          BJ Forum
        </MenuLink>
      </div>
      
      {/* Footer */}
      <div className="mt-auto border-t border-gray-800 p-5">
        <div className="flex justify-center">
          <button className="text-teal-500 text-sm">Switch to classic mode</button>
        </div>
      </div>
    </div>
  );
  
  if (isMobile) {
    return (
      <Drawer open={isOpen} onClose={onClose}>
        <DrawerContent className="h-[85vh]">
          {menuContent}
        </DrawerContent>
      </Drawer>
    );
  }
  
  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out w-80",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {menuContent}
    </div>
  );
};

export default Sidebar;
