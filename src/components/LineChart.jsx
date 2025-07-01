import { ResponsiveLine } from "@nivo/line";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme/theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(max-width:1024px)');

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[700] } },
          ticks: { 
            line: { stroke: colors.grey[100], strokeWidth: 1 }, 
            text: { 
              fill: colors.grey[600], 
              fontSize: isMobile ? 9 : 11 
            } 
          },
        },
        legends: { 
          text: { 
            fill: colors.grey[700], 
            fontSize: isMobile ? 10 : 12 
          } 
        },
        grid: {
          line: { stroke: colors.grey[300], strokeWidth: 1 },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            fontSize: isMobile ? 10 : 12,
          },
        },
      }}
      colors={{ datum: 'color' }}
      margin={{ 
        top: isMobile ? 30 : 50, 
        right: isMobile ? 30 : 50, 
        bottom: isMobile ? 60 : 80, 
        left: isMobile ? 40 : 60 
      }}
      xScale={{ type: "point" }}
      yScale={{ 
        type: "linear", 
        min: 0, 
        max: 120, 
        stacked: false, 
        reverse: false 
      }}
      yFormat=" >-.0f"
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMobile ? -45 : 0,
        legend: isDashboard ? undefined : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Weight (kg)",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={true}
      gridYValues={[0, 30, 60, 90, 120]}
      lineWidth={isMobile ? 2 : 3}
      pointSize={isMobile ? 6 : 8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: isMobile ? "top" : "bottom-right",
          direction: isMobile ? "row" : "column",
          justify: false,
          translateX: isMobile ? 0 : -10,
          translateY: isMobile ? -10 : -20,
          itemsSpacing: isMobile ? 10 : 4,
          itemDirection: "left-to-right",
          itemWidth: isMobile ? 80 : 120,
          itemHeight: isMobile ? 14 : 16,
          itemOpacity: 0.85,
          symbolSize: isMobile ? 8 : 10,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
