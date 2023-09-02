import React from "react";
import Link from "next/link";

function ProjectInfo() {
    return (
        <>
            <div>
                <div className='flex justify-left p-5 bg-gray-700 text-white gap-5'>
                    <div>
                        <h1 className='font-semibold'>Swamy PKV</h1>
                    </div>

                    <div className='flex gap-5'>
                        <Link href='/projects'>Projects</Link>
                        <Link href='/resume'>Resume</Link>
                        <Link href='/contactus'>Contact Us</Link>
                    </div>
                </div>

                <h1 className="text-2xl text-center">Project Details of - </h1>


            </div>
        </>
    );
}

export default ProjectInfo;