// 'use client';

import React from "react";
import Link from "next/link";
// import { useRouter } from "next/navigation";

const Tasks = () => {
    // const router = useRouter();

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Tasks</h1>
                <button className="btn-primary rounded-sm shadow-sm">
                    <Link href="/tasks/addtask">Add Task</Link>
                </button>
            </div>
        </div>
    );
};

export default Tasks;


{/* <div className=" w-[100%]">
    <div className="flex justify-between items-center w-[100%]">
        <h1 className="text-2xl font-bold text-primary">Tasks</h1>
        <button className="btn-primary rounded-sm shadow-sm"
            onClick={() => router.push('/tasks/addtask')}>Add Task</button>
    </div>
</div> */}