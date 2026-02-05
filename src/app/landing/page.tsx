"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MagnifyingGlass,
  Globe,
  InstagramLogo,
  GoogleLogo,
  ChartLine,
  EnvelopeSimple,
  Star,
  Users,
  Robot,
  Desktop,
  Clock,
  Target,
  CurrencyEur,
  PresentationChart,
} from "@phosphor-icons/react/dist/ssr";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// Checkmark icon component
function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 text-[#3D5A56] flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// X icon for excluded items
function XMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 text-[#3D5A56]/30 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// Service pills data
const services = [
  { icon: MagnifyingGlass, label: "SEO" },
  { icon: Robot, label: "ChatGPT & KI-Suche" },
  { icon: Desktop, label: "Website" },
  { icon: InstagramLogo, label: "Instagram" },
  { icon: GoogleLogo, label: "Google Ads" },
  { icon: ChartLine, label: "Berichte" },
  { icon: EnvelopeSimple, label: "Email Kampagnen" },
  { icon: Star, label: "Bewertungen" },
  { icon: Users, label: "Mitarbeitergewinnung" },
];

function ServicePills() {
  return (
    <motion.div
      className="bg-[#E8ECD6] rounded-xl md:rounded-2xl p-4 md:p-6 max-w-2xl mx-auto"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-wrap justify-center gap-2 md:gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-1.5 md:gap-2 bg-[#F8F9F2] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm text-[#1A2E35] cursor-default shadow-sm"
          >
            <service.icon weight="regular" className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{service.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// Colorful Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'lime' | 'blue' | 'coral' | 'sage';
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  const colorStyles = {
    lime: {
      bg: 'bg-[#C5D86D]/20',
      iconBg: 'bg-[#C5D86D]',
      iconText: 'text-[#1A2E35]',
    },
    blue: {
      bg: 'bg-[#A8D0DB]/30',
      iconBg: 'bg-[#A8D0DB]',
      iconText: 'text-[#1A2E35]',
    },
    coral: {
      bg: 'bg-[#F78154]/15',
      iconBg: 'bg-[#F78154]',
      iconText: 'text-white',
    },
    sage: {
      bg: 'bg-[#E8ECD6]',
      iconBg: 'bg-[#3D5A56]',
      iconText: 'text-white',
    },
  };

  const style = colorStyles[color];

  return (
    <motion.div
      className={`${style.bg} rounded-2xl p-6 relative overflow-hidden group h-full`}
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-300 pointer-events-none z-10" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`dots-${color}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${color})`} />
        </svg>
      </div>

      <motion.div
        className={`${style.iconBg} ${style.iconText} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl md:text-2xl font-medium text-[#1A2E35] mb-2 font-[family-name:var(--font-fraunces)]">{title}</h3>
      <p className="text-[#2C4A52] text-sm md:text-base">{description}</p>
    </motion.div>
  );
}

// Accordion Component
function Accordion({ label, content, isDark }: { label: string; content: string; isDark: boolean }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`mt-4 rounded-xl overflow-hidden ${isDark ? 'bg-white/10' : 'bg-[#1A2E35]/10'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors ${
          isDark ? 'text-[#F8F9F2] hover:bg-white/5' : 'text-[#1A2E35] hover:bg-[#1A2E35]/5'
        }`}
      >
        <span>{label}</span>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={isDark ? 'text-[#F8F9F2]/60' : 'text-[#1A2E35]/60'}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className={`px-4 pb-4 text-sm ${isDark ? 'text-[#F8F9F2]/70' : 'text-[#2C4A52]'}`}>
          {content}
        </p>
      </motion.div>
    </div>
  );
}

// Image Feature Card Component (Superside-style with background image)
interface ImageFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  bgImage: string;
  bgColor: string;
  variant?: 'dark' | 'light';
  imageStyle?: 'screenshot' | 'texture' | 'flat';
  accordion?: { label: string; content: string };
}

function ImageFeatureCard({ icon, title, subtitle, description, bgImage, bgColor, variant = 'dark', imageStyle = 'screenshot', accordion }: ImageFeatureCardProps) {
  const isDark = variant === 'dark';

  return (
    <motion.div
      className={`${bgColor} rounded-2xl overflow-hidden relative min-h-[400px] md:min-h-[500px] flex flex-col h-full group`}
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Hover overlay */}
      <div className={`absolute inset-0 ${isDark ? 'bg-white/0 group-hover:bg-white/[0.03]' : 'bg-black/0 group-hover:bg-black/[0.03]'} transition-colors duration-300 pointer-events-none z-20`} />

      {/* Background texture (when imageStyle is texture) */}
      {imageStyle === 'texture' && bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-[#2B4E46]/90 via-[#2B4E46]/70 to-[#2B4E46]/50' : 'bg-gradient-to-b from-[#F8F9F2]/90 via-[#F8F9F2]/60 to-transparent'}`} />
        </>
      )}

      {/* Content area */}
      <div className="p-6 relative z-10">
        <motion.div
          className={`w-8 h-8 mb-4 ${isDark ? 'text-[#F8F9F2]/80' : 'text-[#1A2E35]'}`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {icon}
        </motion.div>
        <h3 className={`text-xl md:text-2xl font-medium mb-1 font-[family-name:var(--font-fraunces)] ${isDark ? 'text-[#F8F9F2]' : 'text-[#1A2E35]'}`}>{title}</h3>
        {subtitle && (
          <p className={`text-base md:text-lg font-medium mb-3 ${isDark ? 'text-[#C5D86D]' : 'text-[#2B4E46]'}`}>{subtitle}</p>
        )}
        <p className={`text-sm md:text-base ${isDark ? 'text-[#F8F9F2]/80' : 'text-[#2C4A52]'}`}>{description}</p>

        {accordion && (
          <Accordion label={accordion.label} content={accordion.content} isDark={isDark} />
        )}
      </div>

      {/* Product screenshot at bottom (when imageStyle is screenshot) */}
      {imageStyle === 'screenshot' && bgImage && (
        <div className="mt-auto px-6 pb-6 relative">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src={bgImage}
              alt=""
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

// Pricing Card Component with enhanced styling
interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  prefix?: string;
  description: string;
  features: { text: string; included: boolean }[];
  highlight?: boolean;
  badge?: string;
  badgeIcon?: string;
}

function PricingCard({ tier, price, period, prefix, description, features, highlight, badge, badgeIcon }: PricingCardProps) {
  return (
    <motion.div
      className={`rounded-3xl p-8 flex flex-col relative overflow-hidden group ${
        highlight
          ? 'bg-gradient-to-br from-[#1A2E35] to-[#2C4A52] text-white'
          : 'bg-white shadow-sm'
      }`}
      variants={fadeInUp}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Hover overlay */}
      <div className={`absolute inset-0 ${highlight ? 'bg-white/0 group-hover:bg-white/[0.03]' : 'bg-black/0 group-hover:bg-black/[0.02]'} transition-colors duration-300 pointer-events-none z-10`} />

      {/* Decorative gradient blob */}
      {highlight && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C5D86D]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      )}

      <div className="mb-6 relative">
        {badge && (
          <motion.div
            className={`inline-flex items-center gap-2 ${highlight ? 'bg-[#C5D86D] text-[#1A2E35]' : 'bg-[#E8ECD6] text-[#1A2E35]'} text-xs px-3 py-1 rounded-full mb-3 font-medium`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>{badgeIcon}</span>
            <span>{badge}</span>
          </motion.div>
        )}
        <p className={`text-sm mb-2 ${highlight ? 'text-[#A8D0DB]' : 'text-[#3D5A56]'}`}>{tier}</p>
        <div className="flex items-baseline gap-1">
          {prefix && <span className={`text-lg ${highlight ? 'text-[#A8D0DB]' : 'text-[#2C4A52]'}`}>{prefix}</span>}
          <span className={`text-4xl font-[family-name:var(--font-fraunces)] ${highlight ? 'text-white' : 'text-[#1A2E35]'}`}>{price}</span>
          {period && <span className={highlight ? 'text-[#A8D0DB]' : 'text-[#2C4A52]'}>{period}</span>}
        </div>
      </div>

      <p className={`mb-6 ${highlight ? 'text-[#A8D0DB]' : 'text-[#2C4A52]'}`}>
        {description}
      </p>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((item, i) => (
          <motion.li
            key={i}
            className={`flex items-start gap-3 text-sm ${
              item.included
                ? (highlight ? 'text-white/90' : 'text-[#2C4A52]')
                : (highlight ? 'text-white/40' : 'text-[#2C4A52]/50')
            }`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            {item.included ? (
              <svg className={`w-5 h-5 flex-shrink-0 ${highlight ? 'text-[#C5D86D]' : 'text-[#3D5A56]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <XMark className={highlight ? 'text-white/30' : ''} />
            )}
            <span>{item.text}</span>
          </motion.li>
        ))}
      </ul>

      <motion.a
        href="https://cal.com/marco-ennmyq/site-intro"
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center px-6 py-4 rounded-full font-medium transition-all duration-300 ${
          highlight
            ? 'bg-[#C5D86D] text-[#1A2E35] hover:bg-[#d4e57c] hover:shadow-lg'
            : 'bg-[#1A2E35] text-[#F8F9F2] hover:bg-[#2C4A52] hover:shadow-lg'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Jetzt starten
      </motion.a>
    </motion.div>
  );
}

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#F8F9F2] overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-5 py-12 md:py-20 text-center relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9F2] via-[#F8F9F2] to-[#E8ECD6]/30" />
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C5D86D]/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#A8D0DB]/20 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center gap-[6px] mb-6 md:mb-12"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.svg"
              alt="vorm.digital"
              width={36}
              height={36}
              className="-translate-y-[3px] md:w-11 md:h-11"
            />
            <span className="text-[28px] md:text-[36px] tracking-[-0.01em] text-[#1A2E35] font-[family-name:var(--font-fraunces)]">Vorm</span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl tracking-tight mb-1 md:mb-3 text-[#1A2E35] font-[family-name:var(--font-fraunces)]"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sie führen die Praxis.
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-6xl lg:text-7xl tracking-tight mb-4 md:mb-8 text-[#1A2E35] italic font-[family-name:var(--font-fraunces)]"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Marketing übernehmen wir.
          </motion.h2>

          <motion.p
            className="text-base md:text-xl text-[#2C4A52] mb-4 md:mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ganzheitliche digitale Lösungen für Arztpraxen. Alles aus einer Hand.
          </motion.p>

          <motion.div
            className="mb-6 md:mb-10"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ServicePills />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href="https://cal.com/marco-ennmyq/site-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#1A2E35] text-[#F8F9F2] rounded-full text-base md:text-lg font-medium hover:bg-[#2C4A52] transition-all duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Erstgespräch vereinbaren
            </motion.a>
            <motion.a
              href="#pakete"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-[#1A2E35] text-[#1A2E35] rounded-full text-base md:text-lg font-medium hover:bg-[#1A2E35] hover:text-[#F8F9F2] transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Pakete ansehen
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section with dark green background */}
      <section className="px-6 py-20 bg-[#2B4E46] relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-problem" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-problem)" />
          </svg>
        </div>

        {/* Decorative gradient blobs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#3D6B5E]/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5D86D]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          className="max-w-3xl mx-auto relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center bg-[#F78154]/20 text-[#F78154] text-sm px-4 py-2 rounded-full mb-6 font-medium"
            variants={fadeInUp}
          >
            Das Problem
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[#F8F9F2] mb-8"
            variants={fadeInUp}
          >
            Das kann normalerweise ein Vermögen kosten.
          </motion.h2>

          <motion.div className="space-y-4 text-lg text-[#A8D0DB]" variants={staggerContainer}>
            <motion.p variants={fadeInUp}>
              Eine Agentur für die Website. Eine für SEO. Eine für Social Media. Eine für Ads.
              Jede will ein Retainer, jede braucht Briefings, jede hat eigene Prozesse.
            </motion.p>
            <motion.p variants={fadeInUp}>
              <strong className="text-[#F8F9F2]">Das Ergebnis:</strong> Sie koordinieren mehr als Sie behandeln.
              Und am Ende passt nichts richtig zusammen.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[#F8F9F2] font-medium pt-4">
              Wir sind Ihr ein Ansprechpartner. Ohne die Kosten zu vervielfachen.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Different Section with Colorful Cards */}
      <section className="px-6 py-20 bg-[#F8F9F2]">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center bg-[#C5D86D]/30 text-[#1A2E35] text-sm px-4 py-2 rounded-full mb-6 font-medium"
            variants={fadeInUp}
          >
            So arbeiten wir
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[#1A2E35] mb-4"
            variants={fadeInUp}
          >
            Marketing, das mitdenkt.
          </motion.h2>
          <motion.p
            className="text-lg text-[#2C4A52] mb-10"
            variants={fadeInUp}
          >
            Sie haben Patienten zu versorgen, ein Team zu führen, und wenig Zeit für Marketing-Meetings. Wir übernehmen den Rest.
          </motion.p>

          {/* Bento grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
          >
            <div className="lg:col-span-2">
              <ImageFeatureCard
                icon={<ChartLine size={32} weight="light" />}
                title="Transparente Ergebnisse"
                subtitle="Volle Transparenz, ohne Umwege."
                description="Echtzeit-Daten und klare Entwicklungen. Ob täglich, wöchentlich oder monatlich: Sie sehen jederzeit, was passiert. Ohne Reports anfordern zu müssen."
                bgImage="/images/product-screenshot.png"
                bgColor="bg-[#A8D0DB]"
                variant="light"
                accordion={{
                  label: "In der Praxis",
                  content: "Was läuft gerade? Wie hoch ist das Budget? Welche Landingpage, welches Angebot? Hier ist die Antwort. Immer aktuell."
                }}
              />
            </div>
            <div className="lg:col-span-2">
              <ImageFeatureCard
                icon={<PresentationChart size={32} weight="light" />}
                title="Monatliche Deutung"
                subtitle="Wir sagen Ihnen, was wichtig ist."
                description="Es gibt hunderte Kennzahlen. Erfahrung heißt zu wissen, welche davon wirklich etwas bedeuten. Und was wir daraus ableiten."
                bgImage=""
                bgColor="bg-[#E8ECD6]"
                variant="light"
                imageStyle="flat"
              />
            </div>
            <div className="lg:col-span-1">
              <ImageFeatureCard
                icon={<Target size={32} weight="light" />}
                title="Bewährte Strategien"
                subtitle="Erfolg lässt sich reproduzieren. Vorausgesetzt, die Basis stimmt."
                description="Wenn Angebot und Positionierung schwächer sind als die der Konkurrenz, hilft auch die beste Kampagne nicht. Wir sorgen dafür, dass Fundament und Marketing zusammenpassen."
                bgImage=""
                bgColor="bg-[#2B4E46]"
                variant="dark"
                imageStyle="flat"
                accordion={{
                  label: "Gebietsschutz",
                  content: "Eine Fachrichtung pro Einzugsgebiet. Ergänzt durch ein Praxis-Netzwerk für offenen Erfahrungsaustausch über Regionen hinweg."
                }}
              />
            </div>
            <div className="lg:col-span-3">
              <ImageFeatureCard
                icon={<Robot size={32} weight="light" />}
                title="KI für Fokus statt Verwaltung"
                subtitle="Früher floss der Großteil der Zeit in Abstimmung und Nachfragen."
                description="Heute übernehmen intelligente Systeme das Wiederfinden von Informationen und die Automatisierung von Aufgaben. Alles, was wir über Ihre Praxis lernen, wird strukturiert gespeichert und nutzbar gemacht."
                bgImage=""
                bgColor="bg-[#1A2E35]"
                variant="dark"
                imageStyle="flat"
                accordion={{
                  label: "Menschliche Arbeit",
                  content: "So bleibt menschliche Arbeit dort, wo sie den Unterschied macht: bei Strategie, Einordnung und Entscheidungen."
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section with Enhanced Cards */}
      <section id="pakete" className="px-6 py-20 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8ECD6]/40 via-[#F8F9F2] to-[#A8D0DB]/20 pointer-events-none" />

        <motion.div
          className="max-w-6xl mx-auto relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-[#A8D0DB]/30 text-[#1A2E35] text-sm px-4 py-2 rounded-full mb-6 font-medium">
              <span>📦</span>
              <span>Pakete</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[#1A2E35] mb-4">
              Mehr als Marketing.
            </h2>
            <p className="text-lg text-[#2C4A52] max-w-2xl mx-auto">
              Drei Pakete. Klar strukturiert. Wählen Sie, was zu Ihrer Praxis passt.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            <PricingCard
              tier="Website Foundation"
              price="€499"
              period="/Monat"
              description="Ihre Website läuft professionell, ist schnell, mobiloptimiert, und Sie werden gefunden. Auf Google, in KI-Suchmaschinen, und auf Maps."
              features={[
                { text: "Website-Neubau (responsive, mobiloptimiert)", included: true },
                { text: "Online-Terminbuchung Integration*", included: true },
                { text: "Website-Wartung & Updates", included: true },
                { text: "Performance-Optimierung", included: true },
                { text: "Google My Business Optimierung", included: true },
                { text: "Lokale SEO-Grundlagen", included: true },
                { text: "GEO & KI-Suchmaschinen Optimierung", included: true },
                { text: "Monatliches Performance-Reporting", included: true },
                { text: "Technische SEO-Audits & Fixes", included: true },
                { text: "Content-Erstellung (Leistungen, Team, Über uns)", included: true },
                { text: "Lizenzierte Bildrechte für Website", included: true },
              ].map(text => typeof text === 'string' ? { text, included: true } : text)}
            />

            <PricingCard
              tier="Vollständige Präsenz"
              price="€1.5K"
              period="/Monat"
              description="Website läuft. Bewertungen werden gemanagt. Social Media lebt. Emails bauen Vertrauen auf. Performance Marketing bringt Anfragen."
              badge="Beliebteste Wahl"
              badgeIcon="⚡"
              highlight={true}
              features={[
                { text: "Alles aus Website Foundation", included: true },
                { text: "Google My Business Pro-Management", included: true },
                { text: "Bewertungsmanagement (Google, Jameda)", included: true },
                { text: "Instagram Content & Profil-Management", included: true },
                { text: "Email-Sequenzen (Aufwärmen bis Termin)", included: true },
                { text: "1 Paid Channel, 2 live Kampagnen (Google Ads ODER Meta Ads)", included: true },
                { text: "Ad & Landing Page Erstellung", included: true },
                { text: "Anonymisierter Conversion Import", included: true },
                { text: "Live-Dashboard & Quartalsweise Strategy Review", included: true },
                { text: "Media Budget (wird direkt bezahlt)", included: false },
                { text: "Zweiter Paid Channel (+€350/Monat)", included: false },
              ]}
            />

            <PricingCard
              tier="Maßgeschneidert"
              price="€3K"
              prefix="Ab"
              description="Enge Zusammenarbeit. Höhere Komplexität. Mehrere Standorte, größere Budgets, enge Abstimmung. Wir arbeiten mit Ihnen und Ihren bestehenden Partnern zusammen."
              badge="Consulting"
              badgeIcon="✏️"
              features={[
                { text: "Vollständige Marketing-Strategie Entwicklung", included: true },
                { text: "Customer Journey Analyse & Optimierung", included: true },
                { text: "Wöchentliche/monatliche Check-ins & Adjustments", included: true },
                { text: "Mehrere Standorte koordiniert", included: true },
                { text: "Integration in Ihre technische Umgebung", included: true },
                { text: "Bespoke Content nach Ihren Wünschen", included: true },
                { text: "Zusammenarbeit mit Ihren Agenturen/Freelancern", included: true },
                { text: "Personalized Training for Your Team", included: true },
              ].map(text => typeof text === 'string' ? { text, included: true } : text)}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Target Audience Section with visual interest */}
      <section className="px-6 py-20 relative overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 left-1/4 w-20 h-20 bg-[#C5D86D]/30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 right-1/4 w-24 h-24 bg-[#A8D0DB]/30 rounded-full blur-2xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <motion.div
            className="inline-flex items-center gap-2 bg-[#E8ECD6] text-[#1A2E35] text-sm px-4 py-2 rounded-full mb-6 font-medium"
            variants={fadeInUp}
          >
            <span>🎯</span>
            <span>Zielgruppe</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] text-[#1A2E35] mb-6 relative"
            variants={fadeInUp}
          >
            Wir arbeiten für 2.000 bis 4.000€ Patienten.
          </motion.h2>
          <motion.p
            className="text-lg text-[#2C4A52] mb-8 relative"
            variants={fadeInUp}
          >
            Kieferorthopäden. Zahnärzte mit Implantologie. Augenärzte mit Laserkorrektur.
            Wenn ein neuer Patient einen echten Wert hat, rechnet sich professionelles Marketing.
          </motion.p>
          <motion.p
            className="text-[#3D5A56]/60 text-sm relative"
            variants={fadeInUp}
          >
            Wir arbeiten bewusst nur mit einer begrenzten Anzahl an Praxen pro Region.
          </motion.p>
        </motion.div>
      </section>

      {/* CTA Section with enhanced styling */}
      <section className="px-6 py-20 bg-gradient-to-br from-[#1A2E35] via-[#2C4A52] to-[#1A2E35] text-[#F8F9F2] relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #C5D86D 0%, transparent 50%),
                             radial-gradient(circle at 80% 50%, #A8D0DB 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="max-w-3xl mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-[family-name:var(--font-fraunces)] mb-6"
            variants={fadeInUp}
          >
            Bereit für systematisches Wachstum?
          </motion.h2>
          <motion.p
            className="text-lg text-[#A8D0DB] mb-8"
            variants={fadeInUp}
          >
            In einem kurzen Gespräch finden wir heraus, ob und wie wir Ihnen helfen können.
          </motion.p>
          <motion.a
            href="https://cal.com/marco-ennmyq/site-intro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C5D86D] text-[#1A2E35] rounded-full text-lg font-medium hover:bg-[#d4e57c] transition-all duration-300 hover:shadow-xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Kostenloses Erstgespräch →
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-[#F8F9F2] border-t border-[#E8ECD6]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/logo.svg"
              alt="vorm.digital"
              width={28}
              height={28}
              className="-translate-y-[2px]"
            />
            <span className="text-xl text-[#1A2E35] font-[family-name:var(--font-fraunces)]">Vorm</span>
          </motion.div>

          <div className="flex items-center gap-6 text-sm text-[#3D5A56]/60">
            <span>© {new Date().getFullYear()} VORM.DIGITAL</span>
            <Link href="/impressum" className="hover:text-[#3D5A56] transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
