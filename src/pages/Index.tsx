import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Vehicles from '@/components/Vehicles';
import Rental from '@/components/Rental';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Events />
      <Vehicles />
      <Rental />
      <Footer />
    </div>
  );
};

export default Index;
