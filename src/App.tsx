
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Casino from "./pages/Casino";
import Slots from "./pages/Slots";
import Promotions from "./pages/Promotions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Deposit from "./pages/Deposit";
import EWallet from "./pages/EWallet";
import SelectPromotion from "./pages/SelectPromotion";
import EnterAmount from "./pages/EnterAmount";
import Profile from "./pages/Profile";
import PersonalInfo from "./pages/PersonalInfo";
import ChangePassword from "./pages/ChangePassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/casino" element={<Casino />} />
              <Route path="/slots" element={<Slots />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/deposit/ewallet" element={<EWallet />} />
              <Route path="/deposit/select-promotion" element={<SelectPromotion />} />
              <Route path="/deposit/enter-amount" element={<EnterAmount />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/personal-info" element={<PersonalInfo />} />
              <Route path="/profile/change-password" element={<ChangePassword />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
