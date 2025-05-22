import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currency] = useState("BDT");
  const [phoneCode] = useState("+880");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [referCode, setReferCode] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt with:", {
      fullName,
      username,
      email,
      currency,
      phone: phoneCode + phoneNumber,
      referCode,
      isAgreed,
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => navigate("/login"),
  });

  return (
    <div {...swipeHandlers} className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <div className="p-4 flex justify-between items-center md:px-8">
        <Link to="/" className="flex items-center gap-1">
          <img src="./logo.png" alt="logo" className="h-6 md:h-8 w-auto" />
        </Link>
        <Link to="/">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
      </div>

      {/* Banner */}
      <div className="h-36 md:h-48 bg-gradient-to-r from-gray-900 to-teal-800 relative overflow-hidden">
       <div className="w-full max-w-[1920px]  flex flex-col items-center justify-center px-4 md:px-10 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center py-8">
      {/* Brand Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, y: -30, rotateX: -90 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-cinzel"
      >
        <span className="text-white">Baji</span>
        <span className="text-teal-400">Buz</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 font-light font-poppins max-w-3xl px-4"
      >
        Step into the world of <span className="text-white font-semibold">Baji</span><span className="text-teal-400 font-semibold">Buz</span> — 
        where excitement never sleeps. 
      </motion.p>

      {/* Optional CTA Button */}
      
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-6 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-base sm:text-lg transition-all"
      >
        🎁 Claim Your Welcome Bonus
      </motion.button>
     
    </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <Link to="/login" className="flex-1 py-4 text-center text-gray-400">
          Log in
        </Link>
        <Link to="/signup" className="flex-1 py-4 text-center text-teal-500 border-b-2 border-teal-500 font-medium">
          Sign up
        </Link>
      </div>

      {/* Signup Form */}
      <div className="flex-1 px-4 md:px-8 py-6 animate-fade-in mb-12">
        <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="text-sm text-gray-300 mb-1 block">
              Full legal name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full legal name"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="text-sm text-gray-300 mb-1 block">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm text-gray-300 mb-1 block">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Currency */}
          <div>
            <label className="text-sm text-gray-300 mb-1 block">Choose currency</label>
            <div className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white flex items-center justify-between">
              <div className="flex items-center">
                <img src="./flagp.png" alt="flag" className="w-5 h-5 rounded-full mr-2" />
                <span>{currency}</span>
              </div>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0
                 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="text-sm text-gray-300 mb-1 block">
              Phone number
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="w-full sm:w-1/3">
                <div className="px-3 py-3 bg-secondary border border-border rounded-md text-white flex justify-between">
                  <span className="flex items-center gap-2">
                    🇧🇩 <span>{phoneCode}</span>
                  </span>
                </div>
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="1XXXXXXXXX"
                className="flex-1 px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Refer Code */}
          <div>
            <label htmlFor="referCode" className="text-sm text-gray-300 mb-1 block">
              Refer code (Optional)
            </label>
            <input
              id="referCode"
              type="text"
              placeholder="Enter refer code"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={referCode}
              onChange={(e) => setReferCode(e.target.value)}
            />
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2">
            <input
              id="agreement"
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 text-teal-500 bg-secondary border-gray-400 rounded"
            />
            <label htmlFor="agreement" className="text-sm text-gray-300 leading-snug">
              I confirm that I am 18 years old and I have read the{" "}
              <span className="text-teal-500 underline">Terms & Conditions</span>.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
