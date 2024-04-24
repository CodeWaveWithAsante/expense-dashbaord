import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Title from "./title";

const data = [
  { label: "January", income: 5000, expense: 3000 },
  { label: "February", income: 5200, expense: 3200 },
  { label: "March", income: 5500, expense: 3500 },
  { label: "April", income: 4800, expense: 2900 },
  { label: "May", income: 5100, expense: 3100 },
  { label: "June", income: 5300, expense: 3300 },
  { label: "July", income: 5400, expense: 3400 },
  { label: "August", income: 5600, expense: 3600 },
  { label: "September", income: 5700, expense: 3700 },
  { label: "October", income: 5900, expense: 3900 },
  { label: "November", income: 6000, expense: 4000 },
  { label: "December", income: 6200, expense: 4200 },
];

const Chart = () => {
  return (
    <div className='w-full md:w-2/3'>
      <Title title='Transaction Activity' />

      <ResponsiveContainer width={"100%"} height={500} className='mt-5'>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <YAxis />
          <XAxis />
          <Legend />
          <Line type='monotone' dataKey={"income"} stroke='#8884d8' />
          <Line type='monotone' dataKey={"expense"} stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
