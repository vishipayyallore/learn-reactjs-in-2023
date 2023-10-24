'use client';

import { useRouter } from "next/navigation";
import React from "react";

import TaskForm from "@/components/TaskForm";

const EditTask = () => {
    const router = useRouter();

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Edit Task</h1>
                <button className="btn-outlined rounded-sm shadow-sm"
                    onClick={() => router.push('/tasks')}>Back</button>
            </div>

            <TaskForm />
        </div>
    );
};

export default EditTask;