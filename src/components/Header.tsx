
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-background border-b border-border p-4 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">
          <div className="font-bold text-xl text-white flex items-center">
            <span className="text-teal-500">baji</span>
            <span>buz</span>
          </div>
        </Link>
        
        <div className="flex gap-2">
          <Link 
            to="/login" 
            className="px-5 py-2 rounded border border-border text-sm font-medium text-white hover:bg-secondary transition-colors"
          >
            Log in
          </Link>
          
          <Link 
            to="/signup" 
            className="px-5 py-2 rounded bg-teal-500 text-sm font-medium text-white hover:bg-opacity-90 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
