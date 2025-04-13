import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { FaCalendarAlt, FaClock } from 'react-icons/fa' // Add this import

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'justify-end' : 'justify-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  
  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = formatDateTime(message.createdAt);
  
  return (
    <div className={`flex ${chatClassName} items-end gap-2 mb-4 animate-fade-in`}>
      {!fromMe && (
        <div className="flex-shrink-0 group">
          <img 
            src={profilePic} 
            className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-700/50 group-hover:ring-blue-500/50 transition-all duration-300"
            alt="profile" 
          />
        </div>
      )}
      
      <div className={`flex flex-col ${fromMe ? 'items-end' : 'items-start'}`}>
        <div 
          className={`px-4 py-2 rounded-2xl max-w-xs lg:max-w-md break-words shadow-lg
            ${fromMe ? 
              'bg-gradient-to-br from-blue-500 to-blue-600 rounded-br-none hover:from-blue-600 hover:to-blue-700' : 
              'bg-gradient-to-br from-gray-600 to-gray-700 rounded-bl-none hover:from-gray-700 hover:to-gray-800'
            } transition-all duration-300`}
        >
          <p className='text-white/90 font-medium'>{message.message}</p>
        </div>
        <div className={`flex items-center gap-2 mt-1 ${fromMe ? 'flex-row-reverse' : 'flex-row'}`}>
          <span className='text-xs text-gray-400 flex items-center gap-1'>
            <FaCalendarAlt className="w-3 h-3" />
            {formattedDate}
            <FaClock className="w-3 h-3 ml-1" />
            {formattedTime}
          </span>
          {fromMe && (
            <span className="text-xs text-blue-400">
              ✓✓
            </span>
          )}
        </div>
      </div>

      {fromMe && (
        <div className="flex-shrink-0 group">
          <img 
            src={profilePic} 
            className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-700/50 group-hover:ring-blue-500/50 transition-all duration-300"
            alt="profile" 
          />
        </div>
      )}
    </div>
  )
}

export default Message
