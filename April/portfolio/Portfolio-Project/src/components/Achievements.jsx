import React from 'react'

function Achievements() {
  return (
    <div className='mt-30 text-white'>
        <h2 className="text-center text-[40px] font-bold text-sky-800">Achievements & Experience</h2>
        <div className='mt-20 text-white ml-12 mr-12 lg:ml-50 lg:mr-50 grid grid-cols-2 gap-5'>
            <div className=''>
                <p className='text-[20px] font-semibold'>Certifications</p>
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
            <div className=''>
                <p className='text-[20px] font-semibold'>Internships</p>
                <ul className='mt-10'>
                    <li className='border p-5 rounded-xl'>
                        <h2 className='text-[20px] font-bold'>C-DAC, Noida</h2>
                        <p className='text-[15px] mt-1'>Under Ministry of Electronics & IT, Government of India</p>
                        <p className='text-gray-500 mt-10'>Ethical Hacking & Penetration Testing (Cyber Gyan Project)</p>
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Achievements