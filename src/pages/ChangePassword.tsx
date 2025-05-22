
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast({
        title: "Error",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New password and confirm password do not match",
        variant: "destructive",
      });
      return;
    }
    
    // Password validation
    const passwordRegex = {
      length: /.{6,20}/,
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[!@#$%^*]/
    };
    
    if (!passwordRegex.length.test(newPassword)) {
      toast({
        title: "Error",
        description: "Password must be 6-20 characters",
        variant: "destructive",
      });
      return;
    }
    
    if (!passwordRegex.uppercase.test(newPassword)) {
      toast({
        title: "Error",
        description: "Password must contain at least 1 uppercase letter",
        variant: "destructive",
      });
      return;
    }
    
    if (!passwordRegex.lowercase.test(newPassword)) {
      toast({
        title: "Error",
        description: "Password must contain at least 1 lowercase letter",
        variant: "destructive",
      });
      return;
    }
    
    if (!passwordRegex.number.test(newPassword)) {
      toast({
        title: "Error",
        description: "Password must contain at least 1 number",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would make an API call to change the password
    toast({
      title: "Success",
      description: "Password has been changed successfully",
    });
    
    navigate(-1);
  };
  
  return (
    <div className="animate-fade-in pb-20">
      {/* Header */}
      <div className="px-4 py-4 flex items-center">
        <button 
          className="mr-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>
        <h1 className="text-xl font-bold">Change password</h1>
      </div>
      
      <form onSubmit={handleChangePassword} className="p-4">
        {/* Current Password */}
        <div className="mb-6">
          <div className="text-sm text-muted-foreground mb-2">Current password</div>
          <div className="relative">
            <input 
              type={showCurrentPassword ? "text" : "password"} 
              placeholder="Enter your password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-gray-800 border-none rounded-md py-3 px-4 text-white"
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        {/* New Password */}
        <div className="mb-2">
          <div className="text-sm text-muted-foreground mb-2">New password</div>
          <div className="relative">
            <input 
              type={showNewPassword ? "text" : "password"} 
              placeholder="Enter your password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-gray-800 border-none rounded-md py-3 px-4 text-white"
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        {/* Password Requirements */}
        <div className="mb-6 text-sm">
          <div className={`flex items-center gap-2 mb-1 ${/^.{6,20}$/.test(newPassword) ? 'text-teal-500' : 'text-gray-400'}`}>
            <Check size={16} />
            <span>Must be 6-20 characters</span>
          </div>
          <div className={`flex items-center gap-2 mb-1 ${/[A-Z]/.test(newPassword) ? 'text-teal-500' : 'text-gray-400'}`}>
            <Check size={16} />
            <span>Must contain 1 uppercase alphabet(A-Z)</span>
          </div>
          <div className={`flex items-center gap-2 mb-1 ${/[a-z]/.test(newPassword) ? 'text-teal-500' : 'text-gray-400'}`}>
            <Check size={16} />
            <span>Must contain 1 lowercase alphabet(a-z)</span>
          </div>
          <div className={`flex items-center gap-2 mb-1 ${/[0-9]/.test(newPassword) ? 'text-teal-500' : 'text-gray-400'}`}>
            <Check size={16} />
            <span>Must contain 1 number(0-9)</span>
          </div>
          <div className={`flex items-center gap-2 mb-1 ${/[!@#$%^*]/.test(newPassword) ? 'text-teal-500' : 'text-gray-400'}`}>
            <Check size={16} />
            <span>Allowed special symbols(!@#$%^*)</span>
          </div>
        </div>
        
        {/* Confirm Password */}
        <div className="mb-8">
          <div className="text-sm text-muted-foreground mb-2">Confirm new password</div>
          <div className="relative">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-gray-800 border-none rounded-md py-3 px-4 text-white"
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3"
        >
          Change password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
