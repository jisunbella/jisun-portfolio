'use client';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const navItems = [
  {
    id: '#main',
    label: 'main',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
          .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
          1.125-1.125h2.25c.621 0 1.125.504 
          1.125 1.125V21h4.125c.621 0 
          1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: '#about',
    label: 'about',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 
          1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 
          3.75 3 5.765 3 8.25c0 7.22 9 12 9 
          12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
  {
    id: '#projects',
    label: 'projects',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 
          1-.879 2.122L7.5 21h9l-.621-.621A3 
          3 0 0 1 15 18.257V17.25m6-12V15a2.25 
          2.25 0 0 1-2.25 
          2.25H5.25A2.25 2.25 0 0 1 3 
          15V5.25m18 0A2.25 2.25 0 0 0 18.75 
          3H5.25A2.25 2.25 0 0 0 3 
          5.25m18 0V12a2.25 2.25 0 0 1-2.25 
          2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
        />
      </svg>
    ),
  },
  {
    id: '#contact',
    label: 'contact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 
          6.75v10.5a2.25 2.25 0 0 
          1-2.25 
          2.25h-15a2.25 2.25 0 0 
          1-2.25-2.25V6.75m19.5 0A2.25 
          2.25 0 0 0 19.5 
          4.5h-15a2.25 2.25 0 0 
          0-2.25 2.25m19.5 0v.243a2.25 
          2.25 0 0 1-1.07 
          1.916l-7.5 4.615a2.25 2.25 0 
          0 1-2.36 
          0L3.32 8.91a2.25 2.25 0 0 
          1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

const GNB = () => {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState(location.hash || '#main');

  const handleHashChange = () => {
    setActiveHash(location.hash);
  };

  return (
    <aside className="fixed left-4 top-[250px] hidden lg:flex flex-col space-y-6 bg-white shadow-xl rounded-2xl p-4 z-50 border">
      {navItems.map((item) => (
        <div key={item.id} className="group relative flex items-center">
          <a
            href={item.id}
            className={`transition-colors ${
              activeHash === item.id ? 'text-blue-500' : 'text-gray-600'
            } hover:text-blue-500`}
            onClick={handleHashChange}
          >
            {item.icon}
          </a>
          <span className="absolute left-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {item.label}
          </span>
        </div>
      ))}
    </aside>
  );
};

export default GNB;
