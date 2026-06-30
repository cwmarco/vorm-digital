import { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Datenschutz | vorm.digital",
  description: "Datenschutzerklärung von VORM.DIGITAL",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#F8F9F2] font-[family-name:var(--font-fraunces)]">
      <div className="max-w-2xl mx-auto px-8 py-16 text-[#2C4A52]">
        <Link
          href="/"
          className="inline-block text-xs text-[#3D5A56]/60 hover:text-[#3D5A56] transition-colors mb-10"
        >
          ← Zurück
        </Link>

        <h1 className="text-3xl text-[#1A2E35] mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg text-[#1A2E35] mb-3">1. Verantwortlicher</h2>
            <p>
              VORM.DIGITAL<br />
              Marco Günder (Geb. Eggens)<br />
              Dänenstraße 8<br />
              10436 Berlin<br />
              Deutschland<br />
              E-Mail: hallo@vorm.digital
            </p>
          </section>

          <section>
            <h2 className="text-lg text-[#1A2E35] mb-3">2. Allgemeines</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten
              personenbezogene Daten ausschließlich im Rahmen der geltenden
              Datenschutzgesetze, insbesondere der DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-[#1A2E35] mb-3">3. Besuch dieser Website</h2>
            <p className="mb-3">
              Beim Aufruf unserer Website werden durch den Hosting-Anbieter technisch
              notwendige Daten verarbeitet (z.&nbsp;B. IP-Adresse, Browsertyp,
              Zeitpunkt des Zugriffs). Diese Verarbeitung erfolgt zur Bereitstellung
              und Sicherheit der Website auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1
              lit.&nbsp;f DSGVO.
            </p>
            <p>
              Wir setzen keine Tracking-Cookies oder Analyse-Tools ein, sofern nicht
              ausdrücklich anders angegeben.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-[#1A2E35] mb-3">4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail oder über Terminbuchungstools kontaktieren,
              verarbeiten wir die von Ihnen mitgeteilten Daten (z.&nbsp;B. Name,
              E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage auf
              Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b bzw. lit.&nbsp;f DSGVO.
              Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet
              ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-[#1A2E35] mb-3">5. Externe Dienste</h2>
            <p className="mb-3">
              Auf unserer Website verlinken wir zu externen Diensten, insbesondere
              zur Terminvereinbarung (Cal.com). Beim Klick auf solche Links gelten
              die Datenschutzbestimmungen des jeweiligen Anbieters.
            </p>
            <p>
              Für Kundenprojekte können wir im Auftrag Drittanbieter-Dienste einsetzen
              (z.&nbsp;B. Werbeplattformen, Analyse-Tools, CRM-Systeme). Die
              Verarbeitung erfolgt dann auf Grundlage des jeweiligen
              Auftragsverarbeitungsvertrags mit unseren Kunden.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-[#1A2E35] mb-3">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch
              gegen die Verarbeitung Ihrer personenbezogenen Daten. Zudem haben Sie
              das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-lg text-[#1A2E35] mb-3">7. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
              geänderte Rechtslagen oder bei Änderungen unserer Website anzupassen.
              Stand: Juni 2026.
            </p>
          </section>
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}
