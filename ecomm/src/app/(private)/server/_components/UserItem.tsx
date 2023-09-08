'use client';

import React from "react";
import { useRouter } from "next/navigation";

const UserItem = ({ user }: any) => {

    const router = useRouter();

    return (
        <li key={user.id} className="cursor-pointer" onClick={() => { router.push(`/server/${user.id}`) }}>{user.name}</li>
    )
};

export default UserItem;
