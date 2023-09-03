import React from "react";

const PublicLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <h1 className="text-center p-5 bg-blue-800 text-white">Welcome to eCommerce Application</h1>
        <div className="p-5">
          {children}
        </div>
      </div>
    </>
  )
};

export default PublicLayout;
