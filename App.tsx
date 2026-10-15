import React from 'react';
import { QueueProvider, useQueue } from './context/QueueContext';
import { Navbar } from './components/Navbar';
import { QRScannerPage } from './components/QRScannerPage';
import { CustomerBookingPage } from './components/CustomerBookingPage';
import { StaffDashboard } from './components/StaffDashboard';
import { PublicDisplayBoard } from './components/PublicDisplayBoard';
import { QrCode, ShieldCheck, Cpu, Smartphone } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab } = useQueue();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <main className="flex-1 pb-16">
      {activeTab === 'scanner' && <QRScannerPage />}
      {activeTab === 'booking' && <CustomerBookingPage />}
      {activeTab === 'staff_dashboard' && <StaffDashboard />}
      {activeTab === 'public_board' && <PublicDisplayBoard />}
    </main>
  );
};

export default function App() {
  return (
    <QueueProvider>
      <div className="min-h-screen bg-[#faf9ff] text-gray-900 font-sans flex flex-col selection:bg-purple-200 selection:text-purple-900">
        <Navbar />
        <MainContent />

        {/* Global Footer */}
        <footer className="mt-auto border-t border-purple-100 bg-white/80 backdrop-blur-xs py-8 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-purple-700 text-white flex items-center justify-center">
                <QrCode className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-gray-900">
                Queue<span className="text-purple-600">Less</span> Smart Queue Management
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-purple-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                Optical QR Scanner Engine Active
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-gray-500">
              <span className="flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-purple-500" /> Rear/Front Camera Enabled
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-purple-500" /> Real-time Shared Queue Sync
              </span>
            </div>
          </div>
        </footer>
      </div>
    </QueueProvider>
  );
}
