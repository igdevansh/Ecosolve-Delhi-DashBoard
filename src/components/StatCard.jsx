import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme/theme";

const StatCard = ({ title, value, icon, increase, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box 
      width="100%"
      backgroundColor={colors.primary[400]}
      p={isMobile ? "15px" : "20px"}
      borderRadius="12px"
      sx={{ 
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #f0f0f0",
        height: "100%",
        minHeight: isMobile ? "100px" : "120px"
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box flex="1">
          <Typography 
            variant="body1" 
            color={colors.grey[700]}
            sx={{ 
              fontSize: isMobile ? "12px" : "14px", 
              fontWeight: 500,
              lineHeight: 1.2
            }}
          >
            {title}
          </Typography>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            fontWeight="bold"
            color={colors.grey[900]}
            sx={{ 
              mt: "8px", 
              mb: "8px",
              fontSize: isMobile ? "18px" : "24px"
            }}
          >
            {value}
          </Typography>
          {increase && (
            <Box display="flex" alignItems="center" flexWrap="wrap">
              <Typography 
                variant="body2" 
                sx={{ 
                  color: colors.greenAccent[500], 
                  fontWeight: "bold",
                  fontSize: isMobile ? "10px" : "12px"
                }}
              >
                {increase}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: colors.grey[600], 
                  ml: "5px",
                  fontSize: isMobile ? "10px" : "12px"
                }}
              >
                {description}
              </Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ 
          color: colors.grey[600], 
          fontSize: isMobile ? "20px" : "24px", 
          ml: "10px",
          flexShrink: 0
        }}>
          {icon}
        </Box>
      </Box>
    </Box>
  );
};

export default StatCard;
