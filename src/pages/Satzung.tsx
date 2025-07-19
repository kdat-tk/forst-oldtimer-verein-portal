import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Calendar, Users } from 'lucide-react';

const Satzung = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-vintage-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center shadow-vintage">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-vintage-brown mb-6">
              Vereinssatzung
            </h1>
            <p className="text-lg text-vintage-copper mb-8">
              Die Satzung der Oldtimerfreunde Forst e.V. - Gegründet am 10. November 2024
            </p>
            <div className="flex justify-center items-center space-x-2 text-vintage-copper">
              <Calendar className="w-5 h-5" />
              <span>Gründung: 10. November 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-card-vintage p-8 md:p-12">
              
              {/* Preamble */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  Präambel
                </h2>
                <p className="text-vintage-copper leading-relaxed">
                  Zweck des Vereins ist die Förderung der Erhaltung und Pflege historischer Fahrzeuge wie
                  Traktoren, Landmaschinen, Autos und Motorräder sowie die Bewahrung des traditionellen
                  Brauchtums und der technischen Kultur. Der Verein engagiert sich in der Bildung und
                  Weiterbildung seiner Mitglieder und der interessierten Öffentlichkeit durch
                  Informationsveranstaltungen, Vorführungen und Ausstellungen. Er fördert die Gemeinschaft
                  und das soziale Miteinander durch regelmäßige Treffen und Ausfahrten und setzt sich für die
                  Jugendarbeit und Nachwuchsförderung ein. Darüber hinaus betreibt der Verein aktive
                  Öffentlichkeitsarbeit, um seine Ziele und Aktivitäten bekannt zu machen und das Interesse
                  an historischen Fahrzeugen zu fördern.
                </p>
              </div>

              {/* Satzung Download */}
              <div className="space-y-10">
                
                <Button variant="secondary" className="w-full">
                  Satzung herunterladen
                </Button>
              </div>

              {/* Signature Section */}
              <div className="mt-16 pt-8 border-t border-vintage-copper/20">
                <div className="text-center">
                  <p className="text-vintage-copper mb-4">
                    Diese Satzung wurde am 10. November 2024 von den Gründungsmitgliedern beschlossen.
                  </p>
                  <div className="bg-vintage-cream/50 rounded-lg p-6">
                    <p className="text-vintage-brown font-semibold">
                      Oldtimerfreunde Forst e.V.
                    </p>
                    <p className="text-vintage-copper">
                      Gegründet am 10. November 2024 in Forst (Lausitz)
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Satzung;
