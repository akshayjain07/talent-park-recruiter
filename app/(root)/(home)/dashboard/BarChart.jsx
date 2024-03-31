// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto'; // Chart.js v3 requires this auto import to register controllers, elements, scales, and plugins.

// const BarChartComponent = () => {
//   const data = {
//     labels: ['Akshay', 'Akash', 'Sohith', 'Abhay', 'Ashutosh', 'Atul', 'Aditya', 'Sudhanshu'],
//     datasets: [
//       {
//         label: 'My First Dataset',
//         data: [87,78,75,71,67,61,59,55],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(199, 199, 199, 0.2)',
//           'rgba(255, 99, 132, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(199, 199, 199, 1)',
//           'rgba(255, 99, 132, 1)',
//         ],
//         borderWidth: 1
//       }
//     ]
//   };

//   const options = {
//     indexAxis: 'x', // Set to 'x' for vertical bars
//     elements: {
//       bar: {
//         borderWidth: 2,
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Parameters',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Pearson Correlation',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//       },
//       title: {
//         display: true,
//         text: 'Top 5 Factors Influencing Labour Productivity',
//         font: {
//           size: 18,
//         },
//       },
//     },
//     responsive: true,
//     // maintainAspectRatio: false,
//   };

//   return (
//     <div className='flex items-center justify-center w-full h-[800px] px-5 lg:px-32 my-12' >
//       <Bar data={data} options={options} className='h-[800px]' />
//     </div>
//   );
// };

// export default BarChartComponent;



// "use client"
// import { React,useRef,useEffect } from "react"
// import { Chart } from "chart.js/auto"

// const BarChart = () => {
//   const chartRef = useRef(null)

//   useEffect(()=>{
//     if (chartRef.current) {
//       if(chartRef.current.Chart){
//         chartRef.current.chart.destroy()
//       }

//       const context = chartRef.current.getContext("2d");

//       const newChart = new Chart(context,{
//         type:"bar",
//         data: {
//           labels:["John","Jane","Doe"],
//           datasets:[
//             {
//               label:"Info",
//               data: [34,64,23],
//               backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(199, 199, 199, 0.2)',
//                 'rgba(255, 99, 132, 0.2)',
//               ],
//               borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(199, 199, 199, 1)',
//                 'rgba(255, 99, 132, 1)',
//               ],
//                borderWidth: 1
//             },
//           ],
//         },

//         options : {
//           responsive:true,
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: 'Parameters',
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: 'Pearson Correlation',
//               },
//             },
//           },
//         }
//       });
//       chartRef.current.chart = newChart
//     }
//   },[])
//   return (
//     <div style={{position:"relative", width:"90vw",height:"80vh"}}>
//       <canvas ref={chartRef}/>
//     </div>
//   )
// }

// export default BarChart

// import React, { useRef, useEffect } from "react";
// import Chart from "chart.js/auto";

// const BarChart = () => {
//   const chartRef = useRef(null); // For the canvas DOM element
//   const chartInstanceRef = useRef(null); // For storing the Chart.js instance

//   useEffect(() => {
//     const context = chartRef.current.getContext("2d");

//     // Destroy the previous chart to prevent memory leaks
//     if (chartInstanceRef.current) {
//       chartInstanceRef.current.destroy();
//     }

//     // Create a new chart instance
//     chartInstanceRef.current = new Chart(context, {
//       type: "bar",
//       data: {
//         labels: ["John", "Jane", "Doe"],
//         datasets: [
//           {
//             label: "Info",
//             data: [34, 64, 23],
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//               'rgba(199, 199, 199, 0.2)',
//               'rgba(255, 99, 132, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//               'rgba(199, 199, 199, 1)',
//               'rgba(255, 99, 132, 1)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio:false,
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Parameters',
//             },
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Value',
//             },
//             beginAtZero: true, // Ensures that the y-axis starts from 0
//           },
//         },
//       },
//     });

//     // Cleanup function to destroy chart instance on component unmount
//     return () => {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy();
//       }
//     };
//   }, []); // Add dependencies here if your chart data or options depend on props or state

//   return (
//     <div className='flex items-center justify-center px-5 lg:px-32 my-12' style={{height: "400px" }}>
//     {/* <div style={{ position: "relative", width: "30vw" }}> */}
//       <canvas ref={chartRef} />
//     </div>
//   );
// };

// export default BarChart;


import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // Sample data for the factors
  const data = {
    labels: ['IT', 'Work Space', 'Work Continuity', 'Crew Composition', 'Work Method', 'Others'],
    datasets: [
      {
        label: 'Pearson Correlation',
        data: [0.604, 0.544, 0.540, 0.515, 0.497, 0.380],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)' // Added 6th background color
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)' // Added 6th border color
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: 'x', // Set to 'x' for vertical bars
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Parameters',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Pearson Correlation',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Top 5 Factors Influencing Labour Productivity',
        font: {
          size: 18,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className='flex items-center justify-center w-full h-[400px] px-5 my-12' style={{height: "400px" }}>
    {/* <div className='flex items-center justify-center w-full h-[400px] px-5 lg:px-32 my-12' > */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
