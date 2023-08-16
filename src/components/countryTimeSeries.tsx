import React, { useEffect, useState, useMemo } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import countries, { entry } from "../constants/countries";
import indicators from "../constants/indicators";
import { Autocomplete, Stack, TextField, Typography } from "@mui/material";

const CountryTimeSeries = () => {
  const [populationData, setPopulationData] = useState<[]>([]);
  const [country, setCountry] = useState<entry>({
    key: "SYR",
    label: "Syrian Arab Republic",
  });
  const [indicator, setIndicator] = useState<entry>({
    key: "LP",
    label: "Population, Millions",
  });
  useEffect(() => {
    fetch(
      `https://cors-proxy-mahmoud-6b27c38af7df.herokuapp.com/https://data.nasdaq.com/api/v3/datasets/ODA/${country.key}_${indicator.key}.json?collapse=annual&rows=10&order=desc&column_index=1`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.dataset.data) {
          setPopulationData(result.dataset.data);
        }
      });
  }, [country, indicator]);

  const chartData = useMemo(() => {
    return populationData.reverse().map((row) => {
      return { x: row[0], y: row[1] };
    });
  }, [populationData]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Autocomplete
          disablePortal
          id="contry-combo-box"
          options={countries}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Country" />}
          value={country}
          onChange={(event: any, newValue: entry) => {
            setCountry(newValue);
          }}
          disableClearable
        />
        <Autocomplete
          disablePortal
          id="contry-combo-box"
          options={indicators}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Indicator" />}
          value={indicator}
          onChange={(event: any, newValue: entry) => {
            setIndicator(newValue);
          }}
          disableClearable
        />
      </Stack>

      <Typography marginTop={5} textAlign="center" variant="body1">
        {indicator.label} of {country.label} over the last available 10 years.
      </Typography>
      {chartData.length && (
        <VictoryChart
          containerComponent={
            <VictoryVoronoiContainer
              labels={({ datum }) =>
                `${datum.x.substring(0, 4)}, ${`${datum.y} M`}`
              }
            />
          }
          domainPadding={10}
          padding={{ top: 30, bottom: 40, right: 40, left: 70 }}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            style={{
              tickLabels: { fill: "white" },
              grid: { stroke: "transparent" },
            }}
            tickFormat={(x: string) => (x ? x.substring(2, 4) : "")}
          />
          <VictoryAxis
            style={{
              tickLabels: { fill: "white" },
              grid: { stroke: "transparent" },
            }}
            dependentAxis
          />
          <VictoryLine labelComponent={<VictoryTooltip />} data={chartData} />
        </VictoryChart>
      )}
    </>
  );
};

export default CountryTimeSeries;
