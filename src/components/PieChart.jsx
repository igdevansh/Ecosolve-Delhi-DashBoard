import { ResponsivePie } from "@nivo/pie";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme/theme";
import { mockPieData as data } from "../data/mockData";

const PieChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: { line: { stroke: colors.grey[100], strokeWidth: 1 }, text: { fill: colors.grey[300] } },
        },
        legends: { 
          text: { 
            fill: colors.grey[700], 
            fontSize: isMobile ? 10 : 12 
          } 
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            fontSize: isMobile ? 10 : 12,
          },
        },
      }}
      margin={{ 
        top: isMobile ? 20 : 40, 
        right: isMobile ? 20 : 40, 
        bottom: isMobile ? 60 : 80, 
        left: isMobile ? 20 : 40 
      }}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={0}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[700]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLinkLabels={!isMobile}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#ffffff"
      legends={[
        {
          anchor: "bottom",
          direction: isMobile ? "column" : "row",
          justify: false,
          translateX: 0,
          translateY: isMobile ? 40 : 56,
          itemsSpacing: isMobile ? 4 : 20,
          itemWidth: isMobile ? 80 : 60,
          itemHeight: isMobile ? 14 : 18,
          itemTextColor: colors.grey[700],
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: isMobile ? 8 : 12,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default PieChart;
