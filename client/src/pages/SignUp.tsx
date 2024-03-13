import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ResponseUser, RequestUser } from '../../../types/User';

export default function SignUp(): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser: RequestUser = {
      username: username,
      email: `${email}@example.com`,
      password: password,
    };
    
    const responseNewUser = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const dataNewUser: ResponseUser = await responseNewUser.json();
    console.log('User created', dataNewUser);
  }

  return (
    <div className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-2xl'>Sign up</h2>
          <p className='text-sm mt-4'>Join us!</p>
          <form className='flex flex-col gap-4' onSubmit={registerUser}>
            <input
              className='p-2 rounded-xl border bg-white mt-5'
              type='text'
              placeholder='Username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className='p-2 rounded-xl border bg-white'
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className='p-2 rounded-xl border bg-white'
              type='password'
              placeholder='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type='submit'
              className='bg-orange-300 py-2 text-white rounded-xl'
            >
              Register
            </button>

            <p className='text-center text-sm'>Already have an account?</p>

            <button className='bg-blue-300 py-2 text-white rounded-xl'>
              <a href='/signin'>log in</a>
            </button>
          </form>
        </div>
        <div className='md:block hidden w-1/2'>
          <img
            className='rounded-2xl h-full w-full object-cover'
            src='signup.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
