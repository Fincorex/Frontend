import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SalesDashboard from './pages/SalesDashboard';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

/**
 * App Component
 * 
 * The root component of the application. It handles the client-side routing
 * using React Router.
 * 
 * Routes Configuration:
 * - / : The root path renders the Layout component.
 *   - index (default): Renders the SalesDashboard.
 *   - /analytics: Renders the AnalyticsDashboard.
 * 
 * The Layout component wraps these child routes, providing the common
 * Sidebar and Topbar structure.
 */
function App() {
  return (
    <Routes>
      {/* Main application layout wrapper */}
      <Route path="/" element={<Layout />}>
        {/* Default Route: Sales Dashboard */}
        <Route index element={<SalesDashboard />} />

        {/* Analytics Route */}
        <Route path="analytics" element={<AnalyticsDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
