import React from "react";
import Link from "next/link";

function ProjectInfo({ params }: any) {

    const { projectid } = params;

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

                <h1 className="text-2xl text-center p-10">Project Details of - {projectid}</h1>

                <div className="flex gap-10 text-xl p-10">
                    <Link href='/projects'>Back to Projects</Link>

                    <Link href={`/projects/${projectid}/reviews`}>Current Project Reviews</Link>
                </div>
            </div>
        </>
    );
}

export default ProjectInfo;