import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, Mail, Phone, MapPin, User, Shield } from 'lucide-react';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-vintage-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center shadow-vintage">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-vintage-brown mb-6">
              Impressum
            </h1>
            <p className="text-lg text-vintage-copper">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-card-vintage p-8 md:p-12">
              
              {/* Vereinsangaben */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <Building className="w-6 h-6 mr-3" />
                  Vereinsangaben
                </h2>
                <div className="space-y-4 text-vintage-copper">
                  <div>
                    <h3 className="font-semibold text-vintage-brown">Vereinsname:</h3>
                    <p>Oldtimerfreunde Forst e.V.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">Anschrift:</h3>
                    <p>Weiherer Str. 31<br />
                    76694 Forst</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">Vereinsregister:</h3>
                    <p>Amtsgericht Mannheim / Registergericht</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">Gründung:</h3>
                    <p>10. November 2024</p>
                  </div>
                </div>
              </div>

              {/* Vertretungsberechtigter Vorstand */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3" />
                  Vertretungsberechtigter Vorstand
                </h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Der Verein wird vertreten durch den 1. Vorsitzenden, den 2. Vorsitzenden sowie den Kassier.
                  </p>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">1. Vorsitzender:</h3>
                    <p>Oswin Geuder</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">2. Vorsitzender:</h3>
                    <p>Roland Friedel</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-vintage-brown">Kassier:</h3>
                    <p>Dr. Tommi Kramer</p>
                  </div>
                </div>
              </div>

              {/* Kontakt */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  Kontakt
                </h2>
                <div className="space-y-4 text-vintage-copper">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-vintage-copper" />
                    <div>
                      <span className="font-semibold">E-Mail: </span>
                      <a href="mailto:info@oldtimerfreunde-forst.de" className="text-vintage-brown hover:text-vintage-copper transition-colors">
                        info@oldtimerfreunde-forst.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-vintage-copper" />
                    <div>
                      <span className="font-semibold">Telefon: </span>
                      <a href="tel:+493562123456" className="text-vintage-brown hover:text-vintage-copper transition-colors">
                        +49 (0) 176 45850204
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verantwortlich für den Inhalt */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Verantwortlich für den Inhalt
                </h2>
                <div className="text-vintage-copper">
                  <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                    Der Vorstand der Oldtimerfreunde Forst e.V.
                  </p>
                </div>
              </div>

              {/* Haftungsausschluss */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6">Haftungsausschluss</h2>
                <div className="space-y-6 text-vintage-copper">
                  
                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Haftung für Inhalte</h3>
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                      nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                      Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                      fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                      rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Haftung für Links</h3>
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                      Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                      Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Urheberrecht</h3>
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                      dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                      der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                      Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>

                </div>
              </div>

              {/* Online-Streitbeilegung */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6">Online-Streitbeilegung</h2>
                <div className="text-vintage-copper">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                       className="text-vintage-brown hover:text-vintage-copper transition-colors ml-1">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="mt-2">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              {/* Update Notice */}
              <div className="bg-vintage-cream/50 rounded-lg p-6">
                <p className="text-vintage-brown text-sm">
                  <strong>Hinweis:</strong> Stand: November 2024. Dieses Impressum wird nach der 
                  Vorstandswahl und Vereinsregistrierung entsprechend aktualisiert.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Impressum;
