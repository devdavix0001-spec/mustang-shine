import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const SITE_URL = "https://mustang-shine.vercel.app";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-foreground">404</h1>

        <div className="mx-auto mt-4 h-0.5 w-14 bg-red" />

        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-red px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-red px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-red-dark"
          >
            Try again
          </button>

          <Link
            to="/"
            className="border border-input px-6 py-3 font-display text-xs font-bold tracking-[0.14em] text-foreground uppercase transition-colors hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        // Global fallback title.
        // Individual routes can override this with their own title.
        {
          title: "Mustang Insulation Services | DFW Insulation Contractor",
        },

        // Global fallback description.
        // Individual routes can override this with their own description.
        {
          name: "description",
          content:
            "Mustang Insulation Services provides residential and commercial insulation, spray foam, air sealing, and attic insulation solutions across the Dallas-Fort Worth Metroplex.",
        },

        {
          name: "author",
          content: "Mustang Insulation Services",
        },

        {
          property: "og:site_name",
          content: "Mustang Insulation Services",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:title",
          content:
            "Mustang Insulation Services | DFW Insulation Contractor",
        },

        {
          property: "og:description",
          content:
            "Residential and commercial insulation services across Dallas-Fort Worth, including attic insulation, spray foam, air sealing, and building-performance solutions.",
        },

        {
          property: "og:url",
          content: SITE_URL,
        },

        {
          property: "og:image",
          content: `${SITE_URL}/favicon.ico`,
        },

        {
          property: "og:image:alt",
          content: "Mustang Insulation Services",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content:
            "Mustang Insulation Services | DFW Insulation Contractor",
        },

        {
          name: "twitter:description",
          content:
            "Residential and commercial insulation services across Dallas-Fort Worth.",
        },

        {
          name: "twitter:image",
          content: `${SITE_URL}/favicon.ico`,
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },

        {
          rel: "canonical",
          href: SITE_URL,
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
        },

        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mustang Insulation Services",
            telephone: "+1-817-770-1867",
            email: "info@mustanginsulation.com",
            url: SITE_URL,
            areaServed: "Dallas-Fort Worth Metroplex, Texas",
            knowsAbout: [
              "Attic insulation",
              "Spray foam insulation",
              "Commercial insulation",
              "Air sealing",
            ],
            description:
              "Family-owned residential and commercial insulation contractor serving the Dallas-Fort Worth Metroplex.",
          }),
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>

        {/* Mobile sticky actions */}
        <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink-line bg-ink p-2 sm:hidden">
          <a
            href="tel:+18177701867"
            className="flex min-h-11 items-center justify-center gap-2 border border-ink-line font-display text-xs font-bold tracking-[0.12em] text-white uppercase"
          >
            Call Mustang
          </a>

          <Link
            to="/contact"
            className="flex min-h-11 items-center justify-center bg-red font-display text-xs font-bold tracking-[0.12em] text-white uppercase"
          >
            Get an Estimate
          </Link>
        </div>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}
