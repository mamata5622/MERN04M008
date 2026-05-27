import React from 'react'

function Education() {
  return (
    <div className='text-white text-center mt-20 '>
      <h1 className='text-[40px] font-bold text-sky-800'>
        Education
      </h1>
      <p className='text-gray-500 text-[18px]'>My academic journey</p>
      <div className='text-justify ml-12 mr-12 mt-20 lg:grid grid-cols-2 gap-5 lg:ml-50 lg:mr-50'>
        <div className='border rounded-xl p-5 mt-10'>
          <h2 className='text-[20px] font-bold'>Master of Computer Application (MCA)</h2>
          <p className='text-gray-500 mt-1'>College of IT & Management Education (CIME), Bhubaneswar</p>
          <p className='text-sky-700 mt-3'>2024 - Present</p>
        </div>
        <div className='border rounded-xl p-5 mt-10'>
          <h2 className='text-[20px] font-bold'>Bachelor of Computer Application (BCA)</h2>
          <p className='text-gray-500 mt-1'>College of Advance Computing (CAC), Berhampur</p>
          <p className='text-sky-700 mt-3'>2021 - 2024</p>
        </div>
        <div className='border rounded-xl p-5 mt-10'>
          <h2 className='text-[20px] font-bold'>Higher Secondary (12th/GSEB)</h2>
          <p className='text-gray-500 mt-1'>R.K Shah English Medium Higher Secondary School, Surat, Gujarat</p>
          <p className='text-sky-700 mt-3'>2021</p>
        </div>
        <div className='border rounded-xl p-5 mt-10'>
          <h2 className='text-[20px] font-bold'>Secondary (10th/GSEB)</h2>
          <p className='text-gray-500 mt-1'>R.K Shah English Medium Higher Secondary School, Surat, Gujarat</p>
          <p className='text-sky-700 mt-3'>2019</p>
        </div>
      </div>
    </div>
  )
}

export default Education