export type MarcoLocale = "en" | "de" | "nl";

export type MarcoSegmentCopy = {
  id: "smb" | "startup" | "established";
  navLabel: string;
  contentLabel: string;
  headline: string;
  body: string[];
};

export type MarcoCopy = {
  nav: {
    story: string;
    experience: string;
    contact: string;
    bookACall: string;
  };
  story: {
    headline: string;
    intro: [string, string, string];
    questionsLead: string;
    questions: [string, string, string, string, string];
    execution: string;
    tagline: string;
    myStoryTitle: string;
    myStory: [string, string, string, string];
    vormLinkBefore: string;
    vormLinkAfter: string;
  };
  experience: {
    title: string;
    segments: MarcoSegmentCopy[];
  };
  contact: {
    title: string;
    bookMeeting: string;
  };
};

const enSegments: MarcoSegmentCopy[] = [
  {
    id: "smb",
    navLabel: "Small Medium Business",
    contentLabel: "Small Medium Business",
    headline: "All channels, one partner.",
    body: [
      "I help you get clear on your brand, offer, positioning, and where your marketing should actually happen.",
      "That can mean answering simple but important questions. Should you be on Instagram? Is your website clear enough? Are your reviews helping or hurting? Are people finding you on Google? What happens after someone finds you?",
      "Then I help fix it.",
      "From strategy to execution, with very little input needed from your side. I stay hands-on because I like the craft.",
      "I often work with health, beauty, aesthetic, orthodontic, longevity, and premium service businesses.",
      "Typical work includes positioning, Google and Meta ads, SEO, AI search, websites, CRM, reviews, and reporting.",
    ],
  },
  {
    id: "startup",
    navLabel: "Start-ups",
    contentLabel: "Start-ups",
    headline: "Launch fast. Learn fast.",
    body: [
      "I help build lean marketing systems that make it easier to test, measure, and scale what works.",
      "I can plug into your team, your tools, and your rhythm. Sometimes for a project. Sometimes for longer. From setting up the first channels to leading launches and improving the funnel.",
      "I like this work because you see the impact quickly.",
      "I've managed teams of up to 15 people across different markets, channels, and disciplines.",
      "I've worked across marketplaces, services, travel, medical, B2B, B2C, and EU, UK, and US markets.",
    ],
  },
  {
    id: "established",
    navLabel: "Established businesses",
    contentLabel: "Established businesses",
    headline: "Strategic projects with implementation.",
    body: [
      "I help when something important needs to move, but your team does not have the time, focus, or senior hands-on capacity to make it happen.",
      "That can be a new channel, a product launch, a growth project, a CRM improvement, a reporting setup, or an efficiency drive.",
      "I can work solo, or embedded with your team.",
      "Never just slides. Always thinking plus doing.",
    ],
  },
];

