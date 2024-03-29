import React from "react";
import Link from "next/link";

function Projects({ searchParams }: { searchParams: any }) {
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

                <h1>
                    Query String: {JSON.stringify(searchParams)}
                </h1>

                <h1>
                    Tech: {searchParams.tech}
                </h1>

                <div className="flex justify-center gap-10 p-10">
                    <Link href='/projects/1'>
                        <div className="h-52 w-52 bg-gray-100">
                            <h1 className="text-2xl text-center">Project 1</h1>
                        </div>
                    </Link>

                    <Link href='/projects/2'>
                        <div className="h-52 w-52 bg-gray-200">
                            <h1 className="text-2xl text-center">Project 2</h1>
                        </div>
                    </Link>

                    <Link href='/projects/3'>
                        <div className="h-52 w-52 bg-gray-300">
                            <h1 className="text-2xl text-center">Project 3</h1>
                        </div>
                    </Link>

                    <Link href='/projects/4'>
                        <div className="h-52 w-52 bg-gray-400">
                            <h1 className="text-2xl text-center">Project 4</h1>
                        </div>
                    </Link>

                    <Link href='/projects/5'>
                        <div className="h-52 w-52 bg-gray-500">
                            <h1 className="text-2xl text-center">Project 5</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Projects;