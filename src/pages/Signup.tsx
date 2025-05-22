
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('BDT');
  const [phoneCode, setPhoneCode] = useState('+880');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referCode, setReferCode] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { fullName, username, email, currency, phone: phoneCode + phoneNumber, referCode, isAgreed });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">
          <div className="font-bold text-xl text-white flex items-center">
            <span className="text-teal-500">baji</span>
            <span>buz</span>
          </div>
        </Link>
        
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
      </div>
      
      {/* Banner */}
      <div className="h-40 bg-gradient-to-r from-gray-900 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80" 
            alt="Signup banner" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <Link 
          to="/login" 
          className="flex-1 py-4 text-center text-gray-400"
        >
          Log in
        </Link>
        <Link 
          to="/signup" 
          className="flex-1 py-4 text-center text-teal-500 border-b-2 border-teal-500 font-medium"
        >
          Sign up
        </Link>
      </div>
      
      {/* Signup Form */}
      <div className="flex-1 p-6 animate-fade-in mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-300 mb-1">
              Full legal name 
              <button className="ml-1 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </button>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full legal name"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-300 mb-1">Choose currency</label>
            <div className="relative">
              <div className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-green-600 mr-2 flex items-center justify-center overflow-hidden">
                    <span className="text-xs">🇧🇩</span>
                  </div>
                  <span>BDT</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone number</label>
            <div className="flex">
              <div className="relative w-1/4 mr-2">
                <div className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-600 mr-1 flex items-center justify-center overflow-hidden">
                      <span className="text-xs">🇧🇩</span>
                    </div>
                    <span>+880</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <input
                type="tel"
                id="phone"
                placeholder="- - - - - - - - -"
                className="w-3/4 px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label htmlFor="referCode" className="block text-sm font-medium text-gray-300 mb-1">Refer code (Optional)</label>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors mb-4"
          >
            Continue
          </button>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreement"
              className="h-4 w-4 border-gray-400 rounded bg-secondary border text-teal-500 focus:ring-teal-500"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            <label htmlFor="agreement" className="ml-2 block text-sm text-gray-300">
              I confirm that I am 18 years old and I have read the <span className="text-teal-500">Terms & Conditions</span>
            </label>
          </div>
        </form>
        
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center justify-center w-10 h-10 bg-black/20 rounded-full backdrop-blur-sm">
            <span className="text-teal-500 font-bold">bj</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
