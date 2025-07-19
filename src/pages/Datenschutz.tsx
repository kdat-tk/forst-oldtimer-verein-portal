import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Database, UserCheck, Mail } from 'lucide-react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-vintage-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-vintage rounded-full flex items-center justify-center shadow-vintage">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-vintage-brown mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-vintage-copper">
              Informationen zum Umgang mit Ihren personenbezogenen Daten
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-card-vintage p-8 md:p-12">
              
              {/* Einleitung */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3" />
                  Allgemeine Hinweise
                </h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                    Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, 
                    mit denen Sie persönlich identifiziert werden können.
                  </p>
                  <p>
                    Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
                    aufgeführten Datenschutzerklärung.
                  </p>
                </div>
              </div>

              {/* Datenerfassung */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3" />
                  Datenerfassung auf unserer Website
                </h2>
                <div className="space-y-6 text-vintage-copper">
                  
                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                      Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Wie erfassen wir Ihre Daten?</h3>
                    <p>
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                      z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="mt-2">
                      Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
                      Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Wofür nutzen wir Ihre Daten?</h3>
                    <p>
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                      Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                  </div>

                </div>
              </div>

              {/* Rechte */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <UserCheck className="w-6 h-6 mr-3" />
                  Ihre Rechte
                </h2>
                <div className="space-y-6 text-vintage-copper">
                  
                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                    <p>
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                      Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                      die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-vintage-brown mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                    <p>
                      Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei 
                      der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen 
                      Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes Brandenburg.
                    </p>
                  </div>

                </div>
              </div>

              {/* Server-Log-Dateien */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3" />
                  Server-Log-Dateien
                </h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="mt-4">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
              </div>

              {/* Kontaktformular */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6 flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  Kontaktformular
                </h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <p>
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das 
                    Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer 
                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                  <p>
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur 
                    Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die 
                    Datenspeicherung entfällt.
                  </p>
                </div>
              </div>

              {/* E-Mail-Verkehr */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6">Anfrage per E-Mail, Telefon oder Telefax</h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller 
                    daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres 
                    Anliegens bei uns gespeichert und verarbeitet.
                  </p>
                  <p>
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt 
                    auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags 
                    zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                </div>
              </div>

              {/* SSL-Verschlüsselung */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6">SSL- bzw. TLS-Verschlüsselung</h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                    wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                    SSL-bzw. TLS-Verschlüsselung.
                  </p>
                  <p>
                    Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
                    "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </div>
              </div>

              {/* Auskunft, Sperrung, Löschung */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6">Auskunft, Sperrung, Löschung</h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                    Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
                    Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                  </p>
                  <p>
                    Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter 
                    der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
              </div>

              {/* Widerspruchsrecht */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-vintage-brown mb-6">Recht auf Datenübertragbarkeit</h2>
                <div className="space-y-4 text-vintage-copper">
                  <p>
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines 
                    Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren 
                    Format aushändigen zu lassen.
                  </p>
                  <p>
                    Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt 
                    dies nur, soweit es technisch machbar ist.
                  </p>
                </div>
              </div>

              {/* Update Notice */}
              <div className="bg-vintage-cream/50 rounded-lg p-6">
                <p className="text-vintage-brown text-sm">
                  <strong>Stand:</strong> November 2024<br />
                  Diese Datenschutzerklärung kann jederzeit angepasst werden, um aktuellen rechtlichen 
                  Anforderungen zu entsprechen oder um Änderungen unserer Leistungen umzusetzen.
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

export default Datenschutz;