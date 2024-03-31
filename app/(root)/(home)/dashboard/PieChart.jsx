"use client"

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { SectionWrapper } from "./hoc";
import 'chart.js/auto'; // This imports necessary parts of Chart.js for the pie chart

const PieChart = () => {
  const data = {
    labels: ['IT', 'Work Space', 'Work Continuity', 'Crew Composition', 'Work Method', 'Other'],
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Percent of weightage',
        data: [9.18,8.56,6.92,5.38,2.61,50.11],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weightage of factors influencing labour productivity',
      },
    },
  };

  return (
    <div className='flex items-center justify-center w-full h-[400px] px-5 my-12' >
    {/* <div className='flex items-center justify-center w-full lg:h-[400px] sm:mt-12' > */}
        <Pie data={data} options={options} />
    </div>
  );
};

// export default SectionWrapper(PieChart, "");
export default PieChart;
