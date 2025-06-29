
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
import DentalLifestyle from "./pages/DentalLifestyle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/team" element={<Team />} />
              <Route path="/about/facility" element={<Facility />} />
              <Route path="/about/equipment/:equipmentSlug" element={<EquipmentDetail />} />
              <Route path="/about/achievements" element={<Achievements />} />
              <Route path="/about/virtual-tour" element={<VirtualTour />} />
              <Route path="/services/orthodontics" element={<Orthodontics />} />
              <Route path="/services/oral-surgery" element={<OralSurgery />} />
              <Route path="/services/conservative-dentistry" element={<ConservativeDentistry />} />
              <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
              <Route path="/services/dental-veneers" element={<DentalVeneers />} />
              <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
              <Route path="/services/smile-makeover" element={<SmileMakeover />} />
              <Route path="/lifestyle" element={<DentalLifestyle />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
