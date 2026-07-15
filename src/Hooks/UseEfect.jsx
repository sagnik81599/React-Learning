import React, { useEffect, useState } from "react";

const UseEffect = () => {

  // State for API data
  const [data, setData] = useState([]);

  // State for counter
  const [count, setCount] = useState(0);

  // State for Even/Odd
  const [type, setType] = useState("");

  // Fetch API (Runs only once)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((datas) => setData(datas))
      .catch((err) => console.log(err));
  }, []);

  // Check Even or Odd (Runs whenever count changes)
  useEffect(() => {
    if (count % 2 === 0) {
      setType("Even");
    } else {
      setType("Odd");
    }
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Example</h1>

      <h2>Count: {count}</h2>

      <h2>Type: {type}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      <h2>Total Users: {data.length}</h2>

      {data.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;