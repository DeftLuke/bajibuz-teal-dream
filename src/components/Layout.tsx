
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  
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
      <main className="flex-1 pb-20 animate-fade-in">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
