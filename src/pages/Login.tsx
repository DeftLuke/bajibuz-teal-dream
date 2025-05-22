import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

const words = [
  { text: "Join", color: "white" },
  { text: "Baji", color: "white" },
  { text: "Buz", color: "teal" },
  { text: "–", color: "white" },
  { text: "Play", color: "white" },
  { text: "Bold.", color: "white" },
  { text: "Win", color: "white" },
  { text: "Big.", color: "white" },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { username, password });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigate("/signup"),
  });

  return (
    <div
      {...swipeHandlers}
      className="min-h-screen flex flex-col bg-black text-white"
    >
      {/* Header */}
      <div className="p-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">
          <img src="./logo.png" alt="logo" className="h-6 md:h-8 w-auto" />
        </Link>
        <Link to="/">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </div>

      {/* Banner */}
      <div className="h-40 md:h-48 bg-gradient-to-r from-gray-900 to-teal-800 relative overflow-hidden">
        {/* <video
          autoPlay
          loop
          src="/login-bg.mp4"
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-40 md:hidden lg:block max-xl:block "
        /> */}
          <div className="w-full max-w-[1920px] h-[200px] flex flex-col items-center justify-center px-4 md:px-10 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-center">
      {/* Animated Brand Name */}
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

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-2 text-base sm:text-lg md:text-xl text-gray-200 font-light font-poppins"
      >
        Join <span className="text-white font-medium">BajiBuz</span> – Play Bold. Win Big.
      </motion.p>

      {/* Fonts Import (Tailwind style in index.css or globals.css) */}
    </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <Link
          to="/login"
          className="flex-1 py-4 text-center text-teal-500 border-b-2 border-teal-500 font-medium"
        >
          Log in
        </Link>
        <Link to="/signup" className="flex-1 py-4 text-center text-gray-400">
          Sign up
        </Link>
      </div>

      {/* Form */}
      <div className="flex-1 px-4 md:px-8 py-6 animate-fade-in">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-3 bg-secondary border border-border rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-teal-500 text-sm hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
