import React from 'react'

function Project() {
  return (
    <div className='mt-30'>
      <h1 className="text-center text-[40px] font-bold text-sky-800">Project</h1>
      <p className="text-[18px] text-center text-gray-500">My work</p>
      {/* project container */}
      <ul className='mt-20 text-white ml-12 mr-12 lg:ml-50 lg:mr-50 grid grid-cols-2 lg:grid lg:grid-cols-3 gap-5'>
        {/* project1 */}
        <li className='border rounded-xl p-5 mt-5 bg-sky-300/10'>
          <h2 className='text-[20px] font-bold'>Blinkit Clone (Grocery Delivery Website) </h2>
          <p className='text-[15px] text-gray-500 mt-2 text-justify'>
            Designed and developed a scalable quick-commerce web application inspired by Blinkit, enabling users to browse groceries, add items to cart, place orders, and track deliveries in real time. Integrated authentication, database management, and responsive design principles to enhance user experience.
          </p>
          <ul className='flex flex-wrap text-blue-500 gap-3 mt-3 text-[15px]'>
            <li className='bg-sky-200/10 rounded-md p-1'>HTML</li>
            <li className='bg-sky-200/10 rounded-md p-1'>Tailwind CSS</li>
            <li className='bg-sky-200/10 rounded-md p-1'>JavaScript</li>
          </ul>
        </li>
        {/* project2 */}
        <li className='border rounded-xl p-5 mt-5 bg-sky-300/10'>
          <h2 className='text-[20px] font-bold'>HD Movies (Movie Website)</h2>
        </li>
        {/* project3 */}
        <li className='border rounded-xl p-5 mt-5 bg-sky-300/10'>
          <h2 className='text-[20px] font-bold'>Rental Management System</h2>
          <p className='text-[15px] text-gray-500 mt-2 text-justify'>
            Built a full-stack Vehicle Rental Management System where users can view and rent available vehicles, and admins can manage vehicles, bookings, and customer records through a dedicated admin dashboard.
          </p>
          <ul className='flex flex-wrap text-blue-500 gap-3 mt-3 text-[15px]'>
            <li className='bg-sky-200/10 rounded-md p-1'>HTML/TailwindCSS/JS</li>
            <li className='bg-sky-200/10 rounded-md p-1'>React.js</li>
            <li className='bg-sky-200/10 rounded-md p-1'>MongoDB</li>
            <li className='bg-sky-200/10 rounded-md p-1'>Node.js</li>

          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Project