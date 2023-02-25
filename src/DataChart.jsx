import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import dragdataPlugin from "chartjs-plugin-dragdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  dragdataPlugin
);

const DataChart = ({ chartData, handleChange }) => {
  const buildOptionsLine = (chartData) => {
    let options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
        dragData: {
          round: 1,
          showTooltip: true,
          onDragStart: function (e, element) {
            console.log(e, element);
          },
          onDrag: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "grabbing";
          },
          onDragEnd: function (e, datasetIndex, index, value) {
            e.target.style.cursor = "default";
            const newData = chartData;
            if (datasetIndex === 1) {
              newData[index].aValue = value;
            }
            handleChange(newData);
          },
        },
      },
    };

    return options;
  };

  const buildDataLine = (chartData) => {
    let data = {
      labels: chartData.map((c) => c.label),
      datasets: [
        {
          label: "Red",
          data: chartData.map((c) => c.aValue),
          borderColor: "rgb(255, 99, 132)",
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          dragData: false,
        },
        {
          label: "Blue",
          data: chartData.map((c) => c.aValue),
          // fill: true,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };

    return data;
  };

  const lineChartData = buildDataLine(chartData);
  const lineChartOptions = buildOptionsLine(chartData);

  return (
    <div>
      <Line options={lineChartOptions} data={lineChartData} className="chart" />
    </div>
  );
};

export default DataChart;
