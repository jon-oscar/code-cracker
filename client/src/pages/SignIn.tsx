import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn(): JSX.Element {
  return (
    <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-2xl'>Login</h2>
          <p className='text-sm mt-4'>If you are already a member enter</p>
          <form action='' className='flex flex-col gap-4'>
            <input
              className='p-2 rounded-xl border bg-white mt-5'
              type='text'
              placeholder='Email'
              name='email'
            />

            <div className='relative'>
              <input
                className='p-2 rounded-xl border bg-white w-full'
                type='password'
                placeholder='password'
                name='password'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-eye absolute top-1/2 right-2 -translate-y-1/2'
                viewBox='0 0 16 16'
              >
                <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z' />
                <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0' />
              </svg>
            </div>
            <button className='bg-blue-300 py-2 text-white rounded-xl'>
              Log in
            </button>

            <div className='grid grid-cols-3 items-center'>
              <hr className='border-gray-400' />
              <p className='text-center'>OR</p>
              <hr className='border-gray-400' />
            </div>

            <button className='bg-orange-300 py-2 text-white rounded-xl'>
              <a href='/signup'>Sign up</a>
            </button>
          </form>
        </div>
        <div className='md:block hidden w-1/2'>
          <img
            className='rounded-2xl h-full w-full object-cover'
            src='login.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
