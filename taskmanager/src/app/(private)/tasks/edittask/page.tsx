'use client';

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import TaskForm from "@/components/TaskForm";
import { TaskInterface } from "@/interfaces";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/loadersSlice";
import axios from "axios";
import toast from "react-hot-toast";

const EditTask = () => {
    const searchParams = useSearchParams();
    const taskId = searchParams.get('taskid');

    const [task, setTask] = useState<TaskInterface>({
        _id: '0',
        title: '',
        description: '',
        status: 'open',
        category: 'work',
        priority: 'low',
        dateToStart: '',
        dateToEnd: '',
        reference: '',
    });
    const router = useRouter();
    const dispatch = useDispatch();

    const getTaskById = async () => {
        try {
            dispatch(setLoading(true));

            const response = await axios.get(`/api/tasks/${taskId}`);

            console.log('getTaskById(). ', response.data);

            setTask(response.data);

            console.log('getTaskById(). Task:', task);
        } catch (error: any) {
            console.log(error.message);
            toast.error('Retrieving Task Failed!. Please try again.', error.message || error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }

    const onSave = async () => {
        try {
            dispatch(setLoading(true));

            await axios.put(`/api/tasks/${taskId}`, task);

            toast.success('Task updated successfully!');

            // Clear the Router Cache
            router.refresh();

            router.push('/tasks');
        } catch (error: any) {
            console.log(error.message);
            toast.error('Add Task Failed!. Please try again.', error.message || error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (taskId) {
            // fetch task from db
            getTaskById();
        }
    }, [taskId]);

    return (
        <div className=" w-[100%]">
            <div className="flex justify-between items-center w-[100%]">
                <h1 className="text-2xl font-bold text-primary">Edit Task</h1>
                <button className="btn-outlined hover:bg-blue-600 hover:text-white rounded-sm shadow-sm"
                    onClick={() => router.push('/tasks')}>Back</button>
            </div>

            <TaskForm task={task} setTask={setTask} onSave={onSave} />
        </div>
    );
};

export default EditTask;