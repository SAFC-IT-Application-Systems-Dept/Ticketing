import React, { createContext, useContext, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface HeaderTitleContextType {
  title: string;
  setTitle: (title: string) => void;
}

const HeaderTitleContext = createContext<HeaderTitleContextType | undefined>(
  undefined
);

export const useHeaderTitleContext = (): HeaderTitleContextType => {
  const context = useContext(HeaderTitleContext);
  if (!context) {
    throw new Error(
      "useHeaderTitleContext must be used within a HeaderTitleContextProvider"
    );
  }
  return context;
};

const routeTitleMap: Record<string, string> = {
  "/": "Login",
  "/dashboard": "Dashboard",
};

export const HeaderTitleContextProvider: React.FC<
  React.PropsWithChildren<{}>
> = ({ children }) => {
  const [title, setTitle] = useState("Default");
  const router = useRouter();

  useEffect(() => {
    // Check if the route is found in the map; otherwise, handle 404.
    if (router.pathname === "/404" || !routeTitleMap[router.pathname]) {
      setTitle("Page Not Found");
    } else {
      const dynamicTitle = routeTitleMap[router.pathname] || "Default Page";
      setTitle(dynamicTitle);
    }
  }, [router.pathname]);

  return (
    <HeaderTitleContext.Provider value={{ title, setTitle }}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </HeaderTitleContext.Provider>
  );
};
