import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Signup <span className='text-blue-500'>ChatApp</span>
            </h1>
        
        <form action="">
        <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Fullname</span>
                </label>
                <input type="text" placeholder='Enter Fullname' className='input input-bordered w-full max-w-xs'/>
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='input input-bordered w-full max-w-xs'/>
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='input input-bordered w-full max-w-xs'/>
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder='Confirm Password' className='input input-bordered w-full max-w-xs'/>
            </div>
            {
                <GenderCheckBox />
            }
            
            <div>
                <button className='btn btn-block btn-sm mt-2'>SignUp</button>
            </div>
            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </a>
        </form>
        </div>
    </div>
  )
}

export default SignUp



// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Signup <span className='text-blue-500'>ChatApp</span>
//             </h1>
        
//         <form action="">
//         <div>
//                 <label htmlFor="" className='label p-2'>
//                     <span className="text-base label-text">Fullname</span>
//                 </label>
//                 <input type="text" placeholder='Enter Fullname' className='input input-bordered w-full max-w-xs'/>
//             </div>
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
//                 <label htmlFor="" className='label p-2'>
//                     <span className="text-base label-text">Confirm Password</span>
//                 </label>
//                 <input type="password" placeholder='Confirm Password' className='input input-bordered w-full max-w-xs'/>
//             </div>
//             {
//                 <GenderCheckBox />
//             }
            
//             <div>
//                 <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//             </div>
//             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                 Already have an account?
//             </a>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp
