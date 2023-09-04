import React from "react";

export const getUsers = async () => {
  try {
    return await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json());
  } catch (error: any) {
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
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
};

export default ServerPage;
