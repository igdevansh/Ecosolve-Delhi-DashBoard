import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import MenuOutlined from '@mui/icons-material/MenuOutlined';

const Topbar = ({ isSidebarCollapsed, toggleSidebar, isMobile }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      p={isMobile ? "10px 15px" : "15px 20px"}
      sx={{ 
        position: 'relative',
        minHeight: '60px'
      }}
    >
      {/* Hamburger menu for mobile or when sidebar is collapsed */}
      {(isMobile || isSidebarCollapsed) && (
        <Box>
          <IconButton 
            onClick={toggleSidebar}
            sx={{ 
              backgroundColor: colors.primary[400],
              borderRadius: "8px",
              padding: isMobile ? "6px" : "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              '&:hover': {
                backgroundColor: colors.grey[200]
              }
            }}
          >
            <MenuOutlined sx={{ 
              color: colors.grey[700], 
              fontSize: isMobile ? "18px" : "20px" 
            }} />
          </IconButton>
        </Box>
      )}
      
      {!isMobile && !isSidebarCollapsed && <Box />}
      
      <Box display="flex">
        {/* Future: Add notification, settings, profile icons here */}
      </Box>
    </Box>
  );
};

export default Topbar;
