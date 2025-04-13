import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full bg-gray-800/40 backdrop-blur-lg'>
      <div className='p-4 flex flex-col h-full'>
        <div className='mb-4'>
          <SearchInput />
        </div>
        <div className='h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-20 my-4'></div>
        <div className='flex-1 overflow-hidden'>
          <Conversations />
        </div>
        <div className='pt-4 border-t border-gray-700/50'>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
