import React, { useEffect, useState, useMemo } from "react";
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";

const CountryTimeSeries = () => {
  const [populationData, setPopulationData] = useState<[]>([]);
  useEffect(() => {
    fetch(
      `https://cors-proxy-mahmoud-6b27c38af7df.herokuapp.com/https://data.nasdaq.com/api/v3/datasets/ODA/SYR_LP.json?collapse=annual&rows=6&order=desc&column_index=1`
    )
      .then((response) => response.json())
      .then((result) => {
        setPopulationData(result.dataset.data);
      });
  }, []);

  const chartData = useMemo(() => {
    return populationData.reverse().map((row) => {
      return { x: row[0], y: row[1] };
    });
  }, [populationData]);

  return (
    chartData.length && (
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis tickFormat={(x: string) => (x ? x.substring(0, 4) : "")} />
        <VictoryAxis dependentAxis tickFormat={(x: string) => `${x} M`} />
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={chartData}
        />
      </VictoryChart>
    )
  );
};

export default CountryTimeSeries;
