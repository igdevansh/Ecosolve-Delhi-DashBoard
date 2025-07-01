import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme/theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box mb={isMobile ? "20px" : "30px"}>
      <Typography
        variant={isMobile ? "h3" : "h2"}
        color={colors.grey[900]}
        fontWeight="bold"
        sx={{ 
          mb: "5px",
          fontSize: isMobile ? "24px" : "32px",
          lineHeight: 1.2
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant={isMobile ? "body1" : "h5"} 
        color={colors.grey[600]}
        sx={{ 
          fontSize: isMobile ? "14px" : "16px",
          lineHeight: 1.4
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
