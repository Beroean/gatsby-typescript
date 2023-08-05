import React from "react";
import BarChart from "./barChart";
import { Chart } from "../pages/blog";

const ChartFactory = ({ chart }: { chart: Chart }) => {
  switch (chart.type) {
    case "barChart":
      return <BarChart data={chart.data} config={chart.config} />;
    default:
      return <></>;
  }
};

export default ChartFactory;
