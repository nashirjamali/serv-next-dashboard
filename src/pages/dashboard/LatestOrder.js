import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { FiChevronRight } from 'react-icons/fi';
import Table from '@/components/Table';
import Image from 'next/image';

export default function LatestOrder() {
  const [data, setData] = useState([]);
  const headers = ['Date', 'Client Name', 'Amount', 'Status', 'Service Name'];

  const columns = [
    {
      name: 'date',
      render: (value) => {
        const date = new Date(value);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
        return formattedDate;
      },
    },
    {
      name: 'client_name',
      render: (value, data) => {
        return (
          <span className="flex flex-row gap-2 items-center">
            <Image
              className="rounded-full"
              width={24}
              height={24}
              alt={'client'}
              src={data.client_photo}
            />
            {value}
          </span>
        );
      },
    },
    {
      name: 'amount',
      render: (value) => {
        const formattedNumber = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(value);
        return formattedNumber;
      },
    },
    {
      name: 'status',
      render: (value) => {
        let className = 'text-neutral-800';

        switch (value) {
          case 'progress':
            className = 'text-yellow-400';
            break;
          case 'complete':
            className = 'text-green-600';
            break;
          case 'cancel':
            className = 'text-red-600';
            break;
          default:
            break;
        }

        return (
          <span className={className}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        );
      },
    },
    {
      name: 'service_name',
      render: (value) => {
        return value;
      },
    },
  ];

  const fetchData = async () => {
    const response = await fetch('/api/latestOrder');
    const responseJson = await response.json();
    setData(responseJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      <div className="flex flex-row justify-between">
        <p className="font-semibold text-lg text-neutral-800">Latest Order</p>
        <button className="border-[1px] rounded-lg py-2 px-3 text-neutral-600 font-semibold text-sm flex items-center hover:bg-neutral-100">
          View All{' '}
          <span className="ml-2">
            <FiChevronRight size={24} />
          </span>
        </button>
      </div>
      <div className="h-80 w-full mt-8 border-t-[1px] pt-6">
        <Table headers={headers} data={data} columns={columns} />
      </div>
    </Card>
  );
}
