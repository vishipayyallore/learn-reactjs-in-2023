'use client'

import React from "react";

const ClientPage = () => {

  console.log(`Token: ${localStorage.getItem('token')}`);

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center text-cyan-900">Client Component</h1>
        <hr></hr>

        <div>
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>

        <hr></hr>

        <div className="flex justify-center p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { alert('Button Clicked!') }}>Click Me</button>
        </div>

        <hr></hr>
        <p>
          {JSON.stringify(users)}
        </p>
      </div>
    </>
  )
};

export default ClientPage;
