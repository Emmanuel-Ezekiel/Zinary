import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        tools: {
          download: false, // Disable the download icon
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#FF6600", "#FFDB8B"],
    title: {
      text: "Real-Time Update",
      align: "left",
    },
    grid: {},
    xaxis: {
      categories: [
        "0",
        "2",
        "4",
        "6",
        "8",
        "10",
        "12",
        "14",
        "16",
        "18",
        "20",
        "22",
      ],
    },
  });
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 1, 9, 93, 39],
      },
      {
        name: "Deposit",
        data: [10, 161, 105, 51, 109, 62, 60, 83, 21, 34, 23, 47],
      },
    ],
  });

  return (
    <div>
      <div className="w-full">
        <ReactApexChart
          options={options}
          series={chartData.series}
          type="line"
          height={270}
        />
      </div>
    </div>
  );
};

export default ApexChart;
