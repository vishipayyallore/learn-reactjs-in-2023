import React from 'react';
import { cookies } from "next/headers";
import axios from 'axios';

const getDashboardData = async () => {
  try {
      const cookieStore = cookies();
      const token = cookieStore.get("token")?.value;

      const endpoint = `${process.env.API_URL}/dashboard`;
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

const Home = async () => {
  const dashboardData: any = await getDashboardData();
  
  return (
    <div>
      <h1 className='text-2xl font-semibold text-blue-600'>Welcome to Home Page</h1>
    </div>
  )
}

export default Home;
