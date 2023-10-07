import React from "react";
import UserItem from "./_components/UserItem";

export const getUsers = async () => {
  try {
    // NOTE: This code is executed on the server side.
    const response = await fetch('http://localhost:3001/api/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const { data } = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const ServerPage = async () => {

  const users = await getUsers();

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center text-cyan-900">Server Component</h1>
        <hr></hr>

        <div>
          <ul>
            {users.map((user: any) => (
              <UserItem key={user.id} user={user}>{user.name}</UserItem>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
};

export default ServerPage;
