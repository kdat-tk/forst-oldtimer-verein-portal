import { Beer, Calendar, Euro, MapPin, Phone, Mail, Clock, Users, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import bierwagenImage from '@/assets/bierschankwagen.jpg';

const Rental = () => {
  const features = [
    'Authentischer historischer Bierschankwagen',
    'Komplett ausgestattet mit Zapfanlage',
    'Professionelle Bedienung auf Wunsch',
    'Dekoration im Vintage-Stil inklusive',
    'Transport und Aufbau im Preis enthalten',
    'Verschiedene Biersorten verfügbar'
  ];

  const occasions = [
    { name: 'Hochzeiten', icon: '💍' },
    { name: 'Firmenfeiern', icon: '🏢' },
    { name: 'Stadtfeste', icon: '🎪' },
    { name: 'Geburtstage', icon: '🎂' },
    { name: 'Oldtimer-Events', icon: '🚗' },
    { name: 'Märkte', icon: '🛒' }
  ];

  const packages = [
    {
      name: 'Basis-Paket',
      duration: '4 Stunden',
      price: '350',
      included: ['Bierschankwagen', 'Zapfanlage', 'Grundausstattung', 'Transport (20km)'],
      popular: false
    },
    {
      name: 'Komfort-Paket',
      duration: '6 Stunden',
      price: '480',
      included: ['Alles aus Basis-Paket', 'Bedienungspersonal', 'Dekoration', 'Verschiedene Biersorten'],
      popular: true
    },
    {
      name: 'Premium-Paket',
      duration: '8 Stunden',
      price: '650',
      included: ['Alles aus Komfort-Paket', 'Verlängerte Betreuung', 'Zusätzliche Dekoration', 'Gratis-Kilometer'],
      popular: false
    }
  ];

  return (
    <section id="rental" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vintage-brown mb-6">
            Bierschankwagen Vermietung
          </h2>
          <p className="text-xl text-vintage-leather max-w-2xl mx-auto">
            Verleihen Sie Ihrer Veranstaltung mit unserem historischen Bierschankwagen echten Charme und Authentizität.
          </p>
        </div>

        {/* Hero Image and Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={bierwagenImage} 
              alt="Historischer Bierschankwagen" 
              className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-vintage"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-vintage-brown mb-4">
              Tradition trifft Moderne
            </h3>
            <p className="text-vintage-leather mb-6">
              Unser liebevoll restaurierter Bierschankwagen aus den 1950er Jahren bringt 
              authentisches Flair zu jeder Veranstaltung. Mit original Details und 
              moderner Ausstattung ist er der perfekte Blickfang für Ihr Event.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-vintage-copper">
                <Users className="w-5 h-5 mr-2" />
                <span>Bis 150 Gäste</span>
              </div>
              <div className="flex items-center text-vintage-copper">
                <Clock className="w-5 h-5 mr-2" />
                <span>Flexible Zeiten</span>
              </div>
              <div className="flex items-center text-vintage-copper">
                <MapPin className="w-5 h-5 mr-2" />
                <span>50km Umkreis</span>
              </div>
              <div className="flex items-center text-vintage-copper">
                <Beer className="w-5 h-5 mr-2" />
                <span>Frisches Bier</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-vintage-brown mb-8 text-center">
            Was Sie erwartet
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-card rounded-lg shadow-card-vintage">
                <Check className="w-5 h-5 text-vintage-copper mt-1 flex-shrink-0" />
                <span className="text-vintage-brown">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Occasions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-vintage-brown mb-8 text-center">
            Perfekt für jeden Anlass
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occasion, index) => (
              <Card key={index} className="text-center p-4 bg-gradient-card border-vintage-copper/20 hover:shadow-card-vintage transition-all duration-300">
                <div className="text-3xl mb-2">{occasion.icon}</div>
                <div className="text-sm font-medium text-vintage-brown">{occasion.name}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-vintage-brown mb-8 text-center">
            Unsere Pakete
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative bg-gradient-card border-vintage-copper/20 shadow-card-vintage hover:shadow-vintage transition-all duration-300 ${pkg.popular ? 'ring-2 ring-vintage-gold' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-vintage-gold text-vintage-brown">
                    Beliebt
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-vintage-brown">{pkg.name}</CardTitle>
                  <div className="text-vintage-leather">{pkg.duration}</div>
                  <div className="text-3xl font-bold text-vintage-copper">
                    {pkg.price}€
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.included.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-vintage-copper mt-1 flex-shrink-0" />
                        <span className="text-sm text-vintage-brown">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={pkg.popular ? "vintage" : "outline"} 
                    className="w-full mt-6"
                  >
                    Paket anfragen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="bg-gradient-vintage text-white shadow-vintage">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Jetzt anfragen</CardTitle>
            <p className="text-white/90">
              Interesse an unserem Bierschankwagen? Kontaktieren Sie uns für ein unverbindliches Angebot.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Telefon</div>
                    <div className="text-white/90">+49 (0) 3562 123456</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-medium">E-Mail</div>
                    <div className="text-white/90">vermietung@oldtimerfreunde-forst.de</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Erreichbarkeit</div>
                    <div className="text-white/90">Mo-Fr 18:00-20:00 Uhr</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Button variant="secondary" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Verfügbarkeit prüfen
                </Button>
                <Button variant="secondary" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  E-Mail senden
                </Button>
                <p className="text-sm text-white/80 text-center">
                  Antwort innerhalb von 24 Stunden garantiert
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Rental;