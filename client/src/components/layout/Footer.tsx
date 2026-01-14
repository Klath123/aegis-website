import { Shield, Github, Twitter, MessageSquare } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 py-12 px-6 mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/5 pb-12 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Shield className="w-6 h-6 text-blue-400" />
                            <span className="text-xl font-bold tracking-tight text-white">AEGIS</span>
                        </div>
                        <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
                            Empowering students to build the future through code, collaboration, and community.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-12 md:gap-24">
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Site</h4>
                            <nav className="flex flex-col space-y-2 text-sm text-zinc-400">
                                <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
                                <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
                                <a href="/events" className="hover:text-blue-400 transition-colors">Events</a>
                            </nav>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Social</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600/20 hover:text-blue-400 transition-all">
                                    <MessageSquare className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>© {new Date().getFullYear()} Aegis Club. Built with passion by students.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-400">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