export const marcoTranslations: Record<MarcoLocale, MarcoCopy> = {
  en: {
    nav: {
      story: "Story",
      experience: "Experience",
      contact: "Contact",
      bookACall: "Book a Call",
    },
    story: {
      headline: "Your Growth & Operations Partner",
      intro: [
        "I help businesses make their marketing work better.",
        "Not with big decks or abstract strategy. With clear thinking, good systems, and the kind of execution that actually moves things forward.",
        "That usually starts with simple questions.",
      ],
      questionsLead: "",
      questions: [
        "What are you selling?",
        "Who is it for?",
        "Why should they care?",
        "Where do they find you?",
        "What happens after they do?",
      ],
      execution:
        "From there, I help turn the answers into campaigns, content, websites, CRM flows, reporting, and better customer experiences.",
      tagline:
        "Strategy through execution. Senior, practical, hands-on, and supported by smart AI systems.",
      myStoryTitle: "My Story",
      myStory: [
        "I've spent the last 15 years in marketing and CRM, mostly for products and services where trust matters.",
        "That gave me broad experience across brand, positioning, paid marketing, CRM, sales enablement, and team leadership.",
        "I like working close to the real business. The data, the customers, the sales conversations, the operations, and the people delivering the service.",
        "I'm best when there is something important to figure out, build, launch, or fix.",
      ],
      vormLinkBefore: "Today I run ",
      vormLinkAfter:
        ", a small agency for health, beauty, and premium service businesses. I also take on selected freelance consultancy projects.",
    },
    experience: {
      title: "How I Fit In",
      segments: enSegments,
    },
    contact: {
      title: "Contact",
      bookMeeting: "Book Meeting",
    },
  },
  de: {
    nav: {
      story: "Story",
      experience: "Erfahrung",
      contact: "Kontakt",
      bookACall: "Termin buchen",
    },
    story: {
      headline: "Partner für Wachstum und Operations",
      intro: [
        "Ich helfe Unternehmen, ihr Marketing besser zum Laufen zu bringen.",
        "Nicht mit großen Präsentationen oder abstrakter Strategie. Sondern mit klarem Denken, guten Systemen und Umsetzung, die wirklich etwas bewegt.",
        "Meistens beginnt das mit einfachen Fragen.",
      ],
      questionsLead: "",
      questions: [
        "Was wird verkauft?",
        "Für wen ist es?",
        "Warum sollte sich jemand dafür entscheiden?",
        "Wo finden Menschen das Angebot?",
        "Was passiert danach?",
      ],
      execution:
        "Aus den Antworten entstehen Kampagnen, Content, Websites, CRM-Flows, Reporting und bessere Kundenerlebnisse.",
      tagline:
        "Von Strategie bis Umsetzung. Senior, praktisch, hands-on und unterstützt durch smarte AI-Systeme.",
      myStoryTitle: "Meine Geschichte",
      myStory: [
        "Seit 15 Jahren arbeite ich in Marketing und CRM, vor allem für Produkte und Dienstleistungen, bei denen Vertrauen wichtig ist.",
        "In dieser Zeit habe ich breite Erfahrung aufgebaut: Marke, Positionierung, Paid Marketing, CRM, Websites, Sales Enablement, Offline-Marketing und Teamführung.",
        "Die beste Arbeit entsteht nah am echten Geschäft. An den Daten, den Kunden, den Sales-Gesprächen, der operativen Realität und den Menschen, die die Leistung erbringen.",
        "Am besten bin ich, wenn etwas Wichtiges geklärt, gebaut, gelauncht oder gelöst werden muss.",
      ],
      vormLinkBefore: "Heute führe ich ",
      vormLinkAfter:
        ", eine kleine Agentur für Health, Beauty und Premium-Dienstleister. Zusätzlich übernehme ich ausgewählte Freelance-Consulting-Projekte.",
    },
    experience: {
      title: "So arbeite ich",
      segments: [
        {
          id: "smb",
          navLabel: "Small und Medium Business",
          contentLabel: "Small und Medium Business",
          headline: "Alle Kanäle, ein Partner.",
          body: [
            "Zuerst Klarheit über Marke, Angebot, Positionierung und darüber, wo Marketing wirklich stattfinden sollte.",
            "Oft geht es um einfache, aber wichtige Fragen. Instagram oder nicht? Ist die Website klar genug? Helfen die Bewertungen oder stehen sie im Weg? Wird das Unternehmen über Google gefunden? Was passiert, wenn jemand das Unternehmen findet?",
            "Dann wird es gelöst.",
            "Von Strategie bis Umsetzung, mit wenig Input aus der Organisation. Hands-on, weil ich das Handwerk mag.",
            "Häufig für Health, Beauty, Ästhetik, Kieferorthopädie, Longevity und Premium-Dienstleister.",
            "Typische Arbeit: Positionierung, Google- und Meta-Ads, SEO, AI Search, Websites, CRM, Bewertungen und Reporting.",
          ],
        },
        {
          id: "startup",
          navLabel: "Start-ups",
          contentLabel: "Start-ups",
          headline: "Schnell launchen. Schnell lernen.",
          body: [
            "Lean Marketing-Systeme, mit denen sich einfacher testen, messen und skalieren lässt, was funktioniert.",
            "Anschlussfähig an Team, Tools und Arbeitsweise. Manchmal projektbasiert, manchmal länger. Von den ersten Kanälen bis zu Launches und Funnel-Verbesserungen.",
            "Gute Arbeit, weil die Wirkung schnell sichtbar wird.",
            "Erfahrung mit Teams bis 15 Personen, über verschiedene Märkte, Kanäle und Disziplinen hinweg.",
            "Erfahrung in Marketplaces, Services, Travel, Medical, B2B, B2C und EU-, UK- und US-Märkten.",
          ],
        },
        {
          id: "established",
          navLabel: "Etablierte Unternehmen",
          contentLabel: "Etablierte Unternehmen",
          headline: "Strategische Projekte mit Umsetzung.",
          body: [
            "Für Momente, in denen etwas Wichtiges in Bewegung kommen muss, aber Zeit, Fokus oder seniorige Hands-on-Kapazität fehlen.",
            "Ein neuer Kanal, ein Produktlaunch, ein Wachstumsprojekt, eine CRM-Verbesserung, ein Reporting-Setup oder ein Effizienzthema.",
            "Solo oder eingebettet ins Team.",
            "Nie nur Slides. Immer Denken plus Machen.",
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      bookMeeting: "Termin buchen",
    },
  },
  nl: {
    nav: {
      story: "Verhaal",
      experience: "Ervaring",
      contact: "Contact",
      bookACall: "Plan een gesprek",
    },
    story: {
      headline: "Partner voor groei en operations",
      intro: [
        "Marketing beter laten werken.",
        "Niet met grote decks of abstracte strategie. Wel met helder denken, goede systemen en uitvoering die echt iets vooruit helpt.",
        "Meestal begint dat met simpele vragen.",
      ],
      questionsLead: "",
      questions: [
        "Wat wordt er verkocht?",
        "Voor wie is het?",
        "Waarom zou iemand ervoor kiezen?",
        "Waar vinden mensen het?",
        "Wat gebeurt er daarna?",
      ],
      execution:
        "Daarna worden de antwoorden vertaald naar campagnes, content, websites, CRM-flows, reporting en betere klantervaringen.",
      tagline:
        "Van strategie tot uitvoering. Senior, praktisch, hands-on en ondersteund door slimme AI-systemen.",
      myStoryTitle: "Mijn verhaal",
      myStory: [
        "Al 15 jaar werk ik in marketing en CRM, vooral voor producten en diensten waarbij vertrouwen belangrijk is.",
        "In die tijd heb ik brede ervaring opgebouwd in merk, positionering, paid marketing, CRM, websites, sales enablement en teamleiderschap.",
        "Het beste werk ontstaat dicht op het echte bedrijf. De data, de klanten, de salesgesprekken, de operatie en de mensen die de dienst leveren.",
        "Op mijn best wanneer er iets belangrijks uitgezocht, gebouwd, gelanceerd of opgelost moet worden.",
      ],
      vormLinkBefore: "Vandaag run ik ",
      vormLinkAfter:
        ", een klein bureau voor health, beauty en premium dienstverleners. Daarnaast neem ik geselecteerde freelance consultancy-projecten aan.",
    },
    experience: {
      title: "Hoe ik werk",
      segments: [
        {
          id: "smb",
          navLabel: "Small en medium business",
          contentLabel: "Small en medium business",
          headline: "Alle kanalen, één partner.",
          body: [
            "Eerst helderheid over merk, aanbod, positionering en waar marketing echt moet gebeuren.",
            "Dat betekent vaak simpele maar belangrijke vragen. Instagram of niet? Is de website duidelijk genoeg? Helpen reviews of zitten ze in de weg? Wordt het bedrijf gevonden via Google? Wat gebeurt er als iemand het bedrijf vindt?",
            "Daarna oplossen.",
            "Van strategie tot uitvoering, met weinig input vanuit de organisatie. Hands-on, omdat het vak mooi is.",
            "Vaak voor health, beauty, esthetiek, orthodontie, longevity en premium dienstverleners.",
            "Typisch werk: positionering, Google- en Meta-ads, SEO, AI-search, websites, CRM, reviews en reporting.",
          ],
        },
        {
          id: "startup",
          navLabel: "Start-ups",
          contentLabel: "Start-ups",
          headline: "Snel lanceren. Snel leren.",
          body: [
            "Lean marketing systemen om makkelijker te testen, meten en opschalen wat werkt.",
            "Aansluitend op team, tools en ritme. Soms projectmatig, soms langer. Van de eerste kanalen tot launches en funnelverbetering.",
            "Leuk werk, omdat de impact snel zichtbaar wordt.",
            "Ervaring met teams tot 15 mensen, over verschillende markten, kanalen en disciplines.",
            "Ervaring in marketplaces, services, travel, medical, B2B, B2C en EU-, UK- en US-markten.",
          ],
        },
        {
          id: "established",
          navLabel: "Gevestigde bedrijven",
          contentLabel: "Gevestigde bedrijven",
          headline: "Strategische projecten met implementatie.",
          body: [
            "Voor momenten waarop iets belangrijks in beweging moet komen, maar tijd, focus of senior hands-on capaciteit ontbreekt.",
            "Een nieuw kanaal, productlaunch, groeiproject, CRM-verbetering, reporting-opzet of efficiency-drive.",
            "Solo of embedded in het team.",
            "Nooit alleen slides. Altijd denken plus doen.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      bookMeeting: "Gesprek plannen",
    },
  },
};
