import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: { line: { stroke: colors.grey[100], strokeWidth: 1 }, text: { fill: colors.grey[300] } },
        },
        legends: { text: { fill: colors.grey[700], fontSize: 12 } },
        tooltip: {
          container: {
            color: colors.primary[500],
            fontSize: 12,
          },
        },
      }}
      margin={{ top: 40, right: 40, bottom: 80, left: 40 }}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={0}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[700]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLinkLabels={false}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#ffffff"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 20,
          itemWidth: 60,
          itemHeight: 18,
          itemTextColor: colors.grey[700],
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 12,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default PieChart;
