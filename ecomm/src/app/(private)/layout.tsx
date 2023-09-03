import Header from "@/components/shared/header";
import React from "react";

const PrivateLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="p-5">
        {children}
      </div>
    </>
  )
};

export default PrivateLayout;
