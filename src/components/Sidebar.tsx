'use client'

import { ElementType } from 'react'
import {
  BiBarChart,
  BiChevronLeftCircle,
  BiChevronLeftSquare,
  BiMoveVertical,
} from 'react-icons/bi'

import { useSidebar } from '@/contexts/SidebarContext'

export function Sidebar() {
  const { expanded, toggleSidebar } = useSidebar()

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? 'w-32' : 'w-0'
            }`}
            alt=""
          />
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <BiChevronLeftCircle /> : <BiChevronLeftSquare />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem icon={BiBarChart} text="Statistcs" active />
          <SidebarItem icon={BiBarChart} text="Users" />
          <SidebarItem icon={BiBarChart} text="Users" />
          <SidebarItem icon={BiBarChart} text="Users" alert />
          <SidebarItem icon={BiBarChart} text="Users" />
          <SidebarItem icon={BiBarChart} text="Users" />
          <hr className="my-3" />
          <SidebarItem icon={BiBarChart} text="Users" />
          <SidebarItem icon={BiBarChart} text="Users" />
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <BiMoveVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

interface SidebarItemProps {
  icon: ElementType
  text: string
  active?: boolean
  alert?: boolean
}

export function SidebarItem({
  icon: Icon,
  text,
  active,
  alert,
}: SidebarItemProps) {
  const { expanded } = useSidebar()

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
    `}
    >
      <Icon size={20} />
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  )
}
