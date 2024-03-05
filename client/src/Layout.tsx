import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <nav className='bg-purple-500 text-white p-4'>
        <ul className='flex space-x-4'>
          <li>
            <a href='/' className='hover:underline'>
              Home
            </a>
          </li>
          <li>
            <a href='/about' className='hover:underline'>
              About
            </a>
          </li>
          <li>
            <a href='/contact' className='hover:underline'>
              Contact
            </a>
          </li>
          <li>
            <a href='/user' className='hover:underline'>
              User
            </a>
          </li>
        </ul>
      </nav>

      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />

      <div className='flex-grow'>
        <Outlet />
      </div>
    </div>
  );
}
