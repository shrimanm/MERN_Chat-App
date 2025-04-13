import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'

const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className='flex flex-col h-full p-4 overflow-y-auto'>
      {loading && [...Array(3)].map((_, idx) => (
        <MessageSkeleton key={idx} />
      ))}

      {!loading && messages.length === 0 && (
        <div className='flex items-center justify-center h-full'>
          <p className='text-gray-400 text-center bg-gray-800/40 px-4 py-2 rounded-lg'>
            Send a message to start the conversation
          </p>
        </div>
      )}

      {!loading && messages.length > 0 && (
        <div className='space-y-4'>
          {messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Messages;
