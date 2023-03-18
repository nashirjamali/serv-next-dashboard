import React, { useState, useEffect } from 'react';
import GradientMultiAreaChart from '@/components/GradientMultiAreaChart';
import Card from '@/components/Card';
import Select from '@/components/Select';

export default function IncomeChart() {
  const [chartData, setChartData] = useState({});
  const [chartSelection, setChartSelection] = useState('week');

  const fetchMonthsData = async () => {
    const response = await fetch('/api/chartMonths');
    const data = await response.json();

    const labels = [];
    const incomes = [];
    const withdraws = [];

    data.forEach((itemData) => {
      labels.push(itemData.month);
      withdraws.push(itemData.withdraw);
      incomes.push(itemData.income);
    });

    setChartData({
      labels: labels,
      series: [
        {
          name: 'Income',
          data: incomes,
        },
        {
          name: 'Withdraw',
          data: withdraws,
        },
      ],
    });
  };

  const fetchDaysData = async () => {
    const response = await fetch('/api/chartDays');
    const data = await response.json();

    const labels = [];
    const incomes = [];
    const withdraws = [];

    data.forEach((itemData) => {
      labels.push(itemData.day);
      withdraws.push(itemData.withdraw);
      incomes.push(itemData.income);
    });

    setChartData({
      labels: labels,
      series: [
        {
          name: 'Income',
          data: incomes,
        },
        {
          name: 'Withdraw',
          data: withdraws,
        },
      ],
    });
  };

  useEffect(() => {
    if (chartSelection == 'year') {
      fetchMonthsData();
    } else {
      fetchDaysData();
    }
  }, [chartSelection]);

  const gradientColors = ['#2C5BF7', '#FFD6AD'];

  return (
    <Card>
      <div className="flex flex-row justify-between">
        <p className="font-semibold text-lg text-neutral-800">Your Income</p>
        <Select
          options={[
            { value: 'week', label: 'This Week' },
            { value: 'year', label: 'This Year' },
          ]}
          onChange={(value) => setChartSelection(value)}
        />
      </div>
      <div className="h-80 w-full mt-8 border-t-[1px] pt-6">
        <GradientMultiAreaChart
          gradientColors={gradientColors}
          seriesData={chartData}
        />
      </div>
    </Card>
  );
}
