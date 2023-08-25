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

const BarChartBar = () => {
  const { chartData } = useContext(FolderContext);

  const yAxisTickValues = [0, 20, 40, 60, 80, 100];
  const yAxisDomain = [0, 20, 40, 60, 80, 100];

  const formatYAxisTick = (tick) => `${tick}%`;

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
            <YAxis
              ticks={yAxisTickValues}
              domain={yAxisDomain}
              tickFormatter={formatYAxisTick}
            />
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
