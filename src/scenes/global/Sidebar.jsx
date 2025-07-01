import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, useTheme, Drawer, useMediaQuery } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme/theme";
import GridViewOutlined from '@mui/icons-material/GridViewOutlined';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import MapOutlined from '@mui/icons-material/MapOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import EnergySavingsLeaf from '@mui/icons-material/EnergySavingsLeaf';

const Item = ({ title, to, icon, selected, setSelected, onClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <MenuItem
      active={isActive}
      style={{ 
        color: isActive ? colors.greenAccent[500] : colors.grey[700],
        backgroundColor: isActive ? "rgba(76, 206, 172, 0.1)" : "transparent"
      }}
      onClick={() => {
        setSelected(title);
        onClick && onClick();
      }}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography fontWeight={isActive ? "600" : "400"}>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = ({ isCollapsed, setIsCollapsed, isMobile }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  const getSelectedFromPath = (pathname) => {
    switch(pathname) {
      case '/': return 'Dashboard';
      case '/suggestion': return 'Material Suggestion';
      case '/resources': return 'Local Resources';
      default: return 'Dashboard';
    }
  };

  const [selected, setSelected] = useState(getSelectedFromPath(location.pathname));

  useEffect(() => {
    setSelected(getSelectedFromPath(location.pathname));
  }, [location.pathname]);

  const handleMenuItemClick = () => {
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  const sidebarContent = (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.background.default} !important`,
          borderRight: "1px solid #e0e0e0",
          height: "100vh",
        },
        "& .ps-menu-button": {
          padding: "8px 24px !important",
          margin: "4px 8px !important",
          borderRadius: "8px !important",
        },
        "& .ps-menu-button:hover": {
          backgroundColor: "rgba(76, 206, 172, 0.05) !important",
        },
        "& .ps-menu-button.ps-active": {
          backgroundColor: "rgba(76, 206, 172, 0.1) !important",
          borderLeft: `3px solid ${colors.greenAccent[500]} !important`,
        },
      }}
    >
      <Sidebar collapsed={isCollapsed && !isMobile} width={isMobile ? "280px" : "280px"}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed && !isMobile ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {(!isCollapsed || isMobile) && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box display="flex" alignItems="center" gap="12px">
                  <EnergySavingsLeaf sx={{ fontSize: "28px", color: colors.greenAccent[500] }} />
                  <Typography 
                    variant="h4" 
                    color={colors.grey[900]} 
                    fontWeight="600"
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    EcoSolve
                  </Typography>
                </Box>
                {!isMobile && (
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlined />
                  </IconButton>
                )}
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={(isCollapsed && !isMobile) ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<GridViewOutlined />}
              selected={selected}
              setSelected={setSelected}
              onClick={handleMenuItemClick}
            />
            <Item
              title="Material Suggestion"
              to="/suggestion"
              icon={<LightbulbOutlined />}
              selected={selected}
              setSelected={setSelected}
              onClick={handleMenuItemClick}
            />
            <Item
              title="Local Resources"
              to="/resources"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
              onClick={handleMenuItemClick}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={!isCollapsed}
        onClose={() => setIsCollapsed(true)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            border: 'none'
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return sidebarContent;
};

export default SidebarComponent;
