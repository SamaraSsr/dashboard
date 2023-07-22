import { Doughnut, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "./dashboard.css";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 100, 3, 5, 2, 3],
      backgroundColor: [
        "red",
        "blue",
        "black",
        "gray",
        "orange",
        "green",
    ],
    borderColor: [
          "red",
          "blue",
          "black",
          "gray",
          "orange",
          "green",
      ],
      borderWidth: 3,
    },
  ],
};

const Dashboard = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center"
    >
      <div>
        <h3>Color Usage</h3>
        <Pie data={data} />
      </div>
      <div>
        <h3>Population by category</h3>
        <Line options={options} data={data} />
      </div>
      <div>
        <h3>Color Usage</h3>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
