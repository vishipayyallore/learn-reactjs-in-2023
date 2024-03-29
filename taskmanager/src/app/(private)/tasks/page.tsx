import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import axios from "axios";
import { TaskInterface } from "@/interfaces";
import DeleteTaskButton from "./_components/DeleteTaskButton";
import ClearFilters from "./_components/ClearFilters";

const getTasks = async (searchParams: {}) => {
    try {
        const searchParamsString = new URLSearchParams(searchParams).toString();
        const cookieStore = cookies();
        const token = cookieStore.get("token")?.value;

        const endpoint = `${process.env.API_URL}/tasks` + (searchParamsString ? `?${searchParamsString}` : '');
        console.log('endpoint :', endpoint);
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

const Tasks = async ({ searchParams }: { searchParams: any }) => {

    const tasks: any = await getTasks(searchParams);

    const filtersApplied = {
        status: searchParams.status,
        priority: searchParams.priority
    };

    const getProperty = (key: string, value: any) => (
        <div className="flex flex-col text-sm">
            <span className="font-semibold text-primary">{key}</span>
            <span className="uppercase text-primary">{value}</span>
        </div>
    );

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <div>
                    <h1 className="text-2xl font-bold text-primary">Tasks</h1>
                    <p className="text-gray text-sm">{tasks.length} tasks
                        {filtersApplied.status && <span className="text-gray text-sm">  of <span className="uppercase">{filtersApplied.status}</span> status </span>}
                        {filtersApplied.priority && <span className="text-gray text-sm">  of <span className="uppercase">{filtersApplied.priority}</span> priority </span>}
                        <span> found.</span>
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <ClearFilters />
                    <button className="bg-blue-600 hover:bg-blue-900 text-white border border-blue-200 rounded-sm shadow-sm">
                        <Link href="/tasks/addtask">New Task</Link>
                    </button>
                </div>
            </div>

            <div className="flex flex-col mt-2 gap-5">
                {
                    tasks.map((task: TaskInterface) => (
                        <div key={task._id} className="flex flex-col gap-2 p-5 bg-white border border-blue-900 rounded-md shadow-md">
                            <h1 className="text-xl font-bold text-primary">{task.title}</h1>
                            <p className="text-sm">{task.description}</p>

                            <hr className="my-2" />

                            <div className="grid grid-cols-3 gap-5">
                                {getProperty('Status', task.status)}
                                {getProperty('Category', task.category)}
                                {getProperty('Start Date', task.dateToStart)}
                                {getProperty('End Date', task.dateToEnd)}
                                {getProperty('Priority', task.priority)}
                                {getProperty('Reference', task.reference)}
                                {getProperty('Created At', task.createdAt)}
                                {getProperty('Updated At', task.updatedAt)}
                            </div>
                            <div className="flex justify-end gap-5">
                                {/* <button className="btn-outlined-cancel hover:bg-red-500 hover:text-white rounded-sm shadow-sm">
                                    Delete
                                </button> */}
                                <DeleteTaskButton taskid={task._id!} />
                                <button className="bg-blue-600 hover:bg-blue-900 text-white border border-blue-200 rounded-sm shadow-sm">
                                    <Link href={`/tasks/edittask?taskid=${task._id}`}>Edit</Link>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
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

{/* <div className="flex items-center justify-between">
                                <div className="flex items-center gap-5">
                                    <span className="text-xl font-semibold text-primary">Status</span>
                                    <span className="text-sm uppercase text-primary">{task.status}</span>
                                </div>

                                <div className="flex items-center gap-5">
                                    <span className="text-xl font-semibold text-primary">Category</span>
                                    <span className="text-sm uppercase text-primary">{task.category}</span>
                                </div>

                                <div className="flex items-center gap-5">
                                    <span className="text-xl font-semibold text-primary">Start Date</span>
                                    <span className="text-sm uppercase text-primary">{task.dateToStart}</span>
                                </div>

                                <div className="flex items-center gap-5">
                                    <span className="text-xl font-semibold text-primary">End Date</span>
                                    <span className="text-sm uppercase text-primary">{task.dateToEnd}</span>
                                </div>
                            </div> */}
