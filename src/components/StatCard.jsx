import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";

const StatCard = ({ title, value, icon, increase, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      width="100%"
      backgroundColor={colors.primary[400]}
      p="20px"
      borderRadius="12px"
      sx={{ 
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #f0f0f0",
        height: "100%"
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box flex="1">
          <Typography 
            variant="body1" 
            color={colors.grey[700]}
            sx={{ fontSize: "14px", fontWeight: 500 }}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.grey[900]}
            sx={{ mt: "8px", mb: "8px" }}
          >
            {value}
          </Typography>
          {increase && (
            <Box display="flex" alignItems="center">
              <Typography 
                variant="body2" 
                sx={{ 
                  color: colors.greenAccent[500], 
                  fontWeight: "bold",
                  fontSize: "12px"
                }}
              >
                {increase}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: colors.grey[600], 
                  ml: "5px",
                  fontSize: "12px"
                }}
              >
                {description}
              </Typography>
            </Box>
          )}
        </Box>
        <Box sx={{ color: colors.grey[600], fontSize: "24px", ml: "10px" }}>
          {icon}
        </Box>
      </Box>
    </Box>
  );
};

export default StatCard;
