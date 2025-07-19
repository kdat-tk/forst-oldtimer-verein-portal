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
                
                {/* §1 Name, Sitz, Geschäftsjahr  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§1 Name, Sitz, Geschäftsjahr </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der gegründete Verein führt den Namen „Oldtimerfreunde Forst e. V.“</p>
                    <p>(2) Er hat seinen Sitz in 76694 Forst und soll in das Vereinsregister eingetragen werden</p>
                    <p>(3) Das Geschäftsjahr des Vereins ist das Kalenderjahr</p>
                    <p>(4) Der Verein ist politisch und religiös neutral. Er verfolgt ausschließlich und unmittelbar</p>
                    <p>gemeinnützige Zwecke im Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der</p>
                    <p>Abgabenordnung</p>
                  </div>
                </article>

                {/* §2 Zweck des Vereins  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§2 Zweck des Vereins </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>Zweck des Vereins ist die Förderung der Erhaltung und Pflege historischer Fahrzeuge wie</p>
                    <p>Traktoren, Landmaschinen, Autos und Motorräder sowie die Bewahrung des traditionellen</p>
                    <p>Brauchtums und der technischen Kultur. Der Verein engagiert sich in der Bildung und</p>
                    <p>Weiterbildung seiner Mitglieder und der interessierten Öffentlichkeit durch</p>
                    <p>Informationsveranstaltungen, Vorführungen und Ausstellungen. Er fördert die Gemeinschaft</p>
                    <p>und das soziale Miteinander durch regelmäßige Treffen und Ausfahrten und setzt sich für die</p>
                    <p>Jugendarbeit und Nachwuchsförderung ein. Darüber hinaus betreibt der Verein aktive</p>
                    <p>Öffentlichkeitsarbeit, um seine Ziele und Aktivitäten bekannt zu machen und das Interesse</p>
                    <p>an historischen Fahrzeugen zu fördern.</p>
                  </div>
                </article>

                {/* §3 Gemeinnützigkeit  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§3 Gemeinnützigkeit </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke</p>
                    <p>(2) Mittel des Vereins dürfen nur für die satzungsgemäßen Zwecke verwendet werden. Die</p>
                    <p>Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins</p>
                    <p>(3) Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder</p>
                    <p>durch unverhältnismäßig hohe Vergütungen begünstigt werden</p>
                    <p>(4) Bei Auflösung des Vereins/Wegfall steuerbegünstigter Zwecke fällt sein verbleibendes</p>
                    <p>Vermögen an die Gemeinde Forst, die es unmittelbar und ausschließlich für</p>
                    <p>steuerbegünstigte gemeinnützige Zwecke zu verwenden hat, und zwar zugunsten der</p>
                    <p>Kindergärten in Forst zu gleichen Teilen</p>
                  </div>
                </article>

                /* §4 Mitgliedschaft  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§4 Mitgliedschaft </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Mitglied des Vereins können sowohl natürliche als auch juristische Personen des</p>
                    <p>öffentlichen und privaten Rechts werden, die den Vereinszweck unterstützen oder den</p>
                    <p>Zielen des Vereins zustimmen</p>
                    <p>(2) Die Aufnahme in den Verein muss schriftlich beantragt werden. Über den</p>
                    <p>Aufnahmeantrag entscheidet der Vorstand mit einfacher Stimmenmehrheit. Lehnt der</p>
                    <p>Vorstand die Aufnahme ab, so kann der Antragsteller hiergegen Berufung einlegen.</p>
                    <p>Über diese ist in der nächsten Versammlung des Gesamtvorstands zu entscheiden. Diese</p>
                    <p>Entscheidung ist mit einfacher Stimmenmehrheit endgültig</p>
                    <p>(3) Unter 18 Jahren besteht keine Beitragspflicht</p>
                    <p>(4) Ebenso sind Ehepartner bzw. Lebensgefährten von beitragspflichtigen Mitgliedern vom</p>
                    <p>Beitrag befreit</p>
                    <p>–	Seite	2	von	5	–</p>
                    <p>(5) Der Vorstand des Vereins kann verdiente Mitglieder zu Ehrenmitgliedern ernennen. Der</p>
                    <p>Vorstandsbeschluss muss mit einer Mehrheit von 3/4 aller Vorstandsmitglieder gefasst</p>
                    <p>werden. Das Ehrenmitglied ist vom Vereinsbeitrag zu befreien</p>
                    <p>(6) Die Mitgliedschaft endet</p>
                    <p>a. durch Kündigung der Mitgliedschaft. Eine Kündigung ist mit einer Frist von drei</p>
                    <p>Monaten zum Ende des Geschäftsjahres möglich. Die Kündigung ist schriftlich</p>
                    <p>gegenüber einem Vorstandsmitglied des Vereins zu erklären</p>
                    <p>b. durch Ausschluss</p>
                    <p>c.</p>
                    <p>durch Tod</p>
                    <p>(7) Der Ausschluss kann erfolgen, wenn</p>
                    <p>a. ein Mitglied dem Zweck und dem Ziel oder den Beschlüssen des Vereins in grober</p>
                    <p>Weise zuwiderhandelt</p>
                    <p>b. ein Mitglied sich einer unehrenhaften Handlung oder eines der Gemeinschaft</p>
                    <p>schädigenden Verhaltens schuldig macht oder</p>
                    <p>c.</p>
                    <p>ein Mitglied mit seiner Beitragszahlung trotz schriftlicher Mahnung im Verzug ist</p>
                    <p>(8) Der Ausschluss erfolgt durch den Vorstand und ist dem Betroffenen unter Angabe der</p>
                    <p>Gründe schriftlich mitzuteilen. Gegen diesen Beschluss kann der Betroffene binnen</p>
                    <p>eines Monats beim Vorstand schriftlich Beschwerde einlegen. Über diese Beschwerde</p>
                    <p>entscheidet endgültig die nächste ordentliche oder außerordentliche</p>
                    <p>Mitgliederversammlung</p>
                  </div>
                </article>

                {/* §5 Beitragspflicht  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§5 Beitragspflicht </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Verein erhebt zur Bestreitung seiner Auslagen Beiträge, deren Höhe und</p>
                    <p>Zahlungsweise von der Mitgliederversammlung festgelegt werden</p>
                    <p>(2) Weiterhin hat die Mitgliederversammlung die Möglichkeit, eine Aufnahmegebühr</p>
                    <p>festzulegen, die einmalig bei Aufnahme in den Verein zu entrichten ist</p>
                    <p>(3) Die Aufnahme eines Mitglieds in den Verein ist von der Zahlung des ersten</p>
                    <p>Vereinsbeitrages und ggf. der Aufnahmegebühr abhängig</p>
                    <p>(4) Erfüllungsort für sämtliche Verpflichtungen der Mitglieder gegenüber dem Verein ist der</p>
                    <p>Sitz des Vereins</p>
                  </div>
                </article>

                {/* §6 Organe des Vereins  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§6 Organe des Vereins </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Organe des Vereins sind:</p>
                    <p>a. der Vorstand</p>
                    <p>b. die Mitgliederversammlung</p>
                    <p>c. die Rechnungsprüfer</p>
                  </div>
                </article>

                {/* §7 Der Vorstand  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§7 Der Vorstand </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Vorstand besteht aus:</p>
                    <p>a. dem ersten Vorsitzenden</p>
                    <p>b. dem 1. stellvertretenden Vorsitzenden</p>
                    <p>–	Seite	3	von	5	–</p>
                    <p>c. dem 2. Stellvertretenden Vorsitzenden</p>
                    <p>d. dem Schriftführer</p>
                    <p>e. dem stellvertretenden Schriftführer</p>
                    <p>f. dem Kassier</p>
                    <p>g. dem stellvertretenden Kassier</p>
                    <p>(2) Die Zusammenlegung von Vorstandsämtern ist zulässig, soweit es sich nicht um die</p>
                    <p>gesetzlichen Vertreter nach § 26 BGB handelt</p>
                    <p>(3) Der Vorstand wird in der Mitgliederversammlung gewählt. Die Amtsdauer beträgt 2</p>
                    <p>Jahre. Bei der ersten ordentlichen Mitgliederversammlung nach Gründung des Vereins</p>
                    <p>haben sich ausnahmsweise alle Mitglieder des Vorstandes zur Wiederwahl zu stellen.</p>
                    <p>Danach wird in jedem Kalenderjahr mit gerader Jahreszahl erstmals die unter Ziffer 1</p>
                    <p>Buchstabe b, d und g, bei ungerader Jahreszahl die unter Ziffer 1 Buchstabe a, c, e und f</p>
                    <p>aufgeführten Vorstandsmitglieder gewählt. Eine Wiederwahl von Vorstandsmitgliedern</p>
                    <p>ist zulässig</p>
                    <p>(4) Der Vorstand vertritt den Verein in allen Angelegenheiten nach den Beschlüssen und</p>
                    <p>Weisungen der Mitgliederversammlung und unter Einhaltung der Vereinssatzung. Bei</p>
                    <p>Stimmengleichheit entscheidet die Stimme des ersten Vorsitzenden</p>
                    <p>(5) Gesetzliche Vertreter des Vereins im Sinne des § 26 BGB sind der erste Vorsitzende, der</p>
                    <p>1. stellvertretende Vorsitzende und der Kassier, wobei jeweils zwei dieser</p>
                    <p>Vorstandsmitglieder zusammen vertretungsberechtigt sind</p>
                    <p>(6) Alle Vorstandsämter sind Ehrenämter</p>
                    <p>(7) Über Vorstandssitzungen ist vom Schriftführer oder bei dessen Verhinderung von einem</p>
                    <p>Vorstandsmitglied Protokoll zu führen und das Protokoll vom Protokollführer sowie vom</p>
                    <p>ersten Vorsitzenden, von einem stellvertretenden Vorsitzenden oder vom Kassier zu</p>
                    <p>unterzeichnen</p>
                  </div>
                </article>

                {/* §8 Mitgliederversammlung  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§8 Mitgliederversammlung </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Die Mitgliederversammlung ist das oberste Organ des Vereins, und wird durch den 1.</p>
                    <p>Vorstand geleitet, bei dessen Verhinderung vom 1. stellvertretenden Vorstand oder</p>
                    <p>Kassenwart</p>
                    <p>(2) Die ordentliche Mitgliederversammlung hat jährlich einmal im 1. Quartal des Jahres</p>
                    <p>stattzufinden</p>
                    <p>(3) Die Einladung zur ordentlichen Mitgliederversammlung hat schriftlich (z.B. auch per E-</p>
                    <p>Mail, Aushang oder Veröffentlichung im Ortsblatt) und mindestens zwei Wochen vor der</p>
                    <p>Versammlung zu erfolgen</p>
                    <p>(4) Die Tagesordnung der ordentlichen Mitgliederversammlung muss mindestens die</p>
                    <p>folgenden Punkte enthalten:</p>
                    <p>a.        Feststellung der Stimmlisten</p>
                    <p>b.        Bericht des ersten Vorsitzenden über das abgelaufene Geschäftsjahr</p>
                    <p>c.        Bericht des Kassiers</p>
                    <p>d.        Bericht der Rechnungsprüfer</p>
                    <p>e.        Entlastung des Vorstandes</p>
                    <p>f.        Wahlen</p>
                    <p>g.        Anträge</p>
                    <p>h.        Verschiedenes</p>
                    <p>–	Seite	4	von	5	–</p>
                    <p>(5) In der Mitgliederversammlung hat jedes anwesende Mitglied (natürliche Person oder</p>
                    <p>vertretene juristische Person) 1 Stimme. Stimmübertragungen sind unzulässig</p>
                    <p>(6) Die Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder</p>
                    <p>beschlussfähig</p>
                    <p>(7) Die Mitgliederversammlung entscheidet regelmäßig mit einfacher Mehrheit der</p>
                    <p>anwesenden Mitglieder. Stimmengleichheit gilt als Ablehnung. Eine Stimmenmehrheit</p>
                    <p>von 3/4 der anwesenden Mitglieder ist erforderlich bei Beschlüssen über:</p>
                    <p>a. Satzungsänderungen</p>
                    <p>b. Dringlichkeitsanträge – hiermit können Mitglieder auf aktuelle Geschehnisse der</p>
                    <p>Tagesordnung reagieren. Er ermöglicht dem Mitglied, auch nach Einladung mit</p>
                    <p>Zusendung der Tagesordnung einen Antrag einzureichen, mit dem Vermerk, er sei</p>
                    <p>„dringend“ und „bedürfe besonderer Eile“, weshalb man nicht bis zur nächsten</p>
                    <p>regulären Mitgliederversammlung warten könne. Über eingegangene</p>
                    <p>Dringlichkeitsanträge muss die Mitgliederversammlung zu Beginn der</p>
                    <p>Versammlung entscheiden. Stimmt eine entsprechende Mehrheit der</p>
                    <p>Dringlichkeit zu, so ist die Versammlung verpflichtet, den Antrag sofort zu</p>
                    <p>behandeln. Kommt die Mehrheit nicht zustande, so wird der Antrag zur Beratung</p>
                    <p>auf die Tagesordnung der nächsten Versammlung gesetzt</p>
                    <p>(8) Die Wahlen können in geheimer Abstimmung oder durch Akklamation erfolgen.</p>
                    <p>Geheime Abstimmung muss erfolgen, wenn 1/4 der anwesenden Mitglieder eine solche</p>
                    <p>durch Akklamation verlangt</p>
                    <p>(9) Anträge zur Mitgliederversammlung können von jedem Mitglied schriftlich gestellt</p>
                    <p>werden. Anträge müssen mindestens 8 Tage vor der Mitgliederversammlung beim</p>
                    <p>ersten Vorsitzenden eingegangen sein</p>
                    <p>(10) Außerordentliche Mitgliederversammlungen sind vom Vorstand einzuberufen, wenn</p>
                    <p>a. der Vorstand dies für notwendig erachtet</p>
                    <p>b. ein Drittel aller Mitglieder dies schriftlich begehrt</p>
                    <p>(11) Über Verhandlungen und Beschlüsse der Mitgliederversammlung ist durch den</p>
                    <p>Schriftführer oder im Falle dessen Verhinderung durch ein Vorstandsmitglied Protokoll</p>
                    <p>zu führen und das Protokoll vom Protokollführer sowie vom ersten Vorsitzenden, vom</p>
                    <p>stellvertretenden Vorsitzenden oder vom Kassier zeitnah zu unterzeichnen.</p>
                  </div>
                </article>

                {/* §9 Rechnungsprüfer  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§9 Rechnungsprüfer </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Der Verein hat 2 Rechnungsprüfer</p>
                    <p>(2) Die Rechnungsprüfer werden durch die Mitgliederversammlung auf die Dauer von 1 Jahr</p>
                    <p>gewählt. Eine Wiederwahl ist zulässig</p>
                    <p>(3) Die Rechnungsprüfer haben mindestens einmal im Jahr vor der Hauptversammlung</p>
                    <p>Buchführung und Kasse zu prüfen und der Mitgliederversammlung Bericht zu erstatten</p>
                    <p>(4) Die Rechnungsprüfer dürfen kein Amt im Vorstand begleiten</p>
                  </div>
                </article>

                {/* §10 Auflösung des Vereins  */}
                <article>
                  <h3 className="text-xl font-semibold text-vintage-brown mb-4">§10 Auflösung des Vereins </h3>
                  <div className="space-y-3 text-vintage-copper">
                    <p>(1) Die Auflösung des Vereins kann nur in einer eigens zu diesem Zweck einberufenen</p>
                    <p>Mitgliederversammlung mit 3/4 Stimmenmehrheit der anwesenden Mitglieder erfolgen</p>
                    <p>(2) Im Falle der Auflösung ernennt die Mitgliederversammlung die Liquidatoren</p>
                    <p>–	Seite	5	von	5	–</p>
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
                      Gegründet am 10. November 2024 in Forst (Baden)
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
