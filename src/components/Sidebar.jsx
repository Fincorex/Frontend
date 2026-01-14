import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
// Simple import for logos - assuming they are in public/assets/images
const logoSm = '/assets/images/logo-sm.png';
const logoLight = '/assets/images/logo-light.png';
const logoDark = '/assets/images/logo-dark.png';

/**
 * Sidebar Component
 * 
 * Displays the main navigation menu for the application.
 * Supports:
 * - Nested menu items (children).
 * - Active state highlighting based on current URL.
 * - Collapsible sub-menus.
 * - Responsive visibility controlled by 'isOpen' prop.
 */
const Sidebar = ({ isOpen, toggleSidebar }) => {
    // State to track which submenus are expanded. 
    // Defaulting 'dashboard' to be open for better UX on load.
    const [openMenus, setOpenMenus] = useState(['dashboard']);

    // Hook to get current path for highlighting active menu items
    const location = useLocation();

    /**
     * Toggles the expansion state of a specific menu item.
     * @param {string} id - The ID of the menu item to toggle.
     */
    const toggleMenu = (id) => {
        setOpenMenus((prev) =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    /**
     * Checks if a path matches the current location.
     * @param {string} path - The path to check.
     */
    const isActive = (path) => location.pathname === path;

    /**
     * Recursive/Helper component for rendering a single menu item.
     * Handles both leaf nodes (links) and parent nodes (submenus).
     */
    const MenuItem = ({ item }) => {
        // Check if item has children (submenu)
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = openMenus.includes(item.id);

        // Determine if this item should be highlighted as active.
        const isItemActive = hasChildren
            ? item.children.some(child => isActive(child.path))
            : isActive(item.path);

        // Render Title/Header items
        if (item.type === 'title') {
            return (
                <li className={clsx(
                    "px-5 py-3 text-xs font-semibold text-sidebar-item uppercase opacity-75 tracking-wider transition-all duration-300 whitespace-nowrap overflow-hidden",
                    !isOpen && "lg:w-0 lg:px-0 lg:opacity-0"
                )}>
                    {item.label}
                </li>
            );
        }

        return (
            <li className={clsx('px-3 mb-1', isItemActive && 'active')}>
                {hasChildren ? (
                    <>
                        {/* Parent Menu Item Trigger */}
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); toggleMenu(item.id); }}
                            className={clsx(
                                'flex items-center px-3 py-2.5 rounded-md text-sm transition-all duration-300 group',
                                isItemActive || isExpanded ? 'text-sidebar-active bg-sidebar-active-bg' : 'text-sidebar-item hover:text-sidebar-active hover:bg-sidebar-active-bg/50',
                                !isOpen ? 'lg:justify-center' : ''
                            )}
                        >
                            <span className="flex-shrink-0 text-lg">
                                <iconify-icon icon={item.icon}></iconify-icon>
                            </span>
                            <span className={clsx(
                                "flex-grow ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 origin-left",
                                !isOpen && "lg:w-0 lg:ml-0 lg:opacity-0"
                            )}>{item.label}</span>
                            <span className={clsx(
                                "transition-transform duration-300 ml-auto",
                                isExpanded ? 'rotate-90' : '',
                                !isOpen && "lg:hidden"
                            )}>
                                <iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
                            </span>
                        </a>

                        {/* Submenu Container (Collapsible) */}
                        <div className={clsx('overflow-hidden transition-all duration-300', (isExpanded && isOpen) ? 'max-h-[500px]' : 'max-h-0')}>
                            <ul className="pl-9 pr-2 py-1 space-y-1">
                                {item.children.map((child, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={child.path}
                                            className={clsx(
                                                'block px-3 py-2 rounded-md text-sm transition-colors whitespace-nowrap overflow-hidden',
                                                isActive(child.path) ? 'text-sidebar-active font-medium' : 'text-sidebar-item hover:text-sidebar-active'
                                            )}
                                        >
                                            {child.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    /* Leaf Menu Item (Direct Link) */
                    <Link
                        to={item.path}
                        className={clsx(
                            'flex items-center px-3 py-2.5 rounded-md text-sm transition-all duration-300 group',
                            isActive(item.path) ? 'text-sidebar-active bg-sidebar-active-bg' : 'text-sidebar-item hover:text-sidebar-active hover:bg-sidebar-active-bg/50',
                            !isOpen ? 'lg:justify-center' : ''
                        )}
                    >
                        <span className="flex-shrink-0 text-lg">
                            <iconify-icon icon={item.icon}></iconify-icon>
                        </span>
                        <span className={clsx(
                            "ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 origin-left",
                            !isOpen && "lg:w-0 lg:ml-0 lg:opacity-0"
                        )}>{item.label}</span>
                    </Link>
                )}
            </li>
        );
    };

    // Menu Data Configuration
    const menuItems = [
        { type: 'title', label: 'Menu' },
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: 'solar:home-2-bold-duotone',
            children: [
                { label: 'Sales', path: '/' },
                { label: 'Analytics', path: '/analytics' }
            ]
        },
        { type: 'title', label: 'Apps' },
        {
            id: 'account-manager',
            label: 'Account / Profile Manager',
            icon: 'solar:user-circle-bold-duotone',
            children: [
                { label: 'Create Individual Account', path: '/apps/account/create-individual' },
                { label: 'Create Corporate Account', path: '/apps/account/create-corporate' },
                { label: 'Create Local Account', path: '/apps/account/create-local' },
                { label: 'Standing Order', path: '/apps/account/standing-order' },
                { label: 'Account Balance Statement', path: '/apps/account/balance-statement' },
                { label: 'Lien Account', path: '/apps/account/lien' },
                { label: 'Customer', path: '/apps/account/customer' },
                { label: 'Accounts', path: '/apps/account/accounts' },
            ]
        },
        {
            id: 'account-officer',
            label: 'Account Officer Management',
            icon: 'solar:user-id-bold-duotone',
            children: [
                { label: 'Account Allocation', path: '/apps/officer/allocation' },
                { label: 'Account Transfer', path: '/apps/officer/transfer' },
                { label: 'Account Summary', path: '/apps/officer/summary' },
            ]
        },
        {
            id: 'transaction',
            label: 'Transaction',
            icon: 'solar:card-transfer-bold-duotone',
            children: [
                { label: 'Teller (Debit/Credit)', path: '/apps/transaction/teller' },
                { label: 'System Account to Account', path: '/apps/transaction/system-to-account' },
                { label: 'Account to System Account', path: '/apps/transaction/account-to-system' },
            ]
        },
        {
            id: 'system-report',
            label: 'System Report',
            icon: 'solar:chart-square-bold-duotone',
            children: [
                { label: 'Approved Transactions', path: '/apps/report/approved' },
                { label: 'Pending Transactions', path: '/apps/report/pending' },
                { label: 'Ledger Account', path: '/apps/report/ledger' },
                { label: 'Credit Bill Report', path: '/apps/report/credit-bill' },
                { label: 'Audit', path: '/apps/report/audit' },
                { label: 'CBN Report', path: '/apps/report/cbn' },
            ]
        },
        {
            id: 'loan-manager',
            label: 'Loan Manager',
            icon: 'solar:hand-money-bold-duotone',
            children: [
                { label: 'Overview', path: '/apps/loan/overview' },
            ]
        },
        {
            id: 'staff-manager',
            label: 'Staff Manager',
            icon: 'solar:users-group-two-rounded-bold-duotone',
            children: [
                { label: 'Overview', path: '/apps/staff/overview' },
                { label: 'Employees', path: '/apps/staff/employees' },
                { label: 'Departments', path: '/apps/staff/departments' },
                { label: 'Pay Slip', path: '/apps/staff/payslip' },
                { label: 'Salary Structure', path: '/apps/staff/salary-structure' },
                { label: 'Payroll', path: '/apps/staff/payroll' },
                { label: 'Tax', path: '/apps/staff/tax' },
                { label: 'Bonus and Deduction', path: '/apps/staff/bonus-deduction' },
            ]
        },
        { type: 'title', label: 'Pages' },
        {
            id: 'auth',
            label: 'Authentication',
            icon: 'solar:lock-keyhole-bold-duotone',
            children: [
                { label: 'Log In', path: '/auth-login' },
                { label: 'Register', path: '/auth-register' },
            ]
        },
    ];

    return (
        <div className={clsx(
            "h-full fixed left-0 top-0 bottom-0 bg-sidebar-bg border-r border-border z-30 transition-all duration-300 ease-in-out flex flex-col overflow-hidden",
            // Width: 260px when open, 70px when collapsed (on desktop)
            isOpen ? "w-[260px]" : "w-[260px] lg:w-[70px]",
            // Mobile: Translate off-screen if closed, Visible if open
            // Desktop: Always visible (translate-0), just width changes
            !isOpen ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
        )}>
            {/* Logo Section */}
            <div className="h-[70px] flex justify-between items-center sticky top-0 bg-light/50 z-20 border-b border-white/5 whitespace-nowrap overflow-hidden px-4">
                <Link to="/" className="flex items-center gap-2">
                    <img src={logoSm} alt="small logo" className="h-8 w-auto" />
                    {/* Only show text logo if open */}
                    <span className={clsx("font-bold text-xl text-emphasis-text transition-opacity duration-300",
                        !isOpen && "lg:opacity-0 lg:hidden"
                    )}>
                        Fincorex
                    </span>
                </Link>

                {/* Mobile Close Button */}
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden text-sidebar-item hover:text-primary transition-colors"
                >
                    <iconify-icon icon="solar:close-circle-bold-duotone" width="24"></iconify-icon>
                </button>
            </div>

            {/* Menu List */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden py-5 custom-scrollbar" data-simplebar>
                <ul className="space-y-1">
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
