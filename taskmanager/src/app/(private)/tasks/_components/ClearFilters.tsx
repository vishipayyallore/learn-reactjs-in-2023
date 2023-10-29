'use client';

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ClearFilters = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    const clearFilters = () => {
        router.refresh();
        router.push('/tasks');
    };

    if (searchParams.get('status') || searchParams.get('priority')) {
        return (
            <div>
                <button className="bg-red-500 hover:bg-red-700 text-white border border-red-900 rounded-sm shadow-sm" onClick={clearFilters}>
                    Clear Filters
                </button>
            </div>
        );
    } else {
        return null;
    }
};

export default ClearFilters;