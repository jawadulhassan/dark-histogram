import React from "react";
import "./App.css";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts.src.js";
import HighchartsExporting from "highcharts/modules/exporting";
import darkUnica from "highcharts/themes/dark-unica";

darkUnica(Highcharts);

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

var theme = {
  chart: {
    backgroundColor: "#141d28"
  }
};

Highcharts.setOptions(theme);

function Histogram(props) {
  const chartOptions = {
    chart: {
      type: "column"
    },
    title: {
      text: "Column chart with negative values"
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "John",
        data: [5, 3, 4, 7, 2]
      },
      {
        name: "Jane",
        data: [2, -2, -3, 2, 1]
      },
      {
        name: "Joe",
        data: [3, 4, 4, -2, 5]
      }
    ]
  };
  return (
    <div className="App">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default Histogram;
