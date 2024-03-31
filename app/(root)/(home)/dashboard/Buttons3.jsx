"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { btns } from '../../../../constants';
import { SectionWrapper } from './hoc';

const Button = ({ btnTitle, backgroundColor, borderColor, onClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className=""
  >
    <button
      style={{ backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: 2 }}
      className="text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      onClick={() => onClick(btnTitle)}
    >
      {btnTitle}
    </button>
  </motion.div>
);
  
const Buttons3 = ({ onButtonClick }) => { // Receive onButtonClick prop
    const handleButtonClick = (btnTitle) => {
      // Lift btnTitle up to the parent component
      console.log(`Button "${btnTitle}" clicked!`);
      onButtonClick(btnTitle);
  };

  return (
    <>
    <div className="flex flex-wrap justify-center gap-4 p-5">
      {btns.map((btn, index) => (
        <Button key={btn.btnTitle} {...btn} />
        // <Button key={btn.btnTitle} onClick={handleButtonClick} {...btn} />
      ))}
    </div>
    </>
  );
};

// export default SectionWrapper(Buttons3,'button3')
export default Buttons3;
