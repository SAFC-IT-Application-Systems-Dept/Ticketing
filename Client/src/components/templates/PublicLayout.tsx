import React from "react";

const PublicLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className=" h-screen">
      {/* <MoleculeThemeToggleButton /> */}
      {children}
    </div>
  );
};

export default PublicLayout;
