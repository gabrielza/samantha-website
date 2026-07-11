import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ExitIntentModal from '../common/ExitIntentModal';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[13px] focus:font-semibold focus:text-teal-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <ExitIntentModal />
    </div>
  );
}
