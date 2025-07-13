import { Button } from '@/components/ui/button';
import { Calendar, Users, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-oldtimer.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Classic vintage car" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-vintage-cream/80 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-vintage-brown leading-tight">
            Oldtimerfreunde
            <span className="block text-vintage-copper text-4xl md:text-5xl mt-2">Forst</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-vintage-leather mb-8 max-w-2xl mx-auto">
            Leidenschaft für klassische Automobile und Gemeinschaft seit 2024
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Wir sind ein frisch gegründeter Verein für Liebhaber klassischer Fahrzeuge. 
            Bei uns treffen sich Menschen, die die Faszination für Oldtimer teilen und 
            gemeinsam unvergessliche Erlebnisse schaffen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="vintage" 
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Aktuelle Events
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="w-5 h-5 mr-2" />
              Unsere Fahrzeuge
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              className="w-8 h-8 text-vintage-copper mx-auto cursor-pointer hover:text-vintage-gold transition-colors"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default Hero;