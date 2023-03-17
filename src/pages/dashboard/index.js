import Card from '@/components/Card';
import Header from '@/components/Header';
import { BiTrendingUp, BiTrendingDown, BiWallet } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import GradientMultiAreaChart from '@/components/GradientMultiAreaChart';
import Select from '@/components/Select';

export default function Dashboard() {
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
    <main className="bg-neutral-50 min-h-screen p-11">
      <div className="flex flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8 border-r-[1px] pr-8 min-h-screen">
          <Header />

          {/* Cards */}
          <div className="flex flex-row gap-6 justify-between">
            <Card>
              <div className="bg-green-100 text-green-500 rounded-md w-9 h-9 flex justify-center items-center">
                <BiTrendingUp size={24} />
              </div>
              <p className="font-semibold text-neutral-800 text-2xl mt-5">
                Rp32.520.125
              </p>
              <p className="font-normal text-neutral-500 mt-1">Total Income</p>
            </Card>

            <Card>
              <div className="bg-red-100 text-red-500 rounded-md w-9 h-9 flex justify-center items-center">
                <BiTrendingDown size={24} />
              </div>
              <p className="font-semibold text-neutral-800 text-2xl mt-5">
                Rp12.205.100
              </p>
              <p className="font-normal text-neutral-500 mt-1">
                Total Withdraw
              </p>
            </Card>

            <Card>
              <div className="bg-blue-100 text-blue-500 rounded-md w-9 h-9 flex justify-center items-center">
                <BiWallet size={24} />
              </div>
              <p className="font-semibold text-neutral-800 text-2xl mt-5">
                Rp20.315.025
              </p>
              <p className="font-normal text-neutral-500 mt-1">Total Balance</p>
            </Card>
          </div>

          {/* Income chart */}
          <Card>
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-lg text-neutral-800">
                Your Income
              </p>
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
        </div>
      </div>
    </main>
  );
}
