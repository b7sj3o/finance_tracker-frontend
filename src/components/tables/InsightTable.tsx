// BarChart.tsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar as BarChart } from "react-chartjs-2";

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface BarChartProps {
  chartType: "income" | "expense";
}

const BarChartComponent: React.FC<BarChartProps> = ({ chartType }) => {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: chartType === "income" ? "Income" : "Expense",
        data: [8000, 6000, 10509.09, 4000, 7000, 5000, 9000],
        backgroundColor: (context: any) => {
          const value = context.dataset.data[context.dataIndex];
          const maxValue = Math.max(...context.dataset.data);

          if (value === maxValue) {
            return chartType === "income"
              ? "rgba(75, 192, 192, 0.8)"
              : "rgba(255, 99, 132, 0.8)";
          }
          return "rgba(201, 203, 207, 0.5)";
        },
        borderRadius: 5,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.raw !== null) {
              label += `$${context.raw.toLocaleString()}`;
            }
            return label;
          },
        },
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5000,
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return `${tickValue / 1000}K`;
            }
            return tickValue;
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  };

  return <BarChart data={data} options={options} />;
};

export default BarChartComponent;
