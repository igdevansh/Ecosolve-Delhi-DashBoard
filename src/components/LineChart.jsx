import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[700] } },
          ticks: { 
            line: { stroke: colors.grey[100], strokeWidth: 1 }, 
            text: { fill: colors.grey[600], fontSize: 11 } 
          },
        },
        legends: { text: { fill: colors.grey[700], fontSize: 12 } },
        grid: {
          line: { stroke: colors.grey[300], strokeWidth: 1 },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
            fontSize: 12,
          },
        },
      }}
      colors={{ datum: 'color' }}
      margin={{ top: 50, right: 50, bottom: 80, left: 60 }} // Reduced bottom margin
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
        tickRotation: 0,
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
      lineWidth={3}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right", // Changed from "bottom" to "bottom-right"
          direction: "column", // Changed from "row" to "column" 
          justify: false,
          translateX: -10, // Move legend inside the chart area
          translateY: -20, // Move legend up inside the chart
          itemsSpacing: 4, // Reduced spacing between legend items
          itemDirection: "left-to-right",
          itemWidth: 120,
          itemHeight: 16, // Reduced height
          itemOpacity: 0.85,
          symbolSize: 10, // Smaller symbol
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