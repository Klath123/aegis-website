import { Outlet, useNavigate } from 'react-router-dom';
import { Home, Info, Calendar, MessageSquare } from 'lucide-react';
import { Footer } from './Footer.tsx';
import Navbar from "./Navbar.tsx";

export const Layout = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />   {/* 👈 REQUIRED */}
     <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    );
};
