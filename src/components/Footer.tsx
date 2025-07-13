import { Car, Mail, Phone, MapPin, Calendar, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Fahrzeuge', href: '#vehicles' },
    { name: 'Bierschankwagen', href: '#rental' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'info@oldtimerfreunde-forst.de',
      href: 'mailto:info@oldtimerfreunde-forst.de'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+49 (0) 3562 123456',
      href: 'tel:+493562123456'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Vereinsheim Forst, 03222 Lübbenau',
      href: '#'
    }
  ];

  return (
    <footer className="bg-vintage-brown text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-vintage rounded-lg flex items-center justify-center shadow-vintage">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Oldtimerfreunde Forst</h3>
                <p className="text-vintage-gold">Seit 2024</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Wir sind ein Verein für Liebhaber klassischer Automobile. Bei uns steht die 
              Gemeinschaft und die Leidenschaft für historische Fahrzeuge im Mittelpunkt.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-brown transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-vintage-gold hover:text-vintage-brown transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-vintage-gold">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-vintage-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-vintage-gold">Kontakt</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="flex items-start space-x-3 text-white/80 hover:text-vintage-gold transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-vintage-gold">{item.label}</div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Membership CTA */}
        <div className="bg-gradient-vintage rounded-lg p-6 mb-8 text-center">
          <h4 className="text-xl font-bold mb-2">Werden Sie Mitglied!</h4>
          <p className="text-white/90 mb-4">
            Schließen Sie sich unserer Gemeinschaft von Oldtimer-Enthusiasten an.
          </p>
          <a 
            href="mailto:info@oldtimerfreunde-forst.de"
            className="inline-block bg-white text-vintage-copper px-6 py-3 rounded-lg font-medium hover:bg-vintage-cream transition-colors"
          >
            <Mail className="w-4 h-4 mr-2 inline" />
            Mitgliedschaft anfragen
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Oldtimerfreunde Forst e.V. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-vintage-gold transition-colors">Impressum</a>
              <a href="#" className="hover:text-vintage-gold transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-vintage-gold transition-colors">Vereinssatzung</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;