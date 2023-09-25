import { Pie, PieChart } from "recharts";

const Statistics = () => {
  const data01 = [
    {
      name: "Group A",
      value: 500,
    },
    {
      name: "Group B",
      value: 500,
    },
  ];
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
          fill2="#fff"
        />
      </PieChart>
    </div>
  );
};

export default Statistics;
