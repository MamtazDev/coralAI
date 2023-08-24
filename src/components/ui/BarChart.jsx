import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FolderContext } from "../../contexts/FolderContext";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const BarChartBar = () => {
  const { chartData } = useContext(FolderContext);
  return (
    <div className="h-[300px] w-full">
      {chartData.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeWidth={0.5} />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="hardCoral" stackId="a" fill="#63b2fd" />
            <Bar dataKey="softCoral" stackId="a" fill="#9be0c4" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BarChartBar;
