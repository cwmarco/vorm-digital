import { LiquidGradient } from "@/components/ui/liquid-gradient";
import { SiteFooter } from "@/components/site-footer";
import { HeroHeadline } from "@/components/hero-headline";
import Image from "next/image";
import {
  MagnifyingGlass,
  Desktop,
  InstagramLogo,
  GoogleLogo,
  ChartLine,
  EnvelopeSimple,
  Star,
  Users,
  Target,
  PresentationChart,
} from "@phosphor-icons/react/dist/ssr";

const servicePills = [
  { icon: MagnifyingGlass, label: "SEO" },
  { icon: Desktop, label: "Website" },
  { icon: InstagramLogo, label: "Instagram" },
  { icon: GoogleLogo, label: "Google Ads" },
  { icon: ChartLine, label: "Berichte" },
  { icon: EnvelopeSimple, label: "E-Mail-Kampagnen" },
  { icon: Star, label: "Bewertungen" },
  { icon: Users, label: "Mitarbeitergewinnung" },
];

const approachCards = [
  {
    icon: Target,
    title: "Fundament zuerst",
    description:
      "Wenn Angebot und Positionierung schwächeln, hilft auch die beste Kampagne nicht viel. Wir richten Website, Botschaften und Kanäle aufeinander aus — bevor Budget reingeht.",
    bg: "bg-[#2B4E46]",
    text: "text-[#F8F9F2]",
    body: "text-[#A8D0DB]",
    iconColor: "text-[#F8F9F2]/80",
  },
  {
    icon: ChartLine,
    title: "Zahlen, die Sie verstehen",
    description:
      "Budget, laufende Kampagnen, Anfragen — Sie sehen den Stand jederzeit, ohne Reports anfordern zu müssen. Kein Black Box Marketing.",
    bg: "bg-[#A8D0DB]",
    text: "text-[#1A2E35]",
    body: "text-[#2C4A52]",
    iconColor: "text-[#1A2E35]",
  },
  {
    icon: PresentationChart,
    title: "Einordnung statt Datenflut",
    description:
      "Google Analytics allein hilft wenig. Wir sagen Ihnen monatlich, welche Kennzahlen für Ihr Geschäft zählen — und was wir als Nächstes tun.",
    bg: "bg-[#E8ECD6]",
    text: "text-[#1A2E35]",
    body: "text-[#2C4A52]",
    iconColor: "text-[#1A2E35]",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-[#3D5A56] mb-4 uppercase tracking-widest font-[family-name:var(--font-fraunces)]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9F2]">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col">
        <LiquidGradient className="absolute inset-0 w-full h-full">
          <div className="flex flex-col items-center justify-center min-h-[85vh] px-8 text-center font-[family-name:var(--font-fraunces)]">
            <div className="flex items-center gap-[8px] mb-10">
              <Image
                src="/logo.svg"
                alt="vorm.digital"
                width={44}
                height={44}
                className="-translate-y-[4px]"
              />
              <span className="text-[36px] tracking-[-0.01em] text-[#1A2E35]">Vorm</span>
            </div>
            <p className="text-xs md:text-sm text-[#1A2E35] bg-[#F8F9F2]/95 border border-[#E8ECD6] px-4 py-1.5 rounded-full mb-8 tracking-wide shadow-sm">
              8+ Jahre Erfahrung · Medical &amp; Beauty
            </p>
            <HeroHeadline />
            <h2 className="text-4xl md:text-6xl tracking-tight mb-8 text-[#1A2E35] italic">
              Marketing übernehmen wir.
            </h2>
            <p className="text-lg md:text-xl text-[#2C4A52] mb-6 max-w-lg">
              Ganzheitliche digitale Lösungen aus einer Hand.
            </p>
            <p className="text-base md:text-lg text-[#1A2E35] mb-10">
              <strong>Bezahlbar.</strong> <strong>Fortschrittlich.</strong> <strong>Exklusiv.</strong>
            </p>
            <a
              href="https://cal.com/marco-ennmyq/site-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-[#1A2E35] text-[#F8F9F2] rounded-full text-sm font-medium hover:bg-[#2C4A52] transition-colors"
            >
              Termin vereinbaren
            </a>
          </div>
        </LiquidGradient>
      </section>

      {/* Service pills */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center font-[family-name:var(--font-fraunces)]">
          <SectionLabel>Leistungen</SectionLabel>
          <h2 className="text-2xl md:text-3xl text-[#1A2E35] mb-8">
            Alles, was dazugehört — von uns umgesetzt
          </h2>
          <div className="bg-[#E8ECD6] rounded-2xl p-5 md:p-6">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {servicePills.map((service) => (
                <span
                  key={service.label}
                  className="inline-flex items-center gap-2 bg-[#F8F9F2] px-4 py-2 rounded-full text-sm text-[#1A2E35] shadow-sm"
                >
                  <service.icon weight="regular" className="w-4 h-4" />
                  {service.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20 bg-[#2B4E46] relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative font-[family-name:var(--font-fraunces)]">
          <span className="inline-flex items-center bg-[#F78154]/20 text-[#F78154] text-sm px-4 py-2 rounded-full mb-6 font-medium">
            Das Problem
          </span>
          <h2 className="text-3xl md:text-4xl text-[#F8F9F2] mb-8">
            Das kann normalerweise ein Vermögen kosten.
          </h2>
          <div className="space-y-4 text-lg text-[#A8D0DB]">
            <p>
              Eine Agentur für die Website. Eine für SEO. Eine für Social Media. Eine für Ads.
              Jede will ein Retainer, jede braucht Briefings, jede hat eigene Prozesse.
            </p>
            <p>
              <strong className="text-[#F8F9F2]">Das Ergebnis:</strong> Sie koordinieren mehr,
              als Sie eigentlich führen sollten. Und am Ende passt nichts richtig zusammen.
            </p>
            <p className="text-[#F8F9F2] font-medium pt-4">
              Wir sind Ihr ein Ansprechpartner — ohne die Kosten zu vervielfachen.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto font-[family-name:var(--font-fraunces)]">
          <SectionLabel>So arbeiten wir</SectionLabel>
          <h2 className="text-2xl md:text-3xl text-[#1A2E35] mb-4 max-w-2xl">
            Weniger Koordination. Mehr Umsetzung.
          </h2>
          <p className="text-lg text-[#2C4A52] mb-12 max-w-2xl">
            Sie haben ein Unternehmen zu führen und wenig Zeit für Marketing-Meetings.
            Wir übernehmen Planung, Umsetzung und laufende Betreuung.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {approachCards.map((card) => (
              <div
                key={card.title}
                className={`${card.bg} rounded-2xl p-6 h-full`}
              >
                <card.icon
                  size={32}
                  weight="light"
                  className={`mb-4 ${card.iconColor}`}
                />
                <h3 className={`text-xl mb-3 ${card.text}`}>{card.title}</h3>
                <p className={`text-sm leading-relaxed ${card.body}`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-6 py-20 bg-gradient-to-br from-[#1A2E35] via-[#2C4A52] to-[#1A2E35] text-[#F8F9F2]">
        <div className="max-w-3xl mx-auto text-center font-[family-name:var(--font-fraunces)]">
          <h2 className="text-3xl md:text-4xl mb-6">
            Kurz sprechen, Klarheit gewinnen
          </h2>
          <p className="text-lg text-[#A8D0DB] mb-8">
            In 20 Minuten finden wir heraus, ob und wie wir Ihnen helfen können.
            Unverbindlich.
          </p>
          <a
            href="https://cal.com/marco-ennmyq/site-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#C5D86D] text-[#1A2E35] rounded-full text-lg font-medium hover:bg-[#d4e57c] transition-colors"
          >
            Erstgespräch vereinbaren
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 py-20 max-w-2xl mx-auto text-center font-[family-name:var(--font-fraunces)]">
        <SectionLabel>Kontakt</SectionLabel>
        <div className="space-y-2 text-[#2C4A52] text-sm">
          <p>
            <a
              href="mailto:hallo@vorm.digital"
              className="text-[#1A2E35] hover:underline text-base"
            >
              hallo@vorm.digital
            </a>
          </p>
          <p>VORM.DIGITAL — Marco Günder</p>
          <p>Dänenstraße 8, 10436 Berlin</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
