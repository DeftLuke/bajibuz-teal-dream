
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { username, password });
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
            alt="Login banner" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <h1 className="text-2xl font-bold text-white mb-1">Hello</h1>
          <p className="text-xl text-white">Welcome to BJ</p>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <Link 
          to="/login" 
          className="flex-1 py-4 text-center text-teal-500 border-b-2 border-teal-500 font-medium"
        >
          Log in
        </Link>
        <Link 
          to="/signup" 
          className="flex-1 py-4 text-center text-gray-400"
        >
          Sign up
        </Link>
      </div>
      
      {/* Login Form */}
      <div className="flex-1 p-6 animate-fade-in">
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex justify-end mb-6">
            <Link to="/forgot-password" className="text-teal-500 text-sm">Forgot password?</Link>
          </div>
          
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            Log in
          </button>
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

export default Login;
