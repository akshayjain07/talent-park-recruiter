import React from 'react'
import aj from '../../../../public/icons/add-personal.svg';

const ResumeScanATS = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Resume Scan ATS</h1>
      <h2 className="text-xl">Add Resume to scan</h2>
      <img src={aj} alt="+" className="absolute bottom-0 right-0 mb-4 mr-4" style={{ width: '50px', height: '50px' }} />
    </section>
  )
}

export default ResumeScanATS