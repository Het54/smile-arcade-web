
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/about/Team";
import Facility from "./pages/about/Facility";
import EquipmentDetail from "./pages/about/EquipmentDetail";
import Achievements from "./pages/about/Achievements";
import VirtualTour from "./pages/about/VirtualTour";
import Orthodontics from "./pages/services/Orthodontics";
import OralSurgery from "./pages/services/OralSurgery";
import ConservativeDentistry from "./pages/services/ConservativeDentistry";
import CosmeticDentistry from "./pages/services/CosmeticDentistry";
import DentalVeneers from "./pages/services/DentalVeneers";
import TeethWhitening from "./pages/services/TeethWhitening";
import SmileMakeover from "./pages/services/SmileMakeover";
import Prosthodontics from "./pages/services/Prosthodontics";
import DentalBridges from "./pages/services/DentalBridges";
import DentalImplants from "./pages/services/DentalImplants";
import DentalCrowns from "./pages/services/DentalCrowns";
import Dentures from "./pages/services/Dentures";
import Periodontics from "./pages/services/Periodontics";
import TeethScaling from "./pages/services/TeethScaling";
import LaserDentistry from "./pages/services/LaserDentistry";
import PediatricDentistry from "./pages/services/PediatricDentistry";
import SedationDentistry from "./pages/services/SedationDentistry";
import RootCanalTreatment from "./pages/services/RootCanalTreatment";
import BrushingTechniques from "./pages/services/BrushingTechniques";
import DentalLifestyle from "./pages/DentalLifestyle";
import WeddingSmile from "./pages/WeddingSmile";
import SuperOrganised from "./pages/wedding-smile/SuperOrganised";
import ComputerGeek from "./pages/wedding-smile/ComputerGeek";
import Twinkle from "./pages/wedding-smile/offers/Twinkle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/about/team" element={<PageTransition><Team /></PageTransition>} />
        <Route path="/about/facility" element={<PageTransition><Facility /></PageTransition>} />
        <Route path="/about/equipment/:equipmentSlug" element={<PageTransition><EquipmentDetail /></PageTransition>} />
        <Route path="/about/achievements" element={<PageTransition><Achievements /></PageTransition>} />
        <Route path="/about/virtual-tour" element={<PageTransition><VirtualTour /></PageTransition>} />
        <Route path="/services/orthodontics" element={<PageTransition><Orthodontics /></PageTransition>} />
        <Route path="/services/oral-surgery" element={<PageTransition><OralSurgery /></PageTransition>} />
        <Route path="/services/conservative-dentistry" element={<PageTransition><ConservativeDentistry /></PageTransition>} />
        <Route path="/services/cosmetic-dentistry" element={<PageTransition><CosmeticDentistry /></PageTransition>} />
        <Route path="/services/dental-veneers" element={<PageTransition><DentalVeneers /></PageTransition>} />
        <Route path="/services/teeth-whitening" element={<PageTransition><TeethWhitening /></PageTransition>} />
        <Route path="/services/smile-makeover" element={<PageTransition><SmileMakeover /></PageTransition>} />
        <Route path="/services/prosthodontics" element={<PageTransition><Prosthodontics /></PageTransition>} />
        <Route path="/services/dental-bridges" element={<PageTransition><DentalBridges /></PageTransition>} />
        <Route path="/services/dental-implants" element={<PageTransition><DentalImplants /></PageTransition>} />
        <Route path="/services/dental-crowns" element={<PageTransition><DentalCrowns /></PageTransition>} />
        <Route path="/services/dentures" element={<PageTransition><Dentures /></PageTransition>} />
        <Route path="/services/periodontics" element={<PageTransition><Periodontics /></PageTransition>} />
        <Route path="/services/teeth-scaling" element={<PageTransition><TeethScaling /></PageTransition>} />
        <Route path="/services/laser-dentistry" element={<PageTransition><LaserDentistry /></PageTransition>} />
        <Route path="/services/pediatric-dentistry" element={<PageTransition><PediatricDentistry /></PageTransition>} />
        <Route path="/services/sedation-dentistry" element={<PageTransition><SedationDentistry /></PageTransition>} />
        <Route path="/services/root-canal-treatment" element={<PageTransition><RootCanalTreatment /></PageTransition>} />
        <Route path="/services/brushing-techniques" element={<PageTransition><BrushingTechniques /></PageTransition>} />
        <Route path="/lifestyle" element={<PageTransition><DentalLifestyle /></PageTransition>} />
        <Route path="/wedding-smile" element={<PageTransition><WeddingSmile /></PageTransition>} />
        <Route path="/wedding-smile/super-organised" element={<PageTransition><SuperOrganised /></PageTransition>} />
        <Route path="/wedding-smile/computer-geek" element={<PageTransition><ComputerGeek /></PageTransition>} />
        <Route path="/wedding-smile/offers/twinkle" element={<PageTransition><Twinkle /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
