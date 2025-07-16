import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechSpecs from '@/components/TechSpecs';
import Design from '@/components/Design';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <TechSpecs />
      <Design />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
