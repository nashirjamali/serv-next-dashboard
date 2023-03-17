import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  BiCategory,
  BiBarChartAlt,
  BiClipboard,
  BiBriefcase,
  BiTransferAlt,
  BiLogOut,
} from 'react-icons/bi';

import { FiSettings } from 'react-icons/fi';

export default function Sidebar({ children }) {
  return (
    <div className="flex">
      <div className="fixed z-10 bg-white w-60 min-h-screen border-r-[1px]">
        {/* Logo */}
        <div className="flex flex-row gap-2 py-11 justify-center border-b-[1px]">
          <Image
            src={'/images/logo-serv.svg'}
            height={28}
            width={28}
            alt="Logo Serv"
          />
          <h1 className="font-bold text-xl text-stone-800">Serv Dash</h1>
        </div>

        <div className="flex flex-col justify-between h-[calc(100vh-116px)]">
          {/* Menu */}
          <div className="m-8 flex flex-col gap-4">
            <Link
              className="bg-blue-600 text-white font-medium p-3 rounded-lg  text-base flex flex-row gap-2 items-center"
              href={'/'}
            >
              <BiCategory />
              Dashboard
            </Link>

            <Link
              className="hover:bg-blue-600 hover:text-white hover:font-medium text-neutral-500 font-normal p-3 rounded-lg  text-base flex flex-row gap-2 items-center"
              href={'/statistics'}
            >
              <BiBarChartAlt />
              Statistics
            </Link>

            <Link
              className="hover:bg-blue-600 hover:text-white hover:font-medium text-neutral-500 font-normal p-3 rounded-lg  text-base flex flex-row gap-2 items-center"
              href={'/orders'}
            >
              <BiClipboard />
              Orders
            </Link>

            <Link
              className="hover:bg-blue-600 hover:text-white hover:font-medium text-neutral-500 font-normal p-3 rounded-lg  text-base flex flex-row gap-2 items-center"
              href={'/services'}
            >
              <BiBriefcase />
              Services
            </Link>

            <Link
              className="hover:bg-blue-600 hover:text-white hover:font-medium text-neutral-500 font-normal p-3 rounded-lg  text-base flex flex-row gap-2 items-center"
              href={'/transactions'}
            >
              <BiTransferAlt />
              Transactions
            </Link>
          </div>

          {/* Second Menu */}
          <div className="m-8 flex flex-col gap-4">
            <Link
              className="hover:text-neutral-700 text-neutral-500 font-normal p-3 rounded-lg text-base flex flex-row gap-2 items-center"
              href={'/settings'}
            >
              <FiSettings />
              Settings
            </Link>
            <Link
              className="hover:text-neutral-700 text-neutral-500 font-normal p-3 rounded-lg text-base flex flex-row gap-2 items-center"
              href={'/logout'}
            >
              <BiLogOut />
              Logout
            </Link>
          </div>
        </div>
      </div>
      <main className="w-full ml-60">{children}</main>
    </div>
  );
}
