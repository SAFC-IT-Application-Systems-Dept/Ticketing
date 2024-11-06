import Link from "next/link";
import React, { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaTicket } from "react-icons/fa6";
import { MdClose, MdHome, MdPerson } from "react-icons/md";
import { SidebarProps } from "@/core/types";
import { useAuth } from "@/core/context";

const OrganismsSideBar = (props: SidebarProps) => {
  const currentYear = new Date().getFullYear();
  const [activeNavItem, setActiveNavItem] = useState("");
  const router = useRouter();

  const { logoutUser, user } = useAuth();

  const navItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <MdHome />,
    },
    {
      title: "About",
      url: "/",
      icon: <MdPerson />,
    },
  ];

  useEffect(() => {
    const { pathname } = router;
    const activeItem = navItems.find((item) => item.url === pathname);
    if (activeItem) {
      setActiveNavItem(activeItem.title);
    }
  }, [router.pathname, navItems]);

  const handleClick = (title: SetStateAction<string>) => {
    setActiveNavItem(title);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      className={`fixed overflow-hidden text-primary-text-dark dark:text-primary-text-dark inset-y-0 left-0 z-50 bg-main-background-light dark:bg-main-background-dark shadow-md transform flex flex-col justify-between ${
        !props.isOpen ? "w-0 " : "w-64"
      } transition-all duration-300 ease-in-out lg:inset-0`}
    >
      <div className="flex bg-main-header-light dark:bg-main-header-dark items-center justify-between h-16 px-6">
        <FaTicket className="text-[30px] seasaw-animation" />
        <span className="text-2xl font-extrabold text-primary-color-light dark:text-primary-color-dark transition-colors duration-300">
          ticketing
        </span>
        <button onClick={props.toggleSidebar} className="">
          <MdClose className="h-6 w-6 transition-colors duration-300" />
        </button>
      </div>

      <nav className="mt-6 flex-1">
        <ul className="space-y-2 px-4">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center w-full">
              <Link
                href={item.url}
                className={`${
                  item.title === activeNavItem
                    ? " bg-primary-color-light dark:bg-primary-color-dark font-bold"
                    : ""
                } w-full flex items-center gap-3 py-2 px-4 rounded-md hover:bg-primary-color-light hover:dark:bg-primary-color-dark hover:text-primary-text-dark transition-colors duration-300`}
                onClick={() => handleClick(item.title)}
              >
                <span className="text-[25px]">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={logoutUser}>logout</button>

      <div className="px-4 py-2 bg-main-header-light dark:bg-main-header-dark">
        <a
          href="#"
          className="block text-center text-sm transition-colors duration-300"
        >
          © {currentYear} SAFC IT Team
        </a>
      </div>
    </aside>
  );
};

export default OrganismsSideBar;
