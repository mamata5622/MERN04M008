import React from 'react'

function Card(props) {
  return (
    <div className='w-70 border p-2 rounded-2xl'>
        <img src={props?.animal?.img} alt="" className='w-full rounded-xl hover:scale-105 transition-all duration-300 mb-3 h-70 '/>
        <strong className='text-yellow-500'>{props?.animal?.title}</strong>
        <p className='text-gray-300'>{props?.animal?.desc}</p>
        <button className='bg-purple-500 rounded-sm p-1 m-2 font-bold text-purple-900 border border-purple-400 '>{props?.animal?.btn}</button>
    </div>
        
  )
}

export default Card