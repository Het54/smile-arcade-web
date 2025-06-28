
import { Hero } from '@/components/sections/Hero';
import { FeaturedServices } from '@/components/sections/FeaturedServices';
import { Testimonials } from '@/components/sections/Testimonials';
import { SocialProof } from '@/components/sections/SocialProof';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedServices />
      <Testimonials />
      <SocialProof />
    </div>
  );
};

export default Index;
