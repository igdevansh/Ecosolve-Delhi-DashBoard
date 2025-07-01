import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";
import MenuOutlined from '@mui/icons-material/MenuOutlined';

const Topbar = ({ isSidebarCollapsed, toggleSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" p={2}>
      {/* Hamburger menu positioned at the orange marked location */}
      {isSidebarCollapsed && (
        <Box 
          position="absolute" 
          top="20px" 
          left="20px" 
          zIndex={1000}
        >
          <IconButton 
            onClick={toggleSidebar}
            sx={{ 
              backgroundColor: colors.primary[400],
              borderRadius: "8px",
              padding: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
              '&:hover': {
                backgroundColor: colors.grey[200]
              }
            }}
          >
            <MenuOutlined sx={{ color: colors.grey[700], fontSize: "20px" }} />
          </IconButton>
        </Box>
      )}
      
      {/* Right side space for future icons */}
      <Box display="flex" marginLeft="auto">
        {/* Future: Add notification, settings, profile icons here */}
      </Box>
    </Box>
  );
};

export default Topbar;
