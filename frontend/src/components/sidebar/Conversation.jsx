import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx}) => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  const {onlineUsers} = useSocketContext();
  
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
      <div 
        className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-700/50
          ${isSelected ? 'bg-blue-500/80 hover:bg-blue-500/80' : ''}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className='relative'>
          <img 
            src={conversation.profilePic} 
            alt='user avatar'
            className='w-12 h-12 rounded-full object-cover border-2 border-gray-700'
          />
          {isOnline && (
            <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800'></span>
          )}
        </div>
        
        <div className='flex flex-col flex-1 overflow-hidden'>
          <h3 className={`font-semibold truncate ${isSelected ? 'text-white' : 'text-gray-200'}`}>
            {conversation.fullName}
          </h3>
          <p className={`text-sm truncate ${isSelected ? 'text-white/90' : 'text-gray-400'}`}>
            {/* Add status or last message here if needed */}
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>

      {!lastIdx && <div className='h-px bg-gray-700/50 my-2'></div>}
    </>
  )
}

export default Conversation
