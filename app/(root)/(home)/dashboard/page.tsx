"use client"

import React, { useState } from 'react';
import PieChart from './PieChart';
import { SectionWrapper } from "./hoc";
import BarChart from './BarChart';
import { motion } from "framer-motion";
import { styles } from "./styles";
import LineChart2 from './LineChart2';
import Buttons2 from './Buttons2';
import Buttons3 from './Buttons3';
import Drop from './Drop'
// import { btns } from '../../../../constants';
// import { LineChart, Stacked } from '../dashboard3/components';



const DashBoard2 = () => {
  return (
     <section className="flex size-full flex-wrap flex-col gap-10 text-white">
      <div><Drop/></div>
      
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
          <LineChart/>
        </div>
        <div className="lg:w-1/2">
          <Stacked/>
        </div>
      </div> */}
    </section>
  );
}

// export default DashBoard;
export default SectionWrapper(DashBoard2, "dashboard");
