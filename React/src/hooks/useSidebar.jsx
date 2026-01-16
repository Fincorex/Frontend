import { useState, useEffect, createContext, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(() => {
    return window.innerWidth < 1040 ? 'hidden' : 'default';
  });

  const toggleSidebar = () => {
    setSidebarState(prev => {
      // Mobile & Medium logic
      if (window.innerWidth < 1040) {
        return prev === 'hidden' ? 'default' : 'hidden';
      }
      // Desktop logic
      return prev === 'default' ? 'condensed' : 'default';
    });
  };

  useEffect(() => {
    document.body.setAttribute('data-sidebar', sidebarState);
  }, [sidebarState]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1040) {
        // Force hidden on mobile resize/load if not already interactive
        setSidebarState(prev => prev === 'condensed' || prev === 'default' ? 'hidden' : prev);
      } else {
        // Reset to default when crossing to desktop if it was hidden
        setSidebarState(prev => prev === 'hidden' ? 'default' : prev);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ sidebarState, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
