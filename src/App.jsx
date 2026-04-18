import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import AboutPage from './pages/AboutPage';
import NeighborhoodsPage from './pages/NeighborhoodsPage';
import NeighborhoodDetailPage from './pages/NeighborhoodDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import ItineraryPage from './pages/ItineraryPage';
import ContactPage from './pages/ContactPage';
import ValuationPage from './pages/ValuationPage';
import CalculatorsPage from './pages/CalculatorsPage';
import BondCalculatorPage from './pages/BondCalculatorPage';
import TransferCostCalculatorPage from './pages/TransferCostCalculatorPage';
import AffordabilityCalculatorPage from './pages/AffordabilityCalculatorPage';
import SellerCalculatorPage from './pages/SellerCalculatorPage';
import BuyersGuidePage from './pages/BuyersGuidePage';
import SellersGuidePage from './pages/SellersGuidePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
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
    </>
  );
}
