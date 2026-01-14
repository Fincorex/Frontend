import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import clsx from 'clsx';

/**
 * Layout Component
 * 
 * acts as the main shell for the application, organizing the Sidebar, Topbar,
 * and the main content area (Outlet).
 * 
 * Features:
 * - Manages the state of the Sidebar (open/closed) for responsive behavior.
 * - Adjusts the main content margin logic based on Sidebar state (currently logic is prepped for fixed desktop).
 * - Includes a sticky Topbar and a Footer.
 */
const Layout = () => {
    // State to manage sidebar visibility.
    // Default to closed on mobile (width < 1024px) for better UX.
    const [isSidebarOpen, setIsSidebarOpen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

    /**
     * Toggles the sidebar open/closed state.
     * Passed down to Topbar (hamburger menu) and Sidebar.
     */
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    // Optional: Close sidebar automatically when switching to mobile view
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024 && isSidebarOpen) {
                setIsSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSidebarOpen]);

    return (
        <div className="min-h-screen bg-body-bg text-body-text font-sans">
            {/* 
                Sidebar Component 
                - Controls the navigation menu.
                - Receives isOpen state to handle animations or visibility (logic inside Sidebar).
            */}
            {/* Mobile Overlay - Closes sidebar when tapped outside */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity duration-300"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* 
                Sidebar Component 
                - Controls the navigation menu.
                - Receives isOpen state to handle animations or visibility (logic inside Sidebar).
            */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content Wrapper */}
            <div
                className={clsx(
                    "min-h-screen flex flex-col transition-all duration-300 ease-in-out",
                    // Desktop: 260px when open, 70px when collapsed
                    isSidebarOpen ? "lg:ml-[260px]" : "lg:ml-[70px]"
                )}
            >
                {/* 
                    Topbar Component
                    - Contains Search, Theme Toggle, Profile, etc.
                    - Receives toggle function for mobile menu interaction.
                */}
                <Topbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

                {/*  
                    Main Content Area
                    - 'mt-[70px]': Pushes content down to account for the fixed height Topbar (70px).
                    - 'Outlet': Renders the current route's component (e.g., SalesDashboard).
                */}
                <main className="flex-1 p-6 mt-[70px]">
                    <Outlet />
                </main>

                {/* Footer Section */}
                <footer className="footer h-16 flex items-center px-6 bg-card-bg border-t border-border mt-auto">
                    <div className="flex justify-between w-full text-sm text-gray-500">
                        <p>{new Date().getFullYear()} © Fincorex - </p>
                        <div className="hidden sm:flex gap-4">
                            <a href="#" className="hover:text-primary">About</a>
                            <a href="#" className="hover:text-primary">Support</a>
                            <a href="#" className="hover:text-primary">Contact Us</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default Layout;
