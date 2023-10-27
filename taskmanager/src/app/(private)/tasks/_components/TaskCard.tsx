import Link from 'next/link';
import React from 'react';

const TaskCard = ({ title, count, path, queryParams }: { title: string, count: number, path: string, queryParams: any }) => {
    return (
        <>
            <Link href={{ pathname: path, query: queryParams }}>
                <div className='flex flex-col gap-5 p-5 border border-gray-300'>
                    <h1>{title}</h1>
                    <h1>{count}</h1>
                </div>
            </Link>
        </>
    );
};

export default TaskCard;