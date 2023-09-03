import React from "react";

const PublicLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="p-5">
        {children}
      </div>
    </>
  )
};

export default PublicLayout;
