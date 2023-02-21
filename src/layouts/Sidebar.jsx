import React, {useState} from 'react'

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Sidebar() {

    const signedIn = [
        { name: "home", link: "/", icon: MdOutlineDashboard },
        { name: "user", link: "/profile", icon: AiOutlineUser },
        { name: "messages", link: "/messages", icon: FiMessageSquare },
        { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: "/", icon: RiSettings4Line },
        { name: "Coming Soon", link: "/", icon: TbReportAnalytics, margin: true },
        { name: "Coming Soon", link: "/", icon: FiFolder },
        { name: "Coming Soon", link: "/", icon: FiShoppingCart },
      ]

      const [open, setOpen] = useState(true)

  return (
    <div className={` bg-gray-50 rounded-md shadow-inner min-h-full py-4 ${open ? "w-64" : "w-16"} duration-500 text-gray-100 px-4 `}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer text-black"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {signedIn?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md`}
            >
              <div className='text-black'>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 text-black capitalize tracking-widest ${
                  !open && "opacity-0 translate-y-12 overflow-hidden "
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } text-black absolute left-48 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Sidebar