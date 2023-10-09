import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  BiCategory,
  BiBarChartAlt,
  BiClipboard,
  BiBriefcase,
  BiTransferAlt,
  BiLogOut
} from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const SidebarItem = ({ isActive, name, link, icon }) => (
  <Link
    className={`${
      isActive
        ? 'bg-blue-600 text-white font-medium'
        : 'text-neutral-500 font-normal bg-none'
    }
     hover:bg-blue-600 hover:text-white hover:font-medium p-3 rounded-lg  text-base flex flex-row gap-2 items-center`}
    href={link}
  >
    {icon}
    {name}
  </Link>
);

export default function Sidebar({ children }) {
  const router = useRouter();

  function isActive(link) {
    return router.pathname == link;
  }

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
            <SidebarItem
              icon={<BiCategory />}
              isActive={isActive('/dashboard')}
              link={'/dashboard'}
              name={'Dashboard'}
            />

            <SidebarItem
              icon={<BiBarChartAlt />}
              isActive={isActive('/statistics')}
              link={'/statistics'}
              name={'Statistics'}
            />

            <SidebarItem
              icon={<BiClipboard />}
              isActive={isActive('/orders')}
              link={'/orders'}
              name={'Orders'}
            />

            <SidebarItem
              icon={<BiBriefcase />}
              isActive={isActive('/services')}
              link={'/services'}
              name={'Services'}
            />

            <SidebarItem
              icon={<BiTransferAlt />}
              isActive={isActive('/transactions')}
              link={'/transactions'}
              name={'Transactions'}
            />
          </div>

          {/* Second Menu */}
          <div className="m-8 flex flex-col gap-4">
            <SidebarItem
              icon={<FiSettings />}
              isActive={isActive('/settings')}
              link={'/settings'}
              name={'Settings'}
            />
            
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
