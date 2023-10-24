import React from "react";

const Spinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50">
            <div className="w-16 h-16 border-8 border-white border-t-primary rounded-full animate-spin">
            </div>
        </div>
    );
};

export default Spinner;

{/* <div className="w-16 h-16 border-8 border-white border-t-transparent rounded-full animate-spin">

</div> */}