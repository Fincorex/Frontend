import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
// Flag images from public/assets/images/flags
const usFlag = '/assets/images/flags/us.svg';
const avatar = '/assets/images/users/avatar/avatar-1.jpg'; // Placeholder

/**
 * Topbar Component
 * 
 * The persistent header bar at the top of the application.
 * Features:
 * - Hamburger menu to toggle sidebar on mobile/desktop.
 * - Global Search input.
 * - Theme Switcher (Dark/Light mode).
 * - Notifications and User Profile dropdowns.
 */
const Topbar = ({ toggleSidebar, isSidebarOpen }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    /**
     * Initialize Theme based on user's system preference on mount.
     */
    useEffect(() => {
        // Check initial match
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
        }
    }, []);

    /**
     * Effect to apply the theme to the HTML element.
     * We use [data-bs-theme] and the 'dark' and 'light' classes to control
     * Tailwind and global variable behavior defined in index.css.
     */
    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.setAttribute('data-bs-theme', 'dark');
            html.classList.add('dark');
        } else {
            html.removeAttribute('data-bs-theme');
            html.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={clsx(
            "bg-topbar-bg h-[70px] fixed top-0 left-0 right-0 z-20 border-b border-border transition-all duration-300 ease-in-out",
            // Responsive margin: 260px (open desktop), 70px (collapsed desktop), 0 (mobile)
            isSidebarOpen ? "lg:ml-[260px]" : "lg:ml-[70px]"
        )}>
            <div className="flex justify-between items-center h-full px-4 gap-4">
                {/* Left Side: Toggle & Search */}
                <div className="flex items-center gap-4">
                    {/* Mobile Toggle */}
                    <button
                        onClick={toggleSidebar}
                        className="p-2 text-2xl text-sidebar-item hover:text-primary transition-colors lg:hidden"
                        title="Toggle Menu"
                    >
                        <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
                    </button>

                    {/* Desktop Toggle (Optional, can be used to collapse sidebar to icon-only mode if implemented) */}
                    <button
                        onClick={toggleSidebar}
                        className="hidden lg:block p-2 text-2xl text-sidebar-item hover:text-primary transition-colors"
                        title="Toggle Menu"
                    >
                        <iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
                    </button>

                    {/* Search Form */}
                    <form className="hidden md:block">
                        <div className="relative">
                            <input
                                type="text"
                                className="bg-body-bg border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-1 focus:ring-primary outline-none"
                                placeholder="Search..."
                            />
                            <iconify-icon
                                icon="solar:magnifer-linear"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            ></iconify-icon>
                        </div>
                    </form>
                </div>

                {/* Right Side: Actions & Profile */}
                <div className="flex items-center gap-2 sm:gap-4">

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-2xl text-sidebar-item hover:text-primary transition-colors"
                        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkMode ? (
                            <iconify-icon icon="solar:sun-2-bold-duotone"></iconify-icon>
                        ) : (
                            <iconify-icon icon="solar:moon-bold-duotone"></iconify-icon>
                        )}
                    </button>

                    {/* Notifications Button */}
                    <div className="relative">
                        <button className="p-2 text-2xl text-sidebar-item hover:text-danger transition-colors relative">
                            <iconify-icon icon="solar:bell-bing-bold-duotone"></iconify-icon>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border border-white"></span>
                        </button>
                    </div>

                    {/* User Profile Dropdown Trigger */}
                    <div className="relative group">
                        <button className="flex items-center gap-2">
                            <img src={avatar} alt="user" className="w-8 h-8 rounded-full border border-border" />
                            <span className="hidden sm:block text-sm font-medium text-body-text">Alex</span>
                        </button>
                        {/* Dropdown content would go here, managed by state or CSS using 'group-hover' for simple instances */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
