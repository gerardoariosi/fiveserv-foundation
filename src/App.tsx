import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/fiveserv/PageTransition";

import RootLayout from "./layouts/RootLayout";
// Homepage stays eagerly imported so it ships in the initial bundle (LCP).
import Index from "./pages/Index";

// All other pages are code-split via React.lazy to shrink the initial JS bundle.
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const CityPage = lazy(() => import("./pages/CityPage"));
const ServiceCityPage = lazy(() => import("./pages/ServiceCityPage"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage"));
const MakeReadyPage = lazy(() => import("./pages/MakeReadyPage"));
const MaintenancePage = lazy(() => import("./pages/MaintenancePage"));
const RenovationsPage = lazy(() => import("./pages/RenovationsPage"));
const ResidentialPage = lazy(() => import("./pages/ResidentialPage"));
const MaintenanceCityPage = lazy(() => import("./pages/MaintenanceCityPage"));
const TampaBayPage = lazy(() => import("./pages/TampaBayPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ServicesIndexPage = lazy(() => import("./pages/ServicesIndexPage"));
const CitiesIndexPage = lazy(() => import("./pages/CitiesIndexPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const ThankYouB2BPage = lazy(() => import("./pages/ThankYouB2BPage"));
const ThankYouResidentialPage = lazy(() => import("./pages/ThankYouResidentialPage"));
const ThankYouCareersPage = lazy(() => import("./pages/ThankYouCareersPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const WorkPolicyPage = lazy(() => import("./pages/WorkPolicyPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const PlumbingPage = lazy(() => import("./pages/PlumbingPage"));
const ElectricalPage = lazy(() => import("./pages/ElectricalPage"));
const HvacPage = lazy(() => import("./pages/HvacPage"));
const DrywallPage = lazy(() => import("./pages/DrywallPage"));
const PaintingPage = lazy(() => import("./pages/PaintingPage"));
const FlooringPage = lazy(() => import("./pages/FlooringPage"));
const CarpentryPage = lazy(() => import("./pages/CarpentryPage"));
const CleaningPage = lazy(() => import("./pages/CleaningPage"));
const FiveServVsHandymanPage = lazy(() => import("./pages/FiveServVsHandymanPage"));
const MakeReadyVsDIYPage = lazy(() => import("./pages/MakeReadyVsDIYPage"));
const ForPropertyManagersPage = lazy(() => import("./pages/ForPropertyManagersPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));

const RouteFallback = () => (
  <div className="min-h-screen w-full bg-background" aria-hidden="true" />
);

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<RouteFallback />}>{node}</Suspense>
);

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
      { path: "blog/:slug", element: <BlogArticlePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "work-policy", element: <WorkPolicyPage /> },
      

      // City overview pages (18)
      { path: "cities/:city", element: <CityPage /> },

      // Service pages (4) — dedicated pages for make-ready & maintenance, generic template for the rest
      { path: "make-ready", element: <MakeReadyPage /> },
      { path: "maintenance", element: <MaintenancePage /> },
      { path: "renovations", element: <RenovationsPage /> },
      { path: "residential", element: <ResidentialPage /> },

      // Trade pages
      { path: "plumbing", element: <PlumbingPage /> },
      { path: "electrical", element: <ElectricalPage /> },
      { path: "hvac", element: <HvacPage /> },
      { path: "drywall", element: <DrywallPage /> },
      { path: "painting", element: <PaintingPage /> },
      { path: "flooring", element: <FlooringPage /> },
      { path: "carpentry", element: <CarpentryPage /> },
      { path: "cleaning", element: <CleaningPage /> },

      // Comparison pages
      { path: "fiveserv-vs-handyman-orlando", element: <FiveServVsHandymanPage /> },
      { path: "make-ready-vs-diy-property-management", element: <MakeReadyVsDIYPage /> },

      // For property managers — dedicated PM landing page
      { path: "for-property-managers", element: <ForPropertyManagersPage /> },

      // Reviews — SEO/AEO page (not in nav)
      { path: "reviews", element: <ReviewsPage /> },

      // Careers
      { path: "careers", element: <CareersPage /> },

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
  // Standalone routes (no header/footer) — distraction-free conversion pages
  { path: "/thank-you-b2b", element: <PageTransition><ThankYouB2BPage /></PageTransition> },
  { path: "/thank-you-residential", element: <PageTransition><ThankYouResidentialPage /></PageTransition> },
  { path: "/thank-you-careers", element: <PageTransition><ThankYouCareersPage /></PageTransition> },
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
