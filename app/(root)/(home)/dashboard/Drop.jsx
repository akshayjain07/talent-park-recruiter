import React, { useState } from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Buttons3 from './Buttons3';

const Drop = () => {
      const dropdownData = [
        {
        Id: '1',
        Time: 'Today',
        },
        {
        Id: '2',
        Time: 'Yesterday',
        }, 
        {  
        Id: '3',
        Time: 'Select Date',
        },
    ];
    
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
    const [selectedItem, setSelectedItem] = useState('Today'); // State to manage selected item


    const DropDown = () => (
        <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
        </div>
    );

  return (
    <>
    <div className='flex justify-between items-center gap-2'>
      {/* <div className='flex flex-row justify-between'> */}
        <div className="text-3xl font-bold">DashBoard</div>
        {/* <DropDown /> */}
        <div className="relative">
      {/* Button to toggle dropdown */}
     <button
        onMouseOver={() => setIsOpen(true)} // Open dropdown on mouse over
        onClick={() => setIsOpen(false)} // Close dropdown on mouse out
        className="w-28 border-2 text-white font-bold py-1 px-2 rounded-md"
      >
      {selectedItem}
      </button>
      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute top-full z-10 border-2 bg-black shadow-md mt-1 py-1 w-28 bg-white">
          {dropdownData.map((item) => (
            <div
              key={item.Id}
              className="px-2 py-1 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setSelectedItem(item.Time); // Update selected item
                setIsOpen(false); // Close dropdown
              }}
            >
              {item.Time}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>

    <div className="flex flex-wrap justify-center p-5 text-3xl font-semibold ">Interviewed {selectedItem} </div>

      <div>
        {/* <Buttons2/> */}
        <Buttons3/>
      </div>
    </>
  )
}

export default Drop