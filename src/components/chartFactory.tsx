import React from "react";
import BarChart from "./barChart";
import { Chart } from "../pages/blog";
import CountryTimeSeries from "./countryTimeSeries";

const ChartFactory = ({ chart }: { chart: Chart }) => {
  switch (chart.type) {
    case "barChart":
      return <BarChart data={chart.data} config={chart.config} />;
    case "countryTimeSeries":
      return <CountryTimeSeries />;
    default:
      return <></>;
  }
};

export default ChartFactory;
