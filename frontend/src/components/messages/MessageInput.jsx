import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className='px-4 py-4 bg-gray-800/40' onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <input 
          type="text"
          className='w-full px-4 py-3 bg-gray-700/50 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-12 placeholder-gray-400'
          placeholder='Type your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button 
          type='submit' 
          className='absolute right-2 p-2 text-blue-500 hover:text-blue-400 transition-colors disabled:opacity-50'
          disabled={loading}
        >
          {loading ? (
            <div className='w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'/>
          ) : (
            <IoSend className='w-5 h-5'/>
          )}
        </button>
      </div>
    </form>
  )
}

export default MessageInput;
