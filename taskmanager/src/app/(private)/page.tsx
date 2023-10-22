import React from 'react';
import { cookies } from "next/headers";
import axios from 'axios';

const getUserData = async () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const endpoint = `${process.env.API_URL}/users/currentuser`;
    const response = await axios.get(endpoint, {
      headers: {
        "Cookie": `token=${token}`,
      },
    });

    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const Home = async () => {
  const user: any = await getUserData();

  return (
    <div>
      <h1>Home Page</h1>

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
}

export default Home;
