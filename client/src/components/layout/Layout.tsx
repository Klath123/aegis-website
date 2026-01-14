import { Outlet, useNavigate } from 'react-router-dom';
import { Home, Info, Calendar, MessageSquare } from 'lucide-react';
import { Footer } from './Footer.tsx';
import Dock from '../Dock';

export const Layout = () => {
    const navigate = useNavigate();

    const dockItems = [
        {
            icon: <Home className="h-full w-full" />,
            label: 'Home',
            onClick: () => navigate('/'),
        },
        {
            icon: <Info className="h-full w-full" />,
            label: 'About',
            onClick: () => navigate('/about'),
        },
        {
            icon: <Calendar className="h-full w-full" />,
            label: 'Events',
            onClick: () => navigate('/events'),
        },
        {
            icon: <MessageSquare className="h-full w-full" />,
            label: 'Contact',
            onClick: () => navigate('/contact'),
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
            <Dock items={dockItems} />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
