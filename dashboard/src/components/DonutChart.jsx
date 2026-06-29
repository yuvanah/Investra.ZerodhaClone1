import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {
  console.log(data);
  return <Doughnut data={data} />;
};

export default DonutChart;