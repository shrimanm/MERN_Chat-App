import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {
   const {loading, conversations} = useGetConversation();

   return (
    <div className='flex flex-col space-y-2 overflow-y-auto'>
      {loading ? (
        <div className='flex items-center justify-center h-full'>
          <div className='w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
        </div>
      ) : (
        conversations.map((conversation, idx) => (
          <Conversation 
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length-1}
          />
        ))
      )}
    </div>
   )
}

export default Conversations
