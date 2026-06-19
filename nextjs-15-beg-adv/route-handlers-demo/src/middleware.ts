import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;

  // return NextResponse.redirect(new URL("/", request.url));

  // Conditionally redirect
  if (request.nextUrl.pathname === "/profile") {
    // return NextResponse.redirect(new URL("/hello", request.url));
    // return NextResponse.rewrite(new URL("/hello", request.url)); // URL will /profile but it will be responsed from /hello route. Use case for SEO
  }
}

// Configuration of the middleware
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: "/profile", // This will apply only middleware to the `/profile` route
  // matcher: "/profile/:path*", // this will apply middleware to all routes starting with `/profile`
};
