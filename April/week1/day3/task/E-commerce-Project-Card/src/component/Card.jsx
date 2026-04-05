import React from 'react'

function Card(props) {
  return (
    <div className='border rounded-xl'>
        <img src={props?.vegetable?.img} alt="" className='rounded-xl border p-2' width={300}/>
        <p className='text-white '>{props?.vegetable?.title}</p>
        <span>{props?.vegetable?.weight}</span>
        <div className='flex justify-around'>
            <p className='text-white'>{props?.vegetable?.price}</p>
            <button className='border p-1 pl-2 pr-2 rounded bg-purple-700 font-bold text-white mb-2'>{props?.vegetable?.btn}</button>
        </div>
    </div>
  )
}

export default Card