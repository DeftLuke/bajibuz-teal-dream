
import { Link, useLocation } from 'react-router-dom';
import { Menu, Wallet } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;
  const { toggleSidebar } = useSidebar();
  
  const isActive = (route: string) => {
    return path === route;
  };
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-between items-center h-16 z-10">
      <button 
        onClick={toggleSidebar}
        className={`flex flex-1 flex-col items-center justify-center h-full ${isActive('/menu') ? 'text-teal-500' : 'text-gray-400'}`}
      >
        <Menu className="h-5 w-5" />
        <span className="text-xs mt-1">Menu</span>
      </button>
      
      <Link 
        to="/casino" 
        className={`flex flex-1 flex-col items-center justify-center h-full ${isActive('/casino') ? 'text-teal-500' : 'text-gray-400'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
        <span className="text-xs mt-1">Casino</span>
      </Link>
      
      <Link 
        to="/slots" 
        className={`flex flex-1 flex-col items-center justify-center h-full ${isActive('/slots') ? 'text-teal-500' : 'text-gray-400'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <span className="text-xs mt-1">Slots</span>
      </Link>
      
      <Link 
        to="/deposit" 
        className={`flex flex-1 flex-col items-center justify-center h-full ${isActive('/deposit') ? 'text-teal-500' : 'text-gray-400'}`}
      >
        <Wallet className="h-5 w-5" />
        <span className="text-xs mt-1">Deposit</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
