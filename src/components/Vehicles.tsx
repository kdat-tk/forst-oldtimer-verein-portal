import { Car, Calendar, Gauge, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Vehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz 190 SL',
      year: 1958,
      owner: 'Klaus Müller',
      category: 'Sportwagen',
      description: 'Vollständig restaurierter Roadster in originalem Silbermetallic. Ein Traum für Sonntagsfahrten.',
      features: ['Hardtop', 'Ledersitze', 'Original Motor'],
      condition: 'Konzession 1'
    },
    {
      id: 2,
      name: 'VW Käfer 1200',
      year: 1967,
      owner: 'Petra Schmidt',
      category: 'Klassiker',
      description: 'Der beliebte Käfer in klassischem Pastellblau. Läuft wie am ersten Tag.',
      features: ['Schiebedach', 'Original Interieur', 'H-Kennzeichen'],
      condition: 'Restauriert'
    },
    {
      id: 3,
      name: 'BMW 2002 Turbo',
      year: 1974,
      owner: 'Hans Weber',
      category: 'Sportwagen',
      description: 'Seltener Turbo in Chamonix-Weiß. Eines der ersten Turbo-Serienfahrzeuge.',
      features: ['Turbolader', 'Sportfahrwerk', 'Recaro-Sitze'],
      condition: 'Original'
    },
    {
      id: 4,
      name: 'Porsche 911 Targa',
      year: 1972,
      owner: 'Maria Hoffmann',
      category: 'Sportwagen',
      description: 'Eleganter Targa in klassischem Schwarz mit charakteristischem Überrollbügel.',
      features: ['Targa-Dach', 'Fuchs-Felgen', '2.4L Motor'],
      condition: 'Restauriert'
    },
    {
      id: 5,
      name: 'Ford Mustang Fastback',
      year: 1968,
      owner: 'Jürgen Bauer',
      category: 'Muscle Car',
      description: 'Amerikanischer Klassiker mit V8-Motor. Importiert und liebevoll gepflegt.',
      features: ['V8 289cui', 'Automatik', 'Vinyl-Dach'],
      condition: 'Restauriert'
    },
    {
      id: 6,
      name: 'Citroën 2CV6',
      year: 1981,
      owner: 'Andrea Klein',
      category: 'Kultauto',
      description: 'Die berühmte "Ente" in fröhlichem Gelb. Charm pur auf vier Rädern.',
      features: ['Rolldach', 'Original Sitze', 'Luftkühlung'],
      condition: 'Original'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sportwagen': return 'bg-vintage-copper text-white';
      case 'Klassiker': return 'bg-vintage-gold text-vintage-brown';
      case 'Muscle Car': return 'bg-vintage-leather text-white';
      case 'Kultauto': return 'bg-vintage-brown text-white';
      default: return 'bg-vintage-copper text-white';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Konzession 1': return 'bg-green-600 text-white';
      case 'Restauriert': return 'bg-blue-600 text-white';
      case 'Original': return 'bg-purple-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <section id="vehicles" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vintage-brown mb-6">
            Unsere Fahrzeuge
          </h2>
          <p className="text-xl text-vintage-leather max-w-2xl mx-auto">
            Entdecken Sie die beeindruckende Sammlung klassischer Automobile unserer Vereinsmitglieder.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center mx-auto mb-3 shadow-vintage">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-vintage-copper">6</div>
            <div className="text-sm text-vintage-leather">Fahrzeuge</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center mx-auto mb-3 shadow-vintage">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-vintage-copper">1967</div>
            <div className="text-sm text-vintage-leather">Ø Baujahr</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center mx-auto mb-3 shadow-vintage">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-vintage-copper">4</div>
            <div className="text-sm text-vintage-leather">Sportwagen</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center mx-auto mb-3 shadow-vintage">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-vintage-copper">100%</div>
            <div className="text-sm text-vintage-leather">Leidenschaft</div>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="bg-gradient-card border-vintage-copper/20 shadow-card-vintage hover:shadow-vintage transition-all duration-300 group overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(vehicle.category)}>
                    {vehicle.category}
                  </Badge>
                  <Badge className={getConditionColor(vehicle.condition)}>
                    {vehicle.condition}
                  </Badge>
                </div>
                <CardTitle className="text-vintage-brown group-hover:text-vintage-copper transition-colors">
                  {vehicle.name}
                </CardTitle>
                <div className="flex items-center text-vintage-leather">
                  <Calendar className="w-4 h-4 mr-2" />
                  Baujahr {vehicle.year}
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-vintage-leather mb-1">Besitzer:</p>
                  <p className="font-medium text-vintage-brown">{vehicle.owner}</p>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {vehicle.description}
                </p>
                
                <div>
                  <p className="text-sm text-vintage-leather mb-2">Besonderheiten:</p>
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-vintage text-white p-8 shadow-vintage max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ihr Oldtimer fehlt noch?</h3>
            <p className="mb-6">
              Werden Sie Mitglied und präsentieren Sie Ihren klassischen Schatz in unserer Galerie!
            </p>
            <a 
              href="mailto:info@oldtimerfreunde-forst.de" 
              className="inline-block bg-white text-vintage-copper px-6 py-3 rounded-lg font-medium hover:bg-vintage-cream transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vehicles;