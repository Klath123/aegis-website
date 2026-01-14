import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Handle scroll for navbar transparency
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "glass h-16" : "bg-transparent h-20"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex items-center space-x-2 group">
                            <div className="bg-blue-500/10 p-2 rounded-xl border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 group-hover:scale-110">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
                                AEGIS
                            </span>
                        </NavLink>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group",
                                            isActive
                                                ? "text-blue-400"
                                                : "text-zinc-400 hover:text-white"
                                        )
                                    }
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute bottom-1.5 left-4 right-4 h-px bg-blue-500/50 transition-transform duration-300",
                                        location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    )} />
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 md:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div className={cn(
                "fixed top-20 left-4 right-4 z-50 md:hidden glass rounded-2xl p-4 transition-all duration-300 transform origin-top",
                isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95 pointer-events-none"
            )}>
                <div className="space-y-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                cn(
                                    "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                                    isActive
                                        ? "text-blue-400 bg-blue-400/10"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                                )
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};
