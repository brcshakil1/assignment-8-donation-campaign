import { Chart } from "react-google-charts";
import { data, options } from "../../utility/dataAndOptions";

const PieChart = () => {
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};
export default PieChart;
