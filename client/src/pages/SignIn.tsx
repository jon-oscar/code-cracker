import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../types/User';

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    const responseUser = fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  }

  return (
    <div className='min-h-screen flex items-center justify-center flex-col'>
      {!errorMessage && (
        <div
          role='alert'
          className='alert alert-warning max-w-sm md:max-w-3xl mb-5 flex flex-row'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}
      <div className='bg-neutral flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        <div className='md:w-1/2 px-5'>
          <h2 className='font-bold text-2xl'>Login</h2>
          <p className='text-sm mt-4'>If you are already a member enter</p>
          <form action='' className='flex flex-col gap-4' onSubmit={loginUser}>
            <label className='input input-bordered input-info bg-base-content flex items-center gap-2 mt-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
              </svg>
              <input
                type='text'
                className='grow placeholder-base-100 text-base-300'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className='input input-bordered input-info bg-base-content flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                type='password'
                className='grow placeholder-base-100 text-base-300'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className='btn btn-block btn-info text-base-300'>
              Log in
            </button>

            <div className='grid grid-cols-3 items-center'>
              <hr className='border-gray-400' />
              <p className='text-center'>OR</p>
              <hr className='border-gray-400' />
            </div>

            <button className='btn btn-block btn-outline btn-success'>
              <a href='/signup'>Create a new account</a>
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
