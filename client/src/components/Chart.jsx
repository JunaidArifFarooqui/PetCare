import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart width={100} height={40} data={data} barSize={40}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="total"
          fill="#8884d8"
          radius={[25, 25, 25, 25]} // Fully rounded corners
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
