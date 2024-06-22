import React from 'react'
import { IoSend } from "react-icons/io5";


const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className="w-full relative">
        <input type="text"
        className='input input-bordered w-full'
        placeholder='send Message'
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            <IoSend />
        </button>
      </div>
    </form>
  )
}

export default MessageInput




// import React from 'react'
// import { IoSend } from "react-icons/io5";


// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//       <div className="w-full flex justify-between">
//         <input type="text"
//         className='input input-bordered w-full max-w-xs'
//         placeholder='send Message'
//         />
//         <button type='submit' className='btn btn-primary'>
//             <IoSend />
//         </button>
//       </div>
//     </form>
//   )
// }

// export default MessageInput
