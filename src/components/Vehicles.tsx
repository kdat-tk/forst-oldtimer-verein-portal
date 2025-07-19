import { Car, Calendar, Gauge, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Vehicles = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Eicher EKL 15/II',
      year: 1956,
      owner: 'A. Kramer',
      category: 'Ackerschlepper',
      description: 'Original erhaltener Ackerschlepper mit 16 PS. Laut Eicher der beste Bulldog der Welt.',
      features: ['1-Zylinder', 'Vorderachsfederung', 'Original Zustand'],
      condition: 'Original'
    },
    {
      id: 2,
      name: 'Antonio Carraro 635 Supertigre',
      year: 1970,
      owner: 'M. Becker',
      category: 'Ackerschlepper',
      description: 'Ein Knicklenker mit Allradantrieb für Wein- und Obstbau.',
      features: ['Knicklenker', 'Lombardini-Dieselmotor', '30 PS'],
      condition: 'Original'
    },
    {
      id: 3,
      name: 'Belarus 510',
      year: 1969,
      owner: 'O. Geuder',
      category: 'Ackerschlepper',
      description: 'Leistungsstarker Traktor mit ca. 60 PS, der sich durch robuste Bauweise und zuverlässige Technik auszeichnet.',
      features: ['Vierzylinder', 'Hohe Zugkraft', 'LKW-Sitz'],
      condition: 'Restauriert'
    },
    {
      id: 4,
      name: 'Ausflugsanhänger',
      year: 1968,
      owner: 'Verein',
      category: 'Anhänger',
      description: 'Anhänger für Ausflüge, geeignet für Last- und Personentransport.',
      features: ['Überdacht', 'Sitzbank', 'Beleuchtung'],
      condition: 'Restauriert'
    },
    {
      id: 5,
      name: 'Rapid Alltrac',
      year: 1972,
      owner: 'O. Geuder',
      category: 'Bergtraktor',
      description: 'Kompakter Einachsschlepper mit Allradantrieb aus der Schweiz, der speziell für den Einsatz in der Berglandwirtschaft entwickelt wurde',
      features: ['Allradantrieb', 'Ladepritsche', 'Überdachung'],
      condition: 'Restauriert'
    },
    {
      id: 6,
      name: 'Bierschankwagen',
      year: 1985,
      owner: 'Verein',
      category: 'Anhänger',
      description: 'Schankwagen mit Zapfanlage - unser Garant für tolle Feste.',
      features: ['Zwei Zapfhähne', 'Theke', 'Durchlaufkühler'],
      condition: 'Renoviert'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Ackerschlepper': return 'bg-vintage-copper text-white';
      case 'Anhänger': return 'bg-vintage-gold text-vintage-brown';
      case 'Bergtraktor': return 'bg-vintage-leather text-white';
      case 'Klassiker': return 'bg-vintage-brown text-white';
      default: return 'bg-vintage-copper text-white';
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Renoviert': return 'bg-green-600 text-white';
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
            Entdecken Sie die Sammlung klassischer Fahrzeuge unserer Vereinsmitglieder.
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
            <div className="text-2xl font-bold text-vintage-copper">1968</div>
            <div className="text-sm text-vintage-leather">Ø Baujahr</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center mx-auto mb-3 shadow-vintage">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-vintage-copper">2</div>
            <div className="text-sm text-vintage-leather">Anhänger</div>
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
