import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ExitIntentModal from '../common/ExitIntentModal';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <ExitIntentModal />
    </div>
  );
}
