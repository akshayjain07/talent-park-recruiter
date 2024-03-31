"use client"

import React, { useState } from 'react';
import PieChart from './PieChart';
import { SectionWrapper } from "./hoc";
import BarChart from './BarChart';
import LineChart from './LineChart';
import { motion } from "framer-motion";
import { styles } from "./styles";
import LineChart2 from './LineChart2';
import Buttons2 from './Buttons2';
import Buttons3 from './Buttons3';

const DashBoard2 = () => {

  // // // prop for buttons 
  // const [selectedButton, setSelectedButton] = useState('Parameter'); // State to hold selected button

  // const handleButtonsClick = (btnTitle) => {
  //   setSelectedButton(btnTitle); // Update state with selected button
  // };

  // // prop for button 
  // const [clicked, setClicked] = useState(false);

  // const handleButtonClick = (isClicked) => {
  //   console.log(clicked);
  //   setClicked(true); // Handle the clicked prop as needed
  //   console.log(clicked);
  // };

  return (
     <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">DashBoard</h1>
      <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
        <div className="lg:w-1/2">
          <BarChart />
        </div>
        <div className="lg:w-1/2">
          <PieChart />
        </div>
      </div>

      {/* <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
        <div className="lg:w-1/2">
          <LineChart2 selectedButton={selectedButton} /> 
        </div>
        <div className="lg:w-1/2">
          <Buttons3 onButtonClick={handleButtonsClick} /> 
        </div>
      </div>
      
      <div className="mx-5 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 ">
        <div className="lg:w-1/2">
          <LineChart clicked={clicked}/>
        </div>
        <div className="lg:w-1/2">
          <Buttons2 onSubmit={handleButtonClick}/>
        </div>
      </div> */}
    </section>
  );
}

// export default DashBoard;
export default SectionWrapper(DashBoard2, "dashboard");
