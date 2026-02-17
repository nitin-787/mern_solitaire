import React, { useState } from "react";

const Hook1 = () => {
  const arr = [
    { id: 101, name: "Nitin" },
    { id: 102, name: "Sharma" },
  ];

  const [users, setUsers] = useState(arr);

  const shuffleList = () => {
    const shuffled = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffled);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={shuffleList} style={{ marginBottom: "20px" }}>
        Shuffle List
      </button>

      <div style={{ display: "flex", gap: "50px" }}>
        <div>
          <h3>Without Key Prop</h3>
          <ul>
            {users.map((user) => (
              <li>
                <strong>{user.name}</strong>: {"  "}
                <input placeholder="Type here..." />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>With Key Prop</h3>
          <ul>
            {users.map((user) => (
              // Unique ID used as key
              <li key={user.id}>
                <strong>{user.name}</strong>: {"  "}
                <input placeholder="Type here..." />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hook1;
