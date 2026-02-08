"use client";
import { Bar, BarChart, CartesianGrid, Legend,  XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import listitem from "./apiListitems";
import { useState } from "react";

const BarChartitems = () => {

    const [selectedYear, setSelectedYear] = useState(2026);

    
  const chartConfig = {
    income: {
      label: "Income",
      color: "#4CAF50", // สีเขียว
    },
    expense: {
      label: "Expense",
      color: "#F44336", // สีแดง
    },
  };

  
  // ✅ กำหนดปีที่มีให้เลือก (mock ตอนนี้)
  const availableYears = [2024, 2025, 2026];

  // ✅ จัดกลุ่มข้อมูลตามเดือน
  const monthlyData: { [key: string]: { income: number; expense: number } } = {};
  listitem.forEach((item) => {
    if (!monthlyData[item.month]) {
      monthlyData[item.month] = { income: 0, expense: 0 };
    }
    monthlyData[item.month][item.type] += item.amount;
  });

  // ✅ เรียงเดือนตามลำดับ
  const monthOrder = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    const chartData = monthOrder
    .filter(month => monthlyData[month])
    .map(month => ({
      month,
      ...monthlyData[month],
    }));

  return (
    <>
     <div className="mb-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">กราฟรายรับ-รายจ่าย</h3>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2 bg-white"
        >
          {availableYears.map((year) => (
            <option key={year} value={year}>
              ปี {year}
            </option>
          ))}
        </select>
      </div>

      <ChartContainer config={chartConfig} className="min-h-100 w-full">
        <BarChart
        data={chartData}
        width={700}
        height={400}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
        dataKey="month" 
        />
        <YAxis 
        tickFormatter={(value) => `$${value.toLocaleString()}`} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />

        <Bar
        dataKey="income"
        fill={chartConfig.income.color}
        />
        <Bar
        dataKey="expense"
        fill={chartConfig.expense.color}
        />
        </BarChart>


      </ChartContainer>


    </>
  );
};
export default BarChartitems;
