import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Topbar from "./scenes/global/Topbar";
import SidebarComponent from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import LocalResources from "./scenes/localResources";
import MaterialSuggestion from "./scenes/materialSuggestion";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Responsive breakpoints
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarCollapsed(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComponent 
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
            isMobile={isMobile}
          />
          <main className="content">
            <Topbar 
              isSidebarCollapsed={isSidebarCollapsed}
              toggleSidebar={toggleSidebar}
              isMobile={isMobile}
            />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/resources" element={<LocalResources />} />
              <Route path="/suggestion" element={<MaterialSuggestion />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
