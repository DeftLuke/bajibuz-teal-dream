
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { useSidebar } from '@/context/SidebarContext';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const { isSidebarOpen, closeSidebar } = useSidebar();
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="loader"></div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
      {/* Overlay that appears when sidebar is open (on desktop) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:block hidden" 
          onClick={closeSidebar}
        />
      )}
      
      <main className="flex-1 pb-20 animate-fade-in">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
