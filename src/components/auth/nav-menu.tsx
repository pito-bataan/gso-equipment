'use client';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

function SideNav() {
  const { data: session } = useSession();

  if (session && session.user?.name === 'admin') {
    return (
      <div className="min-h-screen flex flex-row bg-gray-100">
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-indigo-500">Admin</h1>
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-xl text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-lg font-medium">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-lg font-medium">Equipments</span>
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <button onClick={()=> signOut()}>Sign Out</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      Not Signed
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavMenu() {
  return (
    <div>
      <SideNav />
    </div>
  );
}
