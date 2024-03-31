"use client"
import React, { useState } from 'react';
import aj from './add-personal.svg'

const UploadModal = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = () => {
    // Handle file upload logic here
    console.log('File uploaded:', file);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-700 bg-opacity-50">
      <div className=" p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Upload</button>
      </div>
    </div>
  );
};

const ResumeScanATS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Resume Scan ATS</h1>
      <h2 className="text-xl">Add Resume to scan</h2>
      <img src={aj} alt="+" className="absolute bottom-0 right-0 mb-4 mr-4 cursor-pointer" style={{ width: '50px', height: '50px' }} onClick={handleImageClick} />
      {isModalOpen && <UploadModal onClose={handleCloseModal} />}
    </section>
  );
};

export default ResumeScanATS;
