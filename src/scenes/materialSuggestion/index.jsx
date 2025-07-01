// src/scenes/materialSuggestion/index.jsx
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  useTheme, 
  useMediaQuery,
  CircularProgress,
  Alert,
  Snackbar
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import Header from "../../components/Header";
import SuggestionResult from "../../components/SuggestionResult";
import { tokens } from "../../theme/theme";
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import AIService from "../../services/aiService";

const initialValues = {
  currentPlasticType: "",
  application: "",
  desiredProperties: "",
};

const validationSchema = yup.object().shape({
  currentPlasticType: yup.string().required("This field is required"),
  application: yup.string().required("This field is required"),
  desiredProperties: yup.string(),
});

const MaterialSuggestion = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery('(max-width:768px)');
  
  // State management
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [error, setError] = useState(null);
  const [submittedFormData, setSubmittedFormData] = useState(null);

  const handleFormSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    setError(null);
    setSuggestion(null);
    
    try {
      console.log('Submitting form with values:', values);
      
      // Call AI service
      const result = await AIService.getMaterialSuggestion(values);
      
      setSuggestion(result);
      setSubmittedFormData(values);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('suggestion-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
    } catch (err) {
      console.error('Error getting material suggestion:', err);
      setError('Failed to get material suggestions. Please try again.');
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <Box m={isMobile ? "10px" : "20px"}>
      <Header title="Material Suggestion Tool" subtitle="Find Sustainable Alternatives" />

      {/* Main Form */}
      <Box 
        backgroundColor={colors.primary[400]} 
        p={isMobile ? "20px" : "30px"} 
        borderRadius="12px" 
        mt={isMobile ? "15px" : "20px"}
        sx={{ 
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #f0f0f0"
        }}
      >
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          fontWeight="600" 
          color={colors.grey[900]} 
          mb="8px"
          sx={{ fontSize: isMobile ? "18px" : "20px" }}
        >
          Find Sustainable Alternatives
        </Typography>
        <Typography 
          color={colors.grey[600]} 
          mb={isMobile ? "20px" : "25px"}
          sx={{ 
            fontSize: isMobile ? "13px" : "14px",
            lineHeight: 1.5
          }}
        >
          Describe the plastic you are currently using and its application. Our AI will analyze your requirements and suggest sustainable alternative materials.
        </Typography>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box display="grid" gap={isMobile ? "20px" : "24px"}>
                <Box>
                  <Typography 
                    variant="body1" 
                    fontWeight="500" 
                    color={colors.grey[700]} 
                    mb="8px"
                    sx={{ fontSize: isMobile ? "14px" : "16px" }}
                  >
                    Current Plastic Type *
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.currentPlasticType}
                    name="currentPlasticType"
                    error={!!touched.currentPlasticType && !!errors.currentPlasticType}
                    helperText={touched.currentPlasticType && errors.currentPlasticType}
                    placeholder="e.g., PET, HDPE, Polystyrene, ABS, Polyethylene"
                    disabled={isLoading}
                    sx={{
                      backgroundColor: "#f8f9fa",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        fontSize: isMobile ? "14px" : "16px"
                      }
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    color={colors.grey[600]} 
                    mt="4px"
                    sx={{ fontSize: isMobile ? "11px" : "12px" }}
                  >
                    Specify the exact type of plastic you are currently using.
                  </Typography>
                </Box>

                <Box>
                  <Typography 
                    variant="body1" 
                    fontWeight="500" 
                    color={colors.grey[700]} 
                    mb="8px"
                    sx={{ fontSize: isMobile ? "14px" : "16px" }}
                  >
                    Application / Use Case *
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.application}
                    name="application"
                    error={!!touched.application && !!errors.application}
                    helperText={touched.application && errors.application}
                    placeholder="e.g., Food packaging containers, water bottles, automotive parts, children's toys, electronic housings"
                    multiline
                    rows={isMobile ? 2 : 3}
                    disabled={isLoading}
                    sx={{
                      backgroundColor: "#f8f9fa",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        fontSize: isMobile ? "14px" : "16px"
                      }
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    color={colors.grey[600]} 
                    mt="4px"
                    sx={{ fontSize: isMobile ? "11px" : "12px" }}
                  >
                    Describe in detail how and where this plastic is being used.
                  </Typography>
                </Box>

                <Box>
                  <Typography 
                    variant="body1" 
                    fontWeight="500" 
                    color={colors.grey[700]} 
                    mb="8px"
                    sx={{ fontSize: isMobile ? "14px" : "16px" }}
                  >
                    Desired Properties (Optional)
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.desiredProperties}
                    name="desiredProperties"
                    placeholder="e.g., Waterproof, UV-resistant, food-safe, flexible, transparent, heat-resistant up to 80°C"
                    multiline
                    rows={isMobile ? 2 : 3}
                    disabled={isLoading}
                    sx={{
                      backgroundColor: "#f8f9fa",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        fontSize: isMobile ? "14px" : "16px"
                      }
                    }}
                  />
                  <Typography 
                    variant="caption" 
                    color={colors.grey[600]} 
                    mt="4px"
                    sx={{ fontSize: isMobile ? "11px" : "12px" }}
                  >
                    List specific properties the alternative material should have.
                  </Typography>
                </Box>
              </Box>
              
              <Box 
                display="flex" 
                justifyContent={isMobile ? "center" : "start"} 
                mt={isMobile ? "25px" : "30px"}
              >
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : <AutoAwesomeOutlined />}
                  fullWidth={isMobile}
                  disabled={isLoading || isSubmitting}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    color: "white",
                    padding: isMobile ? "12px 20px" : "12px 24px",
                    fontSize: isMobile ? "13px" : "14px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    textTransform: "none",
                    minWidth: "200px",
                    '&:hover': { backgroundColor: colors.greenAccent[600] },
                    '&:disabled': { 
                      backgroundColor: colors.grey[400],
                      color: colors.grey[600]
                    }
                  }}
                >
                  {isLoading ? "Analyzing..." : "Get AI Suggestion"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>

      {/* Results Section */}
      <div id="suggestion-results">
        {suggestion && submittedFormData && (
          <SuggestionResult 
            result={suggestion} 
            formData={submittedFormData}
          />
        )}
      </div>

      {/* Error Snackbar */}
      <Snackbar 
        open={!!error} 
        autoHideDuration={6000} 
        onClose={handleCloseError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseError} 
          severity="error" 
          sx={{ width: '100%' }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MaterialSuggestion;
