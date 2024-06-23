import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';


const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;

    if(search.length < 3){
      return toast.error("Search term must be atleast 3 characters long")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch("");
    }else{
      toast.error("No users found")
    }
  }

  return (
    <form className='flex items-center- gap-2' onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' className="input input-bordered rounded-full" />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-5 h-5 outline-none'/>
      </button>
    </form>
  )
}

export default SearchInput



// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";


// const SearchInput = () => {
//   return (
//     <form className='flex items-center- gap-2'>
//       <input type="text" placeholder='Search...' className="input input-bordered rounded-full" />
//       <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//         <IoSearchSharp className='w-5 h-5 outline-none'/>
//       </button>
//     </form>
//   )
// }

// export default SearchInput
