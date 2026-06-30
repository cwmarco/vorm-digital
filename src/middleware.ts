import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { marcoLocalePath, resolveMarcoLocaleFromPath } from "@/lib/marco-seo";
import type { MarcoLocale } from "@/components/marco/marco-translations";

function isMarcoLocale(value: string | null): value is MarcoLocale {
  return value === "en" || value === "de" || value === "nl";
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/marco" || pathname === "/marco/") {
    const lang = searchParams.get("lang");
    if (isMarcoLocale(lang) && lang !== "en") {
      const url = request.nextUrl.clone();
      url.pathname = marcoLocalePath(lang);
      url.searchParams.delete("lang");
      return NextResponse.redirect(url, 308);
    }
  }

  const marcoLocale = resolveMarcoLocaleFromPath(pathname);
  const response = NextResponse.next();
  response.headers.set("x-page-lang", marcoLocale ?? "de");

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
