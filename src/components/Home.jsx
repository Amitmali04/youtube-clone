import React from 'react'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <Sidebar />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto'>
        Home
      </div>
    </div>
  )
}

export default Home
