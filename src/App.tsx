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
      { path: "services", element: <PlaceholderPage title="Services" description="All FiveServ Property Solutions services across Central Florida." path="/services" heading="Our Services" /> },
      { path: "cities", element: <PlaceholderPage title="Cities" description="18 cities served by FiveServ Property Solutions across Central Florida." path="/cities" heading="Cities We Serve" /> },
      { path: "about", element: <AboutPage /> },
      { path: "blog", element: <PlaceholderPage title="Blog" description="Insights for property managers from FiveServ Property Solutions." path="/blog" heading="FiveServ Blog" /> },
      { path: "contact", element: <ContactPage /> },
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
      // Param :city receives the full slug (e.g. "orlando-fl")
      { path: "maintenance-:city", element: <MaintenanceCityPage /> },

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
