import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { parse, isAfter } from 'date-fns';
import { de } from 'date-fns/locale';

import EventImageCarousel from '@/components/EventImageCarousel';

const Events = () => {
  const upcomingEvents = [
    {
      id: 3,
      title: 'Stammtisch',
      date: '01. August 2025',
      time: 'ab 17:30 Uhr',
      location: 'Henninger Stuben Forst',
      description: 'Wöchtentlicher Stammtisch zum Erfahrungsaustausch unter Mitgliedern.',
      attendees: 99,
      type: 'Treffen'
    },
    {
      id: 4,
      title: 'Sommerfest',
      date: '15. August 2025',
      time: 'ab 17:30 Uhr',
      location: 'Siehe Mitgliederchat',
      description: 'Zu unserem Sommerfest laden wir alle Mitglieder zu einem gemütlichen Abend bei Speiß und Trank ein.',
      attendees: 99,
      type: 'Treffen'
    },
    {
      id: 5,
      title: 'HAKO-Rennen',
      date: '6. September 2025',
      time: 'ganztägig',
      location: 'Reiterplatz Weiher',
      description: 'Ausschank lokaler Bierspezialitäten.',
      attendees: 999,
      type: 'Veranstaltung'
    },
    {
      id: 6,
      title: 'Adventszauber',
      date: '29. November 2025',
      time: 'ab 14:00 Uhr',
      location: 'Platz am Hasenbrunnen',
      description: 'Wir servieren wieder Glühwein, Winterbier, Chili con Carne und weitere Leckereien.',
      attendees: 400,
      type: 'Veranstaltung'
    },
  ];

  const today = new Date();

  // Filtere nur Events, deren Datum in der Zukunft liegt
  const futureEvents = upcomingEvents.filter(event => {
    const eventDate = parse(event.date, 'dd. MMMM yyyy', new Date(), { locale: de });
    return isAfter(eventDate, today);
  });

  const pastEvents = [
    {
      id: 1,
      title: 'Vereinsgründung',
      date: '10. November 2024',
      description: 'Offizielle Gründung der Oldtimerfreunde Forst mit 9 Gründungsmitgliedern.',
      attendees: 9,
      highlight: true
    },
    {
      id: 2,
      title: 'Erste Jahreshauptversammlung',
      date: '28. März 2025',
      description: 'Planung der nächsten gemeinsamen Aktivitäten und Festlegung der Vereinsziele.',
      attendees: 8
    },
    {
      id: 3,
      title: 'Oldtimerausstellung',
      date: '20. Juli 2025',
      description: 'Im Rahmen der Forster Kirmes haben wir unsere Oldtimerfahrzeuge der Öffentlichkeit präsentiert und großes Interesse geweckt. Zahlreiche Besucher nutzten die Gelegenheit, die historischen Fahrzeuge aus nächster Nähe zu bestaunen. An unserem Infostand informierten wir über die Aktivitäten des Vereins und führten viele spannende Gespräche mit interessierten Forster Bürgerinnen und Bürgern.',
      attendees: 100,
      images: [
        "/images/events/2025-kirmes/oldtimerausstellung-1.jpg",
        "/images/events/2025-kirmes/oldtimerausstellung-2.jpg"
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Treffen': return 'bg-vintage-copper text-white';
      case 'Ausfahrt': return 'bg-vintage-gold text-vintage-brown';
      case 'Veranstaltung': return 'bg-vintage-leather text-white';
      default: return 'bg-vintage-copper text-white';
    }
  };


  return (
    <section id="events" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-vintage-brown mb-6">
            Events & Termine
          </h2>
          <p className="text-xl text-vintage-leather max-w-2xl mx-auto">
            Entdecken Sie unsere kommenden Veranstaltungen und blicken Sie zurück auf unsere bisherigen Aktivitäten.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-vintage-brown mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-vintage-copper" />
            Kommende Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureEvents.map((event) => (
              <Card key={event.id} className="bg-gradient-card border-vintage-copper/20 shadow-card-vintage hover:shadow-vintage transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-vintage-brown group-hover:text-vintage-copper transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-vintage-leather">
                      <Calendar className="w-4 h-4 mr-2 text-vintage-copper" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-vintage-leather">
                      <Clock className="w-4 h-4 mr-2 text-vintage-copper" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-vintage-leather">
                      <MapPin className="w-4 h-4 mr-2 text-vintage-copper" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {event.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Mehr Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-vintage-brown mb-8 flex items-center">
            <Clock className="w-6 h-6 mr-3 text-vintage-copper" />
            Vergangene Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className={`bg-gradient-card border-vintage-copper/20 shadow-card-vintage ${event.highlight ? 'ring-2 ring-vintage-gold/50' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-vintage-brown">
                      {event.title}
                      {event.highlight && (
                        <Badge className="ml-2 bg-vintage-gold text-vintage-brown">
                          Meilenstein
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="text-right text-sm text-vintage-leather">
                      <div>{event.date}</div>
                      <div className="flex items-center mt-1">
                        <Users className="w-4 h-4 mr-1" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Bild-Carousel, wenn Bilder vorhanden sind */}
                  {event.images && event.images.length > 0 && (
                    <EventImageCarousel images={event.images} />
                  )}
                
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
