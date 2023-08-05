import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const BarChart = ({ data, config }: { data: any; config: any }) => {
  return (
    <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
      <VictoryBar data={data} x={config.x} y={config.y} />
    </VictoryChart>
  );
};

export default BarChart;
