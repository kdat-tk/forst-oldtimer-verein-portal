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
                  Die Oldtimerfreunde Forst e.V. sind ein gemeinnütziger Verein, der sich der Pflege und 
                  Erhaltung historischer Kraftfahrzeuge sowie der Förderung der Gemeinschaft unter 
                  Oldtimer-Enthusiasten widmet.
                </p>
              </div>

              {/* Satzung Content */}
              <div className="space-y-10">
                
                {/* § 1 Name und Sitz */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 1 Name und Sitz</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Verein führt den Namen "Oldtimerfreunde Forst".</p>
                    <p>(2) Er soll in das Vereinsregister eingetragen werden und trägt dann den Zusatz "e.V."</p>
                    <p>(3) Der Sitz des Vereins ist Forst (Lausitz).</p>
                  </div>
                </article>

                {/* § 2 Geschäftsjahr */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 2 Geschäftsjahr</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>Das Geschäftsjahr ist das Kalenderjahr.</p>
                  </div>
                </article>

                {/* § 3 Zweck des Vereins */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 3 Zweck des Vereins</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts "Steuerbegünstigte Zwecke" der Abgabenordnung.</p>
                    <p>(2) Zweck des Vereins ist:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Die Förderung der Wissenschaft und Forschung auf dem Gebiet historischer Kraftfahrzeuge</li>
                      <li>Die Förderung der Bildung und Erziehung im Bereich Oldtimertechnik</li>
                      <li>Die Förderung des Umweltschutzes durch sachgerechte Restaurierung und Erhaltung historischer Fahrzeuge</li>
                      <li>Die Förderung der Völkerverständigung durch internationale Oldtimer-Veranstaltungen</li>
                    </ul>
                  </div>
                </article>

                {/* § 4 Selbstlosigkeit */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 4 Selbstlosigkeit</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.</p>
                    <p>(2) Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden.</p>
                    <p>(3) Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins.</p>
                  </div>
                </article>

                {/* § 5 Mitgliedschaft */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 5 Mitgliedschaft</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Mitglied des Vereins kann jede natürliche Person werden, die sich mit den Zielen des Vereins verbunden fühlt.</p>
                    <p>(2) Über den Antrag auf Aufnahme in den Verein entscheidet der Vorstand.</p>
                    <p>(3) Die Mitgliedschaft endet durch Austritt, Ausschluss oder Tod.</p>
                  </div>
                </article>

                {/* § 6 Organe des Vereins */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 6 Organe des Vereins</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>Die Organe des Vereins sind:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>die Mitgliederversammlung</li>
                      <li>der Vorstand</li>
                    </ul>
                  </div>
                </article>

                {/* § 7 Vorstand */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 7 Vorstand</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Vorstand besteht aus dem Vorsitzenden, dem stellvertretenden Vorsitzenden und dem Kassenwart.</p>
                    <p>(2) Der Verein wird gerichtlich und außergerichtlich durch den Vorsitzenden und den stellvertretenden Vorsitzenden gemeinsam vertreten.</p>
                    <p>(3) Die Vorstandsmitglieder werden von der Mitgliederversammlung für die Dauer von zwei Jahren gewählt.</p>
                  </div>
                </article>

                {/* § 8 Mitgliederversammlung */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 8 Mitgliederversammlung</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Die Mitgliederversammlung ist das oberste Vereinsorgan.</p>
                    <p>(2) Eine ordentliche Mitgliederversammlung findet jährlich statt.</p>
                    <p>(3) Außerordentliche Mitgliederversammlungen können vom Vorstand oder auf Verlangen von mindestens einem Drittel der Mitglieder einberufen werden.</p>
                  </div>
                </article>

                {/* § 9 Satzungsänderung */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 9 Satzungsänderung</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Zur Änderung der Satzung ist eine Mehrheit von zwei Dritteln der erschienenen Mitglieder erforderlich.</p>
                    <p>(2) Über Satzungsänderungen kann nur abgestimmt werden, wenn sie ordnungsgemäß in der Tagesordnung angekündigt wurden.</p>
                  </div>
                </article>

                {/* § 10 Vereinsauflösung */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§ 10 Vereinsauflösung</h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Zur Auflösung des Vereins ist eine Mehrheit von drei Vierteln der erschienenen Mitglieder erforderlich.</p>
                    <p>(2) Bei Auflösung oder Aufhebung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des Vereins an eine juristische Person des öffentlichen Rechts oder eine andere steuerbegünstigte Körperschaft zwecks Verwendung für die Förderung der Bildung.</p>
                  </div>
                </article>

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