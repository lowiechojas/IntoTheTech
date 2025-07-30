import React from 'react'
import webprog from '../data/webdev.json'



const WebdevTile = () => {
  return (
    <div className='flex flex-row gap-6'>
        <div className='flex flex-row flex-wrap gap-6 h-[50vh] p-4 items-center justify-around'>
            {webprog.slice(0,12).map((item) => (
                <div key={item.slug} className='bg-white p-4 rounded-lg shadow-lg shadow-cyan-200 w-[20vw] h-[12vh]
                                                hover:scale-110 cursor-pointer
                                                '>
                    <div className='flex items-center mb-2'>
                        <img src={item.favicon} alt={'${item.title}'} className='w-6 h-6 mr-2' />
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                </div>   
            ))}
         </div>
    </div>
  )
}

export default WebdevTile