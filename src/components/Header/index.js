import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex flex-row gap-6 items-center">
      {/* Search box */}
      <div className="flex-1 flex flex-row items-center gap-3 border-[1px] bg-white rounded-md py-4 px-6 text-neutral-500 font-normal">
        <BiSearch size={24} />
        <input
          className="focus:outline-none flex-1"
          placeholder="Search client name, services, and etc"
        />
      </div>

      <button className="hover:bg-neutral-300 rounded-full flex justify-center items-center bg-neutral-100 w-12 h-12">
        <IoMdNotificationsOutline size={24} />
      </button>

      <button className="hover:bg-purple-600 rounded-full flex justify-center items-center bg-purple-500 w-12 h-12">
        <FaUser size={24} color="#FFFF" />
      </button>
    </div>
  );
}
