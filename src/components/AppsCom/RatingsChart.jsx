import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const RatingsChart = ({ ratings }) => {
  return (
    <div className="w-full h-75">
      <h2 className="text-xl font-semibold mb-4">Ratings</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >

          <XAxis type="number" />

          <YAxis type="category" dataKey="name" />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#FF8811" 
            radius={[0, 6, 6, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;