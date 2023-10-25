'use client';

import { useRouter } from "next/navigation";
import React from "react";

const Tasks = () => {
    const router = useRouter();

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Tasks</h1>
                <button className="btn-primary rounded-sm shadow-sm"
                    onClick={() => router.push('/tasks/addtask')}>Add Task</button>
            </div>
        </div>
    );
};

export default Tasks;