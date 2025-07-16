import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SoundQuality from '@/components/SoundQuality';
import ColorVariations from '@/components/ColorVariations';
import TechSpecs from '@/components/TechSpecs';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SoundQuality />
      <ColorVariations />
      <TechSpecs />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
