import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const {loading,login} = useLogin();

const handleSubmit = async (e) => {
  e.preventDefault();
  await login(username,password)
}

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
        <span className='text-blue-500'>ChatApp</span>
        </h1>
        
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='input input-bordered w-full max-w-xs'
                onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='input input-bordered w-full max-w-xs'
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div>
                <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                  {loading ? <span className='loading loading-spinner'></span> : "Login"}
                  </button>
            </div>
            <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account?
            </Link>
        </form>
      </div>
    </div>
  )
}

export default Login



// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Login
//         <span className='text-blue-500'>ChatApp</span>
//         </h1>
        
//         <form>
//             <div>
//                 <label htmlFor="" className='label p-2'>
//                     <span className="text-base label-text">Username</span>
//                 </label>
//                 <input type="text" placeholder='Enter Username' className='input input-bordered w-full max-w-xs'/>
//             </div>

//             <div>
//                 <label htmlFor="" className='label p-2'>
//                     <span className="text-base label-text">Password</span>
//                 </label>
//                 <input type="password" placeholder='Enter Password' className='input input-bordered w-full max-w-xs'/>
//             </div>

//             <div>
//                 <button className='btn btn-block btn-sm mt-2'>Login</button>
//             </div>
//             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                 {"Don't"} have an account?
//             </a>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
