import Link from 'next/link';
import React from 'react';

const TaskCard = ({ title, count, path, queryParams, styles = '#ABCDEF' }: { title: string, count: number, path: string, queryParams: any, styles: string }) => {
    return (
        <>
            <Link href={{ pathname: path, query: queryParams }}>
                <div className={`flex flex-col gap-5 p-5 border border-gray bg-slate-50 items-center justify-center rounded-sm shadow-sm ${styles}`}>
                    <h1 className='text-xl font-semibold text-gray-600'>{title}</h1>
                    <h1 className='text-5xl font-semibold text-gray-600' style={{ color: `${styles}` }}>{count}</h1>
                </div>
            </Link>
        </>
    );
};

export default TaskCard;