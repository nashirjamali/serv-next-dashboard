import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function GradientMultiAreaChart({ gradientColors, seriesData }) {
  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(0)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    } else {
      return value;
    }
  };
  const options = {
    chart: {
      height: '100%',
      width: '100%',
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: gradientColors,
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: seriesData?.labels || [],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        formatter: formatValue,
        offsetY: 5,
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        formatter: formatValue,
        offsetX: -20,
      },
    },
    legend: {
      show: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
  };

  const series = seriesData?.series || [];

  return (
    <Chart options={options} series={series} type="area" height={'100%'} />
  );
}
