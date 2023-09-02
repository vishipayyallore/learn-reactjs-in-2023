import React from "react";
import Link from "next/link";

function Projects() {
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

                <h1 className="text-2xl text-center">Current Projects</h1>

                <div className="flex gap-10 p-10">
                    <Link href='/projects/1'>
                        <div className="h-52 w-52 bg-gray-300">
                            <h1 className="text-2xl text-center">Project 1</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Projects;