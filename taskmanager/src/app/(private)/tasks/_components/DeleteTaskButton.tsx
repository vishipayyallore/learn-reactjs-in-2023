'use client';

import { setLoading } from "@/redux/loadersSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const DeleteTaskButton = ({ taskid }: { taskid: string }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    const onDeleteTask = async () => {
        try {
            dispatch(setLoading(true));

            const response = await axios.delete(`/api/tasks/${taskid}`);

            console.log('onDeleteTask :', response.data);

            toast.success('Task deleted successfully');

            // Clear the Router Cache
            router.refresh();

            router.push('/tasks');
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message || error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            <button className="btn-outlined-cancel hover:bg-red-500 hover:text-white rounded-sm shadow-sm" onClick={onDeleteTask}>
                Delete
            </button>
        </>
    );
};

export default DeleteTaskButton;