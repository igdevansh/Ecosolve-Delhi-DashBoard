import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme/theme";
import Header from "../../components/Header";
import StatCard from "../../components/StatCard";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import TrackChangesOutlined from '@mui/icons-material/TrackChangesOutlined';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  // Responsive breakpoints
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  return (
    <Box m={isMobile ? "10px" : "20px"}>
      <Header title="EcoSolve Delhi Dashboard" subtitle="Welcome to your sustainability overview" />

      <Box
        display="grid"
        gridTemplateColumns={
          isMobile 
            ? "1fr" 
            : isTablet 
            ? "repeat(2, 1fr)" 
            : "repeat(12, 1fr)"
        }
        gridAutoRows={isMobile ? "120px" : "140px"}
        gap={isMobile ? "15px" : "20px"}
      >
        {/* ROW 1 - STAT CARDS */}
        <Box gridColumn={isMobile ? "span 1" : isTablet ? "span 1" : "span 3"}>
          <StatCard 
            title="Delhi: Monthly Plastic Waste" 
            value="1237 kg" 
            increase="+3%" 
            description="from last month" 
            icon={<DeleteOutline />} 
          />
        </Box>
        <Box gridColumn={isMobile ? "span 1" : isTablet ? "span 1" : "span 3"}>
          <StatCard 
            title="Delhi: Recycling Rate" 
            value="44.4 %" 
            increase="+0.5%" 
            description="from last month" 
            icon={<AutoAwesomeOutlined />} 
          />
        </Box>
        <Box gridColumn={isMobile ? "span 1" : isTablet ? "span 1" : "span 3"}>
          <StatCard 
            title="Delhi: Eco Initiatives" 
            value="18 projects" 
            icon={<LightbulbOutlined />} 
          />
        </Box>
        <Box gridColumn={isMobile ? "span 1" : isTablet ? "span 1" : "span 3"}>
          <StatCard 
            title="Delhi: Waste Reduction Goal" 
            value="60.9 % of target" 
            icon={<TrackChangesOutlined />} 
          />
        </Box>

        {/* ROW 2 - CHARTS */}
        <Box
          gridColumn={
            isMobile 
              ? "span 1" 
              : isTablet 
              ? "span 2" 
              : "span 5"
          }
          gridRow={isMobile ? "span 1" : "span 2"}
          backgroundColor={colors.primary[400]}
          p={isMobile ? "15px" : "20px"}
          borderRadius="12px"
          sx={{ 
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            border: "1px solid #f0f0f0"
          }}
        >
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            fontWeight="600" 
            color={colors.grey[900]} 
            mb="4px"
          >
            Delhi: Plastic Waste by Type
          </Typography>
          <Typography 
            variant="body2" 
            color={colors.grey[600]} 
            mb="20px"
            sx={{ fontSize: isMobile ? "12px" : "14px" }}
          >
            Breakdown of commonly found plastic types in Delhi's waste
          </Typography>
          <Box height={isMobile ? "200px" : "250px"} mt="-20px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
        
        <Box
          gridColumn={
            isMobile 
              ? "span 1" 
              : isTablet 
              ? "span 2" 
              : "span 7"
          }
          gridRow={isMobile ? "span 1" : "span 2"}
          backgroundColor={colors.primary[400]}
          p={isMobile ? "15px" : "20px"}
          borderRadius="12px"
          sx={{ 
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            border: "1px solid #f0f0f0"
          }}
        >
          <Typography 
            variant={isMobile ? "h6" : "h5"} 
            fontWeight="600" 
            color={colors.grey[900]} 
            mb="4px"
          >
            Delhi: Waste Reduction Progress
          </Typography>
          <Typography 
            variant="body2" 
            color={colors.grey[600]} 
            mb="20px"
            sx={{ fontSize: isMobile ? "12px" : "14px" }}
          >
            Monthly progress towards plastic waste reduction targets in Delhi (in kg)
          </Typography>
          <Box height={isMobile ? "200px" : "250px"} mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
