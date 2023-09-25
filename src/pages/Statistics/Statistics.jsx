import { PieChart, Pie, Cell } from "recharts";
import { getDonationFromLS } from "../../utility/localStorage";

const Statistics = () => {
  const yourDonations = getDonationFromLS().length;
  const totalDonations = 12 - yourDonations;
  console.log(totalDonations);

  const data = [
    { name: "Group A", value: totalDonations },
    { name: "Group B", value: yourDonations },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex gap-10">
        <div className="flex items-center gap-4">
          <h2 className="text-xl">Your Donation</h2>
          <div className="w-24 h-3 rounded-sm bg-[#00C49F] mt-1"></div>
        </div>
        <div className="flex items-center gap-4">
          <h2 className="text-xl">Total Donation</h2>
          <div className="w-24 h-3 rounded-sm bg-[#FF444A] mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
