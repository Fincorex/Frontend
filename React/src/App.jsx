import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'simplebar-react/dist/simplebar.min.css';
import './assets/css/app.min.css';
import './assets/css/icons.min.css';

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Layout and Pages
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import { SidebarProvider } from './hooks/useSidebar.jsx'; // Trigger HMR refresh

function App() {
  useEffect(() => {
    // Set initial body attributes
    document.body.setAttribute('data-menu-color', 'dark');
  }, []);

  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;

