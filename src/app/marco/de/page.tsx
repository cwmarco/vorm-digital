import type { Metadata } from "next";
import { marcoMetadata } from "@/lib/marco-seo";
import { MarcoPageShell } from "@/components/marco/marco-page-shell";

export const metadata: Metadata = marcoMetadata("de");

export default function MarcoDePage() {
  return <MarcoPageShell locale="de" />;
}
