'use client';

import React, { useEffect } from "react";
import axios from "axios";

const ClientHome = () => {

    const [user, setUser] = React.useState<any>(null);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/users/currentuser');
            setUser(data.data);
        } catch (error: any) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <h1>Home Page with Client Side Rendering</h1>

            {
                user && (
                    <div>
                        <h1>Name: {user.username}</h1>
                        <h1>Email: {user.email}</h1>
                    </div>
                )
            }
        </div>
    )
};

export default ClientHome;