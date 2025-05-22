
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneCode, setPhoneCode] = useState('+880');
  const [isVerifying, setIsVerifying] = useState(false);
  
  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email) {
      toast.error('Please fill all required fields');
      return;
    }
    
    setIsVerifying(true);
    // Simulate verification delay
    setTimeout(() => {
      setIsVerifying(false);
      toast.success('Reset link sent to your email');
      console.log('Reset password attempt via email with:', { username, email });
    }, 2000);
  };
  
  const handleSubmitPhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !phoneNumber) {
      toast.error('Please fill all required fields');
      return;
    }
    
    setIsVerifying(true);
    // Simulate verification delay
    setTimeout(() => {
      setIsVerifying(false);
      toast.success('Reset code sent to your phone');
      console.log('Reset password attempt via phone with:', { username, phone: phoneCode + phoneNumber });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">
          <div className="font-bold text-xl text-white flex items-center">
           <img src="./logo.png" alt="logo" height={6} width={100} />
          </div>
        </Link>
        
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
      </div>
      
      {/* Back Button */}
      <div className="px-4 py-2 flex items-center">
        <Link to="/login" className="flex items-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-lg font-medium">Forgot password</span>
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 animate-fade-in">
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="email" className="text-base">Email</TabsTrigger>
            <TabsTrigger value="phone" className="text-base">Phone</TabsTrigger>
          </TabsList>
          
          <TabsContent value="email">
            <form onSubmit={handleSubmitEmail} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-3 py-3 h-auto bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 h-auto bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              {/* Verification Section */}
              <div className="mb-6 p-4 rounded-md border border-border bg-secondary/60 flex items-center justify-between">
                <div className="flex items-center">
                  {isVerifying ? (
                    <div className="w-5 h-5 rounded-full border-2 border-teal-500 border-t-transparent animate-spin mr-2"></div>
                  ) : (
                    <svg className="w-5 h-5 text-teal-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span className="text-sm text-gray-400">{isVerifying ? "Verifying..." : "Verification"}</span>
                </div>
                <div className="flex items-center">
                  <img src="https://www.cloudflare.com/static/ccaf5fd983a31a9cd9151db25c840963/cloudflare_logo_icon.svg" alt="Cloudflare" className="h-5 w-5 mr-1" />
                  <span className="text-xs text-gray-500">CLOUDFLARE</span>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 h-auto rounded-md font-medium transition-colors"
                disabled={isVerifying}
              >
                {isVerifying ? "Processing..." : "Reset password"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="phone">
            <form onSubmit={handleSubmitPhone} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="username-phone" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <Input
                  type="text"
                  id="username-phone"
                  placeholder="Enter your username"
                  className="w-full px-3 py-3 h-auto bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone number</label>
                <div className="flex">
                  <div className="relative w-1/4 mr-2">
                    <div className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-green-600 mr-1 flex items-center justify-center overflow-hidden">
                      <img src="./flagp.png" alt="flag" height={20} width={30}/>
                        </div>
                        <span>+880</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="- - - - - - - - -"
                    className="w-3/4 px-3 py-3 h-auto bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Verification Section */}
              <div className="mb-6 p-4 rounded-md border border-border bg-secondary/60 flex items-center justify-between">
                <div className="flex items-center">
                  {isVerifying ? (
                    <div className="w-5 h-5 rounded-full border-2 border-teal-500 border-t-transparent animate-spin mr-2"></div>
                  ) : (
                    <svg className="w-5 h-5 text-teal-500 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span className="text-sm text-gray-400">{isVerifying ? "Verifying..." : "Verification"}</span>
                </div>
                <div className="flex items-center">
                  <img src="https://www.cloudflare.com/static/ccaf5fd983a31a9cd9151db25c840963/cloudflare_logo_icon.svg" alt="Cloudflare" className="h-5 w-5 mr-1" />
                  <span className="text-xs text-gray-500">CLOUDFLARE</span>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 h-auto rounded-md font-medium transition-colors"
                disabled={isVerifying}
              >
                {isVerifying ? "Processing..." : "Reset password"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center justify-center w-10 h-10 bg-black/20 rounded-full backdrop-blur-sm">
            <span className="text-teal-500 font-bold">bj</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
