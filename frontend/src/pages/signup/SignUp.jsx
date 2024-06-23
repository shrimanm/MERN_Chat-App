import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

    const [inputs,setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    });

    const {loading,signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
        
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Signup <span className='text-blue-500'>ChatApp</span>
            </h1>
        
        <form action="" onSubmit={handleSubmit}>
        <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Fullname</span>
                </label>
                <input type="text" value={inputs.fullName} placeholder='Enter Fullname' className='input input-bordered w-full max-w-xs'
                onChange={(e) => setInputs({...inputs,fullName:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" value={inputs.username} placeholder='Enter Username' className='input input-bordered w-full max-w-xs'
                onChange={(e) => setInputs({...inputs,username:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" value={inputs.password} placeholder='Enter Password' className='input input-bordered w-full max-w-xs'
                onChange={(e) => setInputs({...inputs,password:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="" className='label p-2'>
                    <span className="text-base label-text">Confirm Password</span>
                </label>
                <input type="password" value={inputs.confirmPassword} placeholder='Confirm Password' className='input input-bordered w-full max-w-xs'
                onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}/>
            </div>
            {
                <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />
            }
            
            <div>
                <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
            </div>
            <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </Link>
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
