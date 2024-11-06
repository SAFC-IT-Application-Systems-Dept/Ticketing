// src/components/layouts/PrivateLayout.tsx

import React, { useState } from "react";
import { OrganismsNavBar, OrganismsSideBar } from "../organisms";
import { PrivateLayoutProps } from "@/core/types/Template/PrivateLayoutProps";

const PrivateLayout: React.FC<PrivateLayoutProps> = ({
  children,
  pageTitle,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-full bg-secondary-background-light dark:bg-secondary-background-dark transition-all duration-300">
      <OrganismsSideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 transition-all duration-300
             ${!sidebarOpen ? "ml-0" : "ml-64"}`}
      >
        <OrganismsNavBar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          pageTitle={pageTitle}
        />
        <div className="p-4 py-20 h-full">{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
