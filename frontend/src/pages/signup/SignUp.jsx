import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-900 p-4'>
            <div className='w-full max-w-md transform overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-black p-8 shadow-xl transition-all'>
                <div className='mb-8 text-center'>
                    <h1 className="text-4xl font-bold text-white">
                        Create Account
                        <span className='block mt-2 text-2xl font-normal text-blue-400'>ChatApp</span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-200 block'>
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={inputs.fullName}
                            placeholder='Enter Fullname'
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-200 block'>
                            Username
                        </label>
                        <input
                            type="text"
                            value={inputs.username}
                            placeholder='Enter Username'
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-200 block'>
                            Password
                        </label>
                        <input
                            type="password"
                            value={inputs.password}
                            placeholder='Enter Password'
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className='space-y-2'>
                        <label className='text-sm font-medium text-gray-200 block'>
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={inputs.confirmPassword}
                            placeholder='Confirm Password'
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all'
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <div className='py-2'>
                        <GenderCheckBox 
                            onCheckboxChange={handleCheckboxChange} 
                            selectedGender={inputs.gender}
                        />
                    </div>

                    <button
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed mt-6'
                        disabled={loading}
                    >
                        {loading ? (
                            <div className='flex items-center justify-center'>
                                <div className='w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                            </div>
                        ) : (
                            'Create Account'
                        )}
                    </button>

                    <div className='text-center mt-4'>
                        <Link
                            to="/login"
                            className='text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200'
                        >
                            Already have an account? <span className='font-semibold'>Sign In</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
