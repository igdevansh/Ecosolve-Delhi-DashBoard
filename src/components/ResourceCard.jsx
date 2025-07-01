import { Box, Typography, Button, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import RecyclingOutlined from '@mui/icons-material/RecyclingOutlined';
import CallOutlined from '@mui/icons-material/CallOutlined';
import LanguageOutlined from '@mui/icons-material/LanguageOutlined';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';

const ResourceCard = ({ icon, name, type, description, address, hours, phone, website }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      backgroundColor={colors.primary[400]}
      p="24px"
      mb="20px"
      borderRadius="12px"
      sx={{ 
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #f0f0f0"
      }}
    >
      <Box display="flex" alignItems="flex-start" gap="16px" mb="16px">
        <Box sx={{ 
          color: colors.greenAccent[500], 
          fontSize: "32px",
          mt: "4px"
        }}>
          {icon || <RecyclingOutlined sx={{ fontSize: "32px" }} />}
        </Box>
        <Box flex="1">
          <Typography variant="h5" fontWeight="600" color={colors.grey[900]} mb="4px">
            {name}
          </Typography>
          <Typography variant="body2" color={colors.greenAccent[600]} fontWeight="500">
            {type}
          </Typography>
        </Box>
      </Box>

      <Typography color={colors.grey[700]} sx={{ mb: "16px", lineHeight: 1.5 }}>
        {description}
      </Typography>

      <Box mb="20px">
        {address && (
          <Box display="flex" alignItems="flex-start" gap="8px" mb="8px">
            <LocationOnOutlined sx={{ color: colors.grey[600], fontSize: "16px", mt: "2px" }} />
            <Typography variant="body2" color={colors.grey[700]}>
              <span style={{ fontWeight: "600" }}>Address:</span> {address}
            </Typography>
          </Box>
        )}
        {hours && (
          <Box display="flex" alignItems="flex-start" gap="8px">
            <AccessTimeOutlined sx={{ color: colors.grey[600], fontSize: "16px", mt: "2px" }} />
            <Typography variant="body2" color={colors.grey[700]}>
              <span style={{ fontWeight: "600" }}>Hours:</span> {hours}
            </Typography>
          </Box>
        )}
      </Box>

      <Box display="flex" gap="12px">
        {website && (
          <Button
            variant="contained"
            startIcon={<LanguageOutlined />}
            size="small"
            sx={{
              backgroundColor: colors.greenAccent[500],
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              fontSize: "12px",
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
            sx={{
              borderColor: colors.greenAccent[500],
              color: colors.greenAccent[500],
              textTransform: "none",
              borderRadius: "8px",
              fontSize: "12px",
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
