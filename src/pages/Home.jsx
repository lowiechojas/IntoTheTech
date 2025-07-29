import React from 'react'
import bgElec from '../assets/electronics.png'
import TopicItem from '../components/TopicItem'
import TopicScroller from '../components/TopicScroller'

const Home = () => {
  return (
    <div className='flex flex-col items-center h-screen text-white z-49'>
        <div className='flex flex-col bg-[#1C0966] items-center justify-center w-full h-[10vw]'>
            <h1 className='text-6xl'>Learn something new today</h1>
        </div>

        <div  className='flex text-black items-center justify-center bg-cover bg-center w-full h-[40vh]
        opacity-60'
                style={{ backgroundImage: `url(${bgElec})` }}>
                    <TopicScroller />
        </div>

    </div>
  )
}

export default Home