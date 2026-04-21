import { Outlet, ScrollRestoration } from "react-router-dom";
import StickyHeader from "@/components/fiveserv/StickyHeader";
import StickyBanner from "@/components/fiveserv/StickyBanner";
import SocialProofTicker from "@/components/fiveserv/SocialProofTicker";
import Footer from "@/components/fiveserv/Footer";
import ExitIntentPopup from "@/components/fiveserv/ExitIntentPopup";
import SofiaChat from "@/components/fiveserv/SofiaChat";
import ScrollProgress from "@/components/fiveserv/ScrollProgress";
import StickyMobileCTA from "@/components/fiveserv/StickyMobileCTA";
import { Helmet } from "react-helmet-async";
import { SITE } from "@/lib/site-config";

/**
 * RootLayout — wraps every page with header, banner, footer, exit-intent popup.
 * Tracking placeholders for GSC, GA4, Microsoft Clarity, GHL chat.
 */
export const RootLayout = () => {
  const ga4 = SITE.tracking.ga4;
  const gsc = SITE.tracking.gsc;
  const clarity = SITE.tracking.clarity;

  return (
    <div className="flex min-h-screen flex-col bg-white text-brand-black">
      <Helmet>
        {/* ■ REPLACE: NEXT_PUBLIC_GSC_CODE — Google Search Console verification */}
        {gsc && <meta name="google-site-verification" content={gsc} />}

        {/* ■ REPLACE: NEXT_PUBLIC_CLARITY_CODE — Microsoft Clarity */}
        {clarity && (
          <script>{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`}</script>
        )}

        {/* ■ REPLACE: NEXT_PUBLIC_GA4_ID — Google Analytics 4 */}
        {ga4 && <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} />}
        {ga4 && (
          <script>{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4}');`}</script>
        )}
      </Helmet>

      <ScrollProgress />
      <StickyBanner />
      <StickyHeader />
      <main className="flex-1">
        {/* Non-fixed ticker — sits below the fixed header and scrolls away with the page. */}
        <div style={{ paddingTop: "calc(var(--banner-h, 0px) + var(--header-h, 80px))" }}>
          <SocialProofTicker />
        </div>
        <Outlet />
      </main>
      <Footer />
      <ExitIntentPopup />
      <SofiaChat />
      <StickyMobileCTA />

      {/* ■ REPLACE: GHL_CHAT_WIDGET_SNIPPET — paste from GoHighLevel */}
      {/* <script>[GHL_CHAT_WIDGET_SNIPPET]</script> */}

      <ScrollRestoration />
    </div>
  );
};

export default RootLayout;
