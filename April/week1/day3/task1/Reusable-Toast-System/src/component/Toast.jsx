import React from 'react'

function Toast() {
  return (
    <>
    <div className='border mt-20 ml-20 mr-20 flex justify-between p-8 rounded-md text-green-500 bg-green-500/10 '>
      <div>
        <p className='text-[20px]'>Success toast message</p>
      </div>
      <button className='text-[20px]'>X</button>
    </div>

    <div className='border mt-20 ml-20 mr-20 flex justify-between p-8 rounded-md text-red-500 bg-red-500/10'>
      <div>
        <p className='text-[20px]'>Error toast message</p>
      </div>
      <button className='text-[20px]'>X</button>
    </div>

    <div className='border mt-20 ml-20 mr-20 flex justify-between p-8 rounded-md bg-black'>
      <p className='text-[20px]'>An error occurred</p>
      <button className='text-[20px]'>X</button>
    </div>
    </>
    
    
  )
}

export default Toast