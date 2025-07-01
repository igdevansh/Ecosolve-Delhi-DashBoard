import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme/theme";
import RecyclingOutlined from '@mui/icons-material/RecyclingOutlined';
import CallOutlined from '@mui/icons-material/CallOutlined';
import LanguageOutlined from '@mui/icons-material/LanguageOutlined';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';

const ResourceCard = ({ icon, name, type, description, address, hours, phone, website }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box
      width="100%"
      backgroundColor={colors.primary[400]}
      p={isMobile ? "16px" : "24px"}
      mb={isMobile ? "15px" : "20px"}
      borderRadius="12px"
      sx={{ 
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #f0f0f0"
      }}
    >
      <Box 
        display="flex" 
        alignItems="flex-start" 
        gap={isMobile ? "12px" : "16px"} 
        mb={isMobile ? "12px" : "16px"}
        flexDirection={isMobile ? "column" : "row"}
      >
        <Box 
          display="flex" 
          alignItems="center" 
          gap={isMobile ? "12px" : "16px"}
          width="100%"
        >
          <Box sx={{ 
            color: colors.greenAccent[500], 
            fontSize: isMobile ? "24px" : "32px",
            flexShrink: 0
          }}>
            {icon || <RecyclingOutlined sx={{ fontSize: isMobile ? "24px" : "32px" }} />}
          </Box>
          <Box flex="1">
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              fontWeight="600" 
              color={colors.grey[900]} 
              mb="4px"
              sx={{ fontSize: isMobile ? "16px" : "20px" }}
            >
              {name}
            </Typography>
            <Typography 
              variant="body2" 
              color={colors.greenAccent[600]} 
              fontWeight="500"
              sx={{ fontSize: isMobile ? "12px" : "14px" }}
            >
              {type}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography 
        color={colors.grey[700]} 
        sx={{ 
          mb: isMobile ? "12px" : "16px", 
          lineHeight: 1.5,
          fontSize: isMobile ? "13px" : "14px"
        }}
      >
        {description}
      </Typography>

      <Box mb={isMobile ? "15px" : "20px"}>
        {address && (
          <Box display="flex" alignItems="flex-start" gap="8px" mb="8px">
            <LocationOnOutlined sx={{ 
              color: colors.grey[600], 
              fontSize: isMobile ? "14px" : "16px", 
              mt: "2px",
              flexShrink: 0
            }} />
            <Typography 
              variant="body2" 
              color={colors.grey[700]}
              sx={{ fontSize: isMobile ? "12px" : "14px" }}
            >
              <span style={{ fontWeight: "600" }}>Address:</span> {address}
            </Typography>
          </Box>
        )}
        {hours && (
          <Box display="flex" alignItems="flex-start" gap="8px">
            <AccessTimeOutlined sx={{ 
              color: colors.grey[600], 
              fontSize: isMobile ? "14px" : "16px", 
              mt: "2px",
              flexShrink: 0
            }} />
            <Typography 
              variant="body2" 
              color={colors.grey[700]}
              sx={{ fontSize: isMobile ? "12px" : "14px" }}
            >
              <span style={{ fontWeight: "600" }}>Hours:</span> {hours}
            </Typography>
          </Box>
        )}
      </Box>

      <Box 
        display="flex" 
        gap="12px" 
        flexDirection={isMobile ? "column" : "row"}
      >
        {website && (
          <Button
            variant="contained"
            startIcon={<LanguageOutlined />}
            size="small"
            fullWidth={isMobile}
            sx={{
              backgroundColor: colors.greenAccent[500],
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              fontSize: isMobile ? "11px" : "12px",
              padding: isMobile ? "8px 16px" : "6px 12px",
              '&:hover': { backgroundColor: colors.greenAccent[600] }
            }}
          >
            Website
          </Button>
        )}
        {phone && (
          <Button
            variant="outlined"
            startIcon={<CallOutlined />}
            size="small"
            fullWidth={isMobile}
            sx={{
              borderColor: colors.greenAccent[500],
              color: colors.greenAccent[500],
              textTransform: "none",
              borderRadius: "8px",
              fontSize: isMobile ? "11px" : "12px",
              padding: isMobile ? "8px 16px" : "6px 12px",
              '&:hover': { 
                borderColor: colors.greenAccent[600],
                backgroundColor: colors.greenAccent[50]
              }
            }}
          >
            Call
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ResourceCard;
