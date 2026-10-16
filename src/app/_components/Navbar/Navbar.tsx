'use client';

import { useState } from 'react';
import { Search, Mic, Camera, Bell, Handbag } from 'lucide-react';

import { ModeToggle } from '../ToggleMode/ToggleMode';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4
                 bg-white dark:bg-[#0b1120]
                 border-b border-gray-200 dark:border-gray-800
                 transition-colors duration-300"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="bg-teal-500 p-1.5 rounded-full">
          <Handbag className="text-white w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-teal-600 dark:text-teal-400 whitespace-nowrap">
          Kaza Souq
        </h1>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
        <div className="relative flex items-center w-full">
          <Search className="absolute left-3 text-gray-500 dark:text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for any product, brand, or store..."
            className="w-full bg-gray-100 dark:bg-[#131b2e]
                       text-gray-900 dark:text-white
                       border border-gray-300 dark:border-gray-700
                       rounded-full py-2 pl-10 pr-20
                       focus:outline-none focus:border-teal-500 text-sm"
          />
          <div className="absolute right-3 flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <Mic className="w-4 h-4 cursor-pointer hover:text-teal-500" />
            <Camera className="w-4 h-4 cursor-pointer hover:text-teal-500" />
          </div>
        </div>
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-gray-700 dark:text-gray-300">
        
        {/* Mobile Search Trigger + Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              aria-label="Open search"
              className="md:hidden p-1 cursor-pointer hover:text-teal-500 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </DialogTrigger>

          <DialogContent
            className="top-[12%] translate-y-0 sm:max-w-xl p-4
                       bg-white dark:bg-[#0b1120]
                       border-gray-200 dark:border-gray-800"
          >
            <DialogTitle className="sr-only">Search</DialogTitle>

            <div className="relative flex items-center w-full mt-2">
              <Search className="absolute left-3 text-gray-500 dark:text-gray-400 w-5 h-5" />
              <input
                type="text"
                autoFocus
                placeholder="Search for any product, brand, or store..."
                className="w-full bg-gray-100 dark:bg-[#131b2e]
                           text-gray-900 dark:text-white
                           border border-gray-300 dark:border-gray-700
                           rounded-full py-2 pl-10 pr-20
                           focus:outline-none focus:border-teal-500 text-sm"
              />
              <div className="absolute right-3 flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <Mic className="w-4 h-4 cursor-pointer hover:text-teal-500" />
                <Camera className="w-4 h-4 cursor-pointer hover:text-teal-500" />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Notifications */}
        <Bell className="w-5 h-5 cursor-pointer hover:text-teal-500 transition-colors" />

        {/* Profile */}
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden border border-gray-400 dark:border-gray-500">
          <img
            src="https://i.pravatar.cc/150?img=11"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
}