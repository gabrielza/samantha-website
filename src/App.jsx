import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Lazy-load non-critical pages for faster initial load
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const PropertyDetailsPage = lazy(() => import('./pages/PropertyDetailsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NeighborhoodsPage = lazy(() => import('./pages/NeighborhoodsPage'));
const NeighborhoodDetailPage = lazy(() => import('./pages/NeighborhoodDetailPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ItineraryPage = lazy(() => import('./pages/ItineraryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ValuationPage = lazy(() => import('./pages/ValuationPage'));
const CalculatorsPage = lazy(() => import('./pages/CalculatorsPage'));
const BondCalculatorPage = lazy(() => import('./pages/BondCalculatorPage'));
const TransferCostCalculatorPage = lazy(() => import('./pages/TransferCostCalculatorPage'));
const AffordabilityCalculatorPage = lazy(() => import('./pages/AffordabilityCalculatorPage'));
const SellerCalculatorPage = lazy(() => import('./pages/SellerCalculatorPage'));
const BuyersGuidePage = lazy(() => import('./pages/BuyersGuidePage'));
const SellersGuidePage = lazy(() => import('./pages/SellersGuidePage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-8 w-8 border-3 border-teal-200 border-t-gold-500 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:slug" element={<PropertyDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="/neighborhoods/:slug" element={<NeighborhoodDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/cape-town-day-out" element={<ItineraryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/valuation" element={<ValuationPage />} />
          <Route path="/calculators" element={<CalculatorsPage />} />
          <Route path="/calculators/bond" element={<BondCalculatorPage />} />
          <Route path="/calculators/transfer" element={<TransferCostCalculatorPage />} />
          <Route path="/calculators/affordability" element={<AffordabilityCalculatorPage />} />
          <Route path="/calculators/seller" element={<SellerCalculatorPage />} />
          <Route path="/guides/buyers-guide" element={<BuyersGuidePage />} />
          <Route path="/guides/sellers-guide" element={<SellersGuidePage />} />
        </Route>
        </Routes>
      </Suspense>
    </>
  );
}
