// src/components/SuggestionResult.jsx
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  useTheme, 
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { tokens } from "../theme/theme";
import ReactMarkdown from 'react-markdown';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import EnergySavingsLeafOutlined from '@mui/icons-material/EnergySavingsLeafOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeOutlined from '@mui/icons-material/AccessTimeOutlined';

const SuggestionResult = ({ result, formData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery('(max-width:768px)');

  if (!result) return null;

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <Box mt={isMobile ? "20px" : "30px"}>
      <Typography 
        variant={isMobile ? "h6" : "h5"} 
        fontWeight="600" 
        color={colors.grey[900]} 
        mb="16px"
        display="flex"
        alignItems="center"
        gap="8px"
      >
        <CheckCircleOutlined sx={{ color: colors.greenAccent[500] }} />
        Sustainable Material Recommendations
      </Typography>

      {/* Input Summary */}
      <Card 
        sx={{ 
          mb: "20px",
          backgroundColor: colors.primary[400],
          border: `1px solid ${colors.greenAccent[200]}`,
          borderRadius: "12px"
        }}
      >
        <CardContent sx={{ padding: isMobile ? "16px" : "20px" }}>
          <Typography variant="body2" color={colors.grey[600]} mb="12px">
            Your Request Summary:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap="8px" mb="8px">
            <Chip 
              label={`Current: ${formData.currentPlasticType}`} 
              size="small"
              sx={{ backgroundColor: colors.grey[200] }}
            />
            <Chip 
              label={`Application: ${formData.application}`} 
              size="small"
              sx={{ backgroundColor: colors.grey[200] }}
            />
            {formData.desiredProperties && (
              <Chip 
                label={`Properties: ${formData.desiredProperties}`} 
                size="small"
                sx={{ backgroundColor: colors.grey[200] }}
              />
            )}
          </Box>
        </CardContent>
      </Card>

      {/* AI Response */}
      <Card 
        sx={{ 
          backgroundColor: colors.primary[400],
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #f0f0f0"
        }}
      >
        <CardContent sx={{ padding: isMobile ? "16px" : "24px" }}>
          {result.type === 'ai' ? (
            // AI-generated response
            <Box>
              <Box 
                sx={{ 
                  '& h1, & h2, & h3': { 
                    color: colors.grey[900],
                    marginTop: '16px',
                    marginBottom: '8px'
                  },
                  '& p': { 
                    color: colors.grey[700],
                    lineHeight: 1.6,
                    marginBottom: '12px'
                  },
                  '& ul, & ol': {
                    color: colors.grey[700],
                    paddingLeft: '20px'
                  },
                  '& li': {
                    marginBottom: '4px'
                  }
                }}
              >
                <ReactMarkdown>{result.content}</ReactMarkdown>
              </Box>
            </Box>
          ) : (
            // Fallback response
            <Box>
              <Typography variant="h6" color={colors.grey[900]} mb="16px">
                Recommended Sustainable Alternatives
              </Typography>
              
              <List>
                {result.alternatives.map((alternative, index) => (
                  <ListItem key={index} sx={{ padding: "4px 0" }}>
                    <ListItemIcon>
                      <EnergySavingsLeafOutlined sx={{ color: colors.greenAccent[500], fontSize: "20px" }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={alternative}
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          color: colors.grey[900],
                          fontWeight: 500
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Accordion 
                sx={{ 
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  border: `1px solid ${colors.grey[300]}`,
                  borderRadius: '8px',
                  mt: 2
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="500" color={colors.grey[900]}>
                    Why These Alternatives?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color={colors.grey[700]} mb="12px">
                    {result.description}
                  </Typography>
                  <Typography variant="body2" color={colors.greenAccent[600]} fontWeight="500">
                    Sustainability Benefits:
                  </Typography>
                  <Typography variant="body2" color={colors.grey[700]}>
                    {result.sustainability}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          )}

          {/* Footer */}
          <Box 
            mt="20px" 
            pt="16px" 
            borderTop={`1px solid ${colors.grey[300]}`}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection={isMobile ? "column" : "row"}
            gap={isMobile ? "8px" : "0"}
          >
            <Typography variant="caption" color={colors.grey[600]} display="flex" alignItems="center" gap="4px">
              <AccessTimeOutlined sx={{ fontSize: "14px" }} />
              Generated: {formatTimestamp(result.timestamp)}
            </Typography>
            <Typography variant="caption" color={colors.grey[600]}>
              Source: {result.source}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SuggestionResult;
