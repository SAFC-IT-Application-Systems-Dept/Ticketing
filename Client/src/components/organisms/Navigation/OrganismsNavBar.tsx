import { MoleculeThemeToggleButton } from "@/components/molecules";
import { NavBarProps } from "@/core/types";
import React from "react";
import { MdMenu } from "react-icons/md";

const OrganismsNavBar = (props: NavBarProps) => {
  return (
    <nav className="fixed w-full h-16 p-3 text-primary-text-light dark:text-primary-text-dark  bg-background-header-light dark:bg-background-header-dark shadow-md transition-all duration-300 ease-in-out">
      <div className="flex justify-between">
        <div className="flex items-center gap-10 ">
          {!props.isOpen && props.toggleSidebar && (
            <button onClick={props.toggleSidebar}>
              <MdMenu className="text-primary-text-light dark:text-primary-text-dark text-[25px]" />
            </button>
          )}
          <h1 className="font-bold text-2xl">
            My{" "}
            <span className="text-primary-color-light dark:text-primary-color-dark">
              {props.pageTitle}
            </span>
          </h1>
        </div>
        <div className={`${!props.isOpen ? "mr-0" : "mr-64"}`}>
          <MoleculeThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default OrganismsNavBar;
