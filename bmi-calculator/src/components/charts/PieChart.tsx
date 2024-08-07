  import { FC } from "react";
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
  import { Pie } from "react-chartjs-2";
  import "./PieChart.css";

  ChartJS.register(ArcElement, Tooltip, Legend);
  const PieChart: FC = () => {
  const data = {
    labels: ["Under-Weight","Normal","OverWeight","Obesity"],
    datasets: [
      {
        data: [16, 18.5,25,30],
        backgroundColor: ["rgba(255, 123, 132, 0.6)", "rgba(54, 162, 235, 0.6)","rgba(53, 122, 135, 0.6)","rgba(524, 62, 35, 0.6)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="chart">
      <Pie data={data} options={options}/>
    </div>
  );
  };
  export default PieChart;
