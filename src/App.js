import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topbar from "./scenes/global/Topbar";
import SidebarComponent from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import LocalResources from "./scenes/localResources";
import MaterialSuggestion from "./scenes/materialSuggestion";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

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
          />
          <main className="content">
            <Topbar 
              isSidebarCollapsed={isSidebarCollapsed}
              toggleSidebar={toggleSidebar}
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
