import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme/theme";
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';

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

  const handleFormSubmit = (values) => {
    console.log(values);
    alert("Suggestion request submitted! Check the console for the values.");
  };

  return (
    <Box m="20px">
      <Header title="Material Suggestion Tool" subtitle="Find Sustainable Alternatives" />

      <Box 
        backgroundColor={colors.primary[400]} 
        p="30px" 
        borderRadius="12px" 
        mt="20px"
        sx={{ 
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          border: "1px solid #f0f0f0"
        }}
      >
        <Typography variant="h5" fontWeight="600" color={colors.grey[900]} mb="8px">
          Find Sustainable Alternatives
        </Typography>
        <Typography color={colors.grey[600]} mb="25px">
          Describe the plastic you are currently using and its application. Our AI will suggest a more sustainable alternative material.
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
          }) => (
            <form onSubmit={handleSubmit}>
              <Box display="grid" gap="24px">
                <Box>
                  <Typography variant="body1" fontWeight="500" color={colors.grey[700]} mb="8px">
                    Current Plastic Type
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
                    placeholder="e.g., PET, HDPE, Polystyrene"
                    sx={{
                      backgroundColor: "#f8f9fa",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      }
                    }}
                  />
                  <Typography variant="caption" color={colors.grey[600]} mt="4px">
                    Specify the type of plastic you are currently using.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body1" fontWeight="500" color={colors.grey[700]} mb="8px">
                    Application / Use Case
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
                    placeholder="e.g., Disposable water bottles, food packaging, children's toys"
                    multiline
                    rows={3}
                    sx={{
                      backgroundColor: "#f8f9fa",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      }
                    }}
                  />
                  <Typography variant="caption" color={colors.grey[600]} mt="4px">
                    Describe how this plastic is being used.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body1" fontWeight="500" color={colors.grey[700]} mb="8px">
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
                    placeholder="e.g., Waterproof, durable, heat-resistant, transparent"
                    multiline
                    rows={3}
                    sx={{
                      backgroundColor: "#f8f9fa",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      }
                    }}
                  />
                  <Typography variant="caption" color={colors.grey[600]} mt="4px">
                    List any specific properties the alternative material should have.
                  </Typography>
                </Box>
              </Box>
              
              <Box display="flex" justifyContent="start" mt="30px">
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<AutoAwesomeOutlined />}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    color: "white",
                    padding: "12px 24px",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    textTransform: "none",
                    '&:hover': { backgroundColor: colors.greenAccent[600] }
                  }}
                >
                  Get Suggestion
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default MaterialSuggestion;
