"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul>
        {users.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </main>
  );
}
