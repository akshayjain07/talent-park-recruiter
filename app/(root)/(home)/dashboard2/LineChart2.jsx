"use client"

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { btns } from '../../../../constants';

const generateRandomData = () => {
  // Define possible arrays
  const arrays = [
  [20, 17, 16, 13, 9, 8, 6, 5, 4, 2, 0],
  [20, 19, 14, 10, 9, 7, 6, 5, 4, 2, 0],
  [20, 17, 14, 11, 9, 7, 6, 5, 4, 2, 0],
  [20, 18, 15, 12, 9, 7, 6, 5, 4, 2, 0],
  [20, 16, 13, 12, 9, 7, 6, 5, 4, 3, 0],
  [20, 17, 14, 11, 10, 7, 6, 5, 4, 2, 0],
  [20, 17, 15, 12, 9, 7, 6, 5, 4, 2, 1],
  [20, 19, 15, 11, 9, 7, 6, 5, 4, 3, 0],
  [20, 17, 14, 11, 10, 8, 6, 5, 4, 3, 0],
  [20, 18, 15, 12, 10, 7, 6, 5, 4, 3, 0]
];

  // Generate random index
  const randomIndex = Math.floor(Math.random() * arrays.length);

  // Return the randomly selected array
  return arrays[randomIndex];
};

const LineChart2 = ({ selectedButton }) => {

  useEffect(() => {
    // Generate random data when selectedButton changes
    const randomData = generateRandomData();
    setData(prevData => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: randomData,
        },
      ],
    }));
  }, [selectedButton]);


  const [data, setData] = useState({
    labels: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
    datasets: [
      {
        // label: selectedButton,
        label: "Parameter vs Productivity",
        data: [],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Productivity (in numbers)',
        },
      },
      x: {
        title: {
          display: true,
          text: selectedButton,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: `${selectedButton} and Productivity Estimation`,
      },
      annotation: {
        annotations: {
          point1: {
            type: 'point',
            xValue: 2,
            yValue: 3,
            backgroundColor: 'red',
            radius: 10,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='flex items-center justify-between w-full h-[400px] px-5 my-12' >
      <Line data={data} options={options} />
    </div>    
  );
};

export default LineChart2;
