import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};
const dataset = [
  {
    seoul: 21,
    month: 'Jan',
  },
  {
    seoul: 28,
    month: 'Fev',
  },
  {
    seoul: 41,
    month: 'Mar',
  },
  {
    seoul: 73,
    month: 'Apr',
  },
  {
    seoul: 99,
    month: 'May',
  },
  {
    seoul: 144,
    month: 'June',
  },
  {
    seoul: 319,
    month: 'July',
  },
  {
    seoul: 249,
    month: 'Aug',
  },
  {
    seoul: 131,
    month: 'Sept',
  },
  {
    seoul: 55,
    month: 'Oct',
  },
  {
    seoul: 48,
    month: 'Nov',
  },
  {
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value:any) => `${value}mm`;

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}