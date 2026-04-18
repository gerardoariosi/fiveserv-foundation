import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import RootLayout from "./layouts/RootLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import CityPage from "./pages/CityPage";
import ServiceCityPage from "./pages/ServiceCityPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import MakeReadyPage from "./pages/MakeReadyPage";
import MaintenancePage from "./pages/MaintenancePage";
import RenovationsPage from "./pages/RenovationsPage";
import ResidentialPage from "./pages/ResidentialPage";
import MaintenanceCityPage from "./pages/MaintenanceCityPage";
import TampaBayPage from "./pages/TampaBayPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import ServicesIndexPage from "./pages/ServicesIndexPage";
import CitiesIndexPage from "./pages/CitiesIndexPage";
import BlogPage from "./pages/BlogPage";
import ThankYouB2BPage from "./pages/ThankYouB2BPage";

import { SERVICES, CITIES } from "@/lib/site-config";

const queryClient = new QueryClient();

/**
 * Route map (foundation phase — placeholders for non-template pages):
 *
 *   /                                  Index
 *   /services                          PlaceholderPage
 *   /cities                            PlaceholderPage
 *   /about                             PlaceholderPage
 *   /blog                              PlaceholderPage
 *   /contact                           PlaceholderPage
 *   /privacy, /terms, /thank-you-*     PlaceholderPage
 *
 *   /:service                          ServicePage         (4 services)
 *   /cities/:city                      CityPage            (18 cities)
 *   /:service/:city                    ServiceCityPage     (72 = 4 × 18)
 *
 * Total dynamic targets: 4 + 18 + 72 = 94 deep URLs from a handful of route patterns.
 * The 72 service×city pages are the "generateStaticParams" equivalent.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },

      // Top-level placeholders
      { path: "services", element: <ServicesIndexPage /> },
      { path: "cities", element: <CitiesIndexPage canonicalPath="/cities" /> },
      { path: "service-areas", element: <CitiesIndexPage canonicalPath="/service-areas" /> },
      { path: "about", element: <AboutPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "privacy", element: <PlaceholderPage title="Privacy Policy" description="FiveServ Property Solutions privacy policy." path="/privacy" heading="Privacy Policy" /> },
      { path: "terms", element: <PlaceholderPage title="Terms of Service" description="FiveServ Property Solutions terms of service." path="/terms" heading="Terms of Service" /> },
      { path: "thank-you-b2b", element: <PlaceholderPage title="Thank You" description="Thanks — your request reached FiveServ Property Solutions." path="/thank-you-b2b" heading="Thank You" /> },
      { path: "thank-you-residential", element: <PlaceholderPage title="Thank You" description="Thanks — your request reached FiveServ Property Solutions." path="/thank-you-residential" heading="Thank You" /> },

      // City overview pages (18)
      { path: "cities/:city", element: <CityPage /> },

      // Service pages (4) — dedicated pages for make-ready & maintenance, generic template for the rest
      { path: "make-ready", element: <MakeReadyPage /> },
      { path: "maintenance", element: <MaintenancePage /> },
      { path: "renovations", element: <RenovationsPage /> },
      { path: "residential", element: <ResidentialPage /> },

      // Service x City — 72 dynamic pages (legacy/internal pattern)
      ...SERVICES.map((s) => ({ path: `${s.slug}/:city`, element: <ServiceCityPage /> })),

      // City pages (18) — flat URL: /maintenance-orlando-fl, /maintenance-kissimmee-fl, etc.
      // React Router v6 cannot match params embedded in partial path segments
      // (e.g. "maintenance-:city" will not match "/maintenance-sanford-fl"),
      // so each city is registered as an explicit static route. The component
      // still reads ":city" via useParams, which we provide by parsing the URL.
      ...CITIES.map((c) => ({
        path: `maintenance-${c.slug}`,
        element: <MaintenanceCityPage citySlug={c.slug} />,
      })),

      // Tampa Bay coming soon
      { path: "tampa-bay-fl", element: <TampaBayPage /> },

      // Catch-all
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// Pre-computed list of all 72 service×city URLs — used by sitemap generation.
// Kept here for reference; consume via `import { ALL_SERVICE_CITY_PATHS } from "./App"`.
export const ALL_SERVICE_CITY_PATHS = SERVICES.flatMap((s) =>
  CITIES.map((c) => `/${s.slug}/${c.slug}`),
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
