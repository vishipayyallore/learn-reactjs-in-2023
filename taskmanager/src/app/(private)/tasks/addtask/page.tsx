'use client';

import { useRouter } from "next/navigation";
import React from "react";

const AddTask = () => {
    const router = useRouter();

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Add Task</h1>
                <button className="btn-outlined rounded-sm shadow-sm"
                    onClick={() => router.push('/tasks')}>Back</button>
            </div>
        </div>
    );
};

export default AddTask;