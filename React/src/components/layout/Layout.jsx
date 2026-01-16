import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSidebar } from '../../hooks/useSidebar.jsx'; // Trigger HMR refresh

const Layout = () => {
    const { sidebarState, toggleSidebar } = useSidebar();

    return (
        <div id="app-layout">
            <Topbar />
            <Sidebar />

            <div className="sidebar-backdrop" onClick={toggleSidebar}></div>

            <div className="content-page">
                <div className="content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
