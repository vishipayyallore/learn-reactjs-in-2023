import React from 'react';
import { cookies } from "next/headers";
import axios from 'axios';
import TaskCard from './tasks/_components/TaskCard';

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
    <div className='items-center justify-center'>
      <h1 className='text-2xl font-semibold text-blue-600'>Welcome you have a total {dashboardData.totalTasks} Tasks.</h1>

      <div className="grid grid-cols-6 mt-5 gap-10 ">
        <TaskCard title='Open' count={dashboardData.openTasks} path='/tasks' queryParams={{ status: 'open' }} />
        <TaskCard title='In Progress' count={dashboardData.inProgressTasks} path='/tasks' queryParams={{ status: 'in-progress' }} />
        <TaskCard title='Closed' count={dashboardData.closedTasks} path='/tasks' queryParams={{ status: 'closed' }} />

        <TaskCard title='Low' count={dashboardData.lowPriorityTasks} path='/tasks' queryParams={{ status: 'low' }} />
        <TaskCard title='Medium' count={dashboardData.mediumPriorityTasks} path='/tasks' queryParams={{ status: 'medium' }} />
        <TaskCard title='High' count={dashboardData.highPriorityTasks} path='/tasks' queryParams={{ status: 'high' }} />
      </div>
    </div>
  )
}

export default Home;
