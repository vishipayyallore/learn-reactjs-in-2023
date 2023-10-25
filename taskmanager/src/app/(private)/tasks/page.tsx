import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import axios from "axios";

const getTasks = async () => {
    try {
        const cookieStore = cookies();
        const token = cookieStore.get("token")?.value;

        const endpoint = `${process.env.API_URL}/tasks`;
        const response = await axios.get(endpoint, {
            headers: {
                "Cookie": `token=${token}`,
            },
        });

        console.log('getTasks :', response.data);
        return response.data;

    } catch (error: any) {
        console.log(error.message);
        return [];
    }
};

const Tasks = async () => {

    const tasks: any = await getTasks();

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Tasks</h1>
                <button className="btn-primary rounded-sm shadow-sm">
                    <Link href="/tasks/addtask">New Task</Link>
                </button>
            </div>

            {
                tasks?.length
            }
        </div>
    );
};

export default Tasks;

// 'use client';

// import { useRouter } from "next/navigation";
// const router = useRouter();

{/* <div className=" w-[100%]">
    <div className="flex justify-between items-center w-[100%]">
        <h1 className="text-2xl font-bold text-primary">Tasks</h1>
        <button className="btn-primary rounded-sm shadow-sm"
            onClick={() => router.push('/tasks/addtask')}>Add Task</button>
    </div>
</div> */}