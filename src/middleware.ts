import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { marcoLocalePath, resolveMarcoLocaleFromPath } from "@/lib/marco-seo";
import type { MarcoLocale } from "@/components/marco/marco-translations";

function isMarcoLocale(value: string | null): value is MarcoLocale {
  return value === "en" || value === "de" || value === "nl";
}

// Password for /presentations/*. The env var overrides the default if set.
const PRESENTATION_PASS = process.env.PRESENTATIONS_PASSWORD ?? "CA-Strat-2606";

// Basic-Auth barrier for /presentations/*. Any username works; only the
// password is checked, so the client just needs the shared password.
function presentationsGuard(request: NextRequest): NextResponse | null {
  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ") && PRESENTATION_PASS) {
    try {
      const decoded = atob(header.slice(6));
      const sep = decoded.indexOf(":");
      const pass = decoded.slice(sep + 1);
      if (pass === PRESENTATION_PASS) {
        return null;
      }
    } catch {
      // fall through to 401
    }
  }
  return new NextResponse("Zugriff geschützt.", {
    status: 401,
    headers: {
      "WWW-Authenticate":
        'Basic realm="Capital Aesthetics Präsentation", charset="UTF-8"',
    },
  });
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname.startsWith("/presentations")) {
    const denied = presentationsGuard(request);
    if (denied) return denied;
  }

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
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
    "/presentations/:path*",
  ],
};
