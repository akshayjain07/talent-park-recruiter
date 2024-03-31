"use client"

import React, { useState } from 'react';

const backgroundColors = [
  'rgba(255, 99, 132, 0.2)',
];
const borderColors = [
  'rgba(255, 99, 132, 1)',
];

const Buttons2 = ({onSubmit}) => {
  const [numLabours, setNumLabours] = useState('');
  const [numArea, setNumArea] = useState('');
  const [output, setOutput] = useState('0 Months'); // Set default value to "0 Months"

  const handleChangeLabours = (event) => {
    setNumLabours(event.target.value);
  };

  const handleChangeArea = (event) => {
    setNumArea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Calculate the estimate time based on both area and number of labours
    const estimateTime = (parseFloat(numLabours) * 0.78).toFixed(1);
    // Set the output with one decimal place
    setOutput("Can't react the server");
    // setOutput(`${estimateTime} Months`);
    onSubmit(); // Invoke the onSubmit callback
    console.log("I am submitted !!");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <input
          type="number"
          value={numLabours}
          onChange={handleChangeLabours}
          placeholder="No. of Labours"
          className="py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center" // Center align the text
        />
        <input
          type="number"
          value={numArea}
          onChange={handleChangeArea}
          placeholder="Area of Site"
          className="py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center" // Center align the text
        />
        {backgroundColors.map((bgColor, index) => (
          <button
            type="submit"
            key={index}
            style={{ backgroundColor: bgColor, borderColor: borderColors[index], borderWidth: 2 }}
            className="text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <p>Estimate Time</p>
          </button>
        ))}
      </form>
      <div className="text-white bg-gray-800 py-2 px-4 rounded-lg shadow-md ">
        {output}
      </div>
    </div>
  );
};

export default Buttons2;
