import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import ResourceCard from "../../components/ResourceCard";
import { mockResources } from "../../data/mockData";
import { tokens } from "../../theme/theme";

const LocalResources = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header 
        title="Local Eco-Resources" 
        subtitle="Find local recycling centers, eco-friendly shops, and community programs near you." 
      />
      <Box mt="20px">
        {mockResources.map((resource, index) => (
          <ResourceCard
            key={index}
            name={resource.name}
            type={resource.type}
            description={resource.description}
            address={resource.address}
            hours={resource.hours}
            phone={resource.phone}
            website={resource.website}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LocalResources;
