import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='flex flex-col h-full'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Chat Header */}
          <div className="bg-gray-800/60 border-b border-gray-700/50">
            <div className="flex items-center gap-3 p-4">
              <img 
                src={selectedConversation.profilePic} 
                alt="profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className='font-semibold text-gray-200'>{selectedConversation.fullName}</h3>
                <p className='text-sm text-gray-400'>Online</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className='flex-1 overflow-y-auto'>
            <Messages />
          </div>

          {/* Message Input */}
          <div className='mt-auto border-t border-gray-700/50'>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  )
}

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center h-full bg-gray-800/20">
      <div className="px-4 text-center space-y-3">
        <h3 className='text-2xl font-semibold text-gray-300'>
          Welcome, {authUser.fullName} 👋
        </h3>
        <p className='text-gray-400'>Select a chat to start messaging</p>
        <TiMessages className='w-16 h-16 text-blue-500/80 mx-auto mt-4'/>
      </div>
    </div>
  )
}

export default MessageContainer;
