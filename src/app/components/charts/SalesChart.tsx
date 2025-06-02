// src/components/charts/SalesChart.tsx

"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { salesData } from '@/app/data/salesData';

const SalesChart = () => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2">Sales Overview</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#3182CE" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SalesChart;