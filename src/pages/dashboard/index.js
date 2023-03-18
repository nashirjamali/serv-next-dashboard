import Card from '@/components/Card';
import Header from '@/components/Header';
import { BiTrendingUp, BiTrendingDown, BiWallet } from 'react-icons/bi';
import IncomeChart from './IncomeChart';
import LatestOrder from './LatestOrder';

export default function Dashboard() {
  return (
    <main className="bg-neutral-50 min-h-screen p-11">
      <div className="flex flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8 border-r-[1px] pr-8 min-h-screen">
          <Header />
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
          <IncomeChart />
          <LatestOrder />
        </div>
      </div>
    </main>
  );
}
