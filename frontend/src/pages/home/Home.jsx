import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center p-4 bg-gray-900'>
      <div className='flex w-full h-[550px] max-w-6xl rounded-lg overflow-hidden bg-gray-800 bg-opacity-75 backdrop-blur-lg shadow-xl'>
        <div className='flex w-full'>
          {/* Sidebar */}
          <div className='w-[300px] border-r border-gray-700 bg-gray-800/50'>
            <Sidebar />
          </div>

          {/* Message Container */}
          <div className='flex-1 bg-gray-800/30'>
            <MessageContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
