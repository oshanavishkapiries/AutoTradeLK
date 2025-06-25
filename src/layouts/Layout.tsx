// src/layout/Layout.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from '@tanstack/react-router';
import { Toaster } from 'sonner';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
