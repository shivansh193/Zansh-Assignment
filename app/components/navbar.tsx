"use client"
import { FC, useState, useEffect } from 'react';
import { CalendarIcon, BellIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';

interface NavbarProps {
  userAvatar: string;
  userName: string;
  userEmail: string;
}

const Navbar: FC<NavbarProps> = ({ userAvatar, userName, userEmail }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center shadow">
      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Dashboard</a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Applicants</a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900">Messages</a>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 border p-2 rounded">
          <CalendarIcon className="h-5 w-5" />
          <span>Calendar</span>
        </button>
        <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
          <BellIcon className="h-6 w-6" />
        </button>
        <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-gray-900">
          {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </button>
        <div className="flex items-center space-x-2">
          <img src={userAvatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
          <div>
            <div className="text-sm font-medium text-gray-900 dark:text-gray-300">{userName}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{userEmail}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
