'use client';

import React from "react";
import { useSearchParams } from "next/navigation";

const ClearFilters = () => {

    const searchParams = useSearchParams();

    if (searchParams.get('status') || searchParams.get('priority')) {
        return (
            <div>
                <button className="bg-red-500 hover:bg-red-700 text-white border border-red-900 rounded-sm shadow-sm">
                    Clear Filters
                </button>
            </div>
        );
    } else {
        return null;
    }
};

export default ClearFilters;