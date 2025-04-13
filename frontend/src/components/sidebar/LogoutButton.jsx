import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
    const {loading, logout} = useLogout();
    
    return (
      <div className='flex justify-center'>
        {!loading ? (
          <button 
            onClick={logout}
            className='flex items-center gap-2 text-gray-300 hover:text-red-500 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-red-500/10'
          >
            <RiLogoutBoxLine className='w-5 h-5' />
            <span className='text-sm font-medium'>Logout</span>
          </button>
        ) : (
          <div className='p-2'>
            <div className='w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
          </div>
        )}
      </div>
    )
}

export default LogoutButton
