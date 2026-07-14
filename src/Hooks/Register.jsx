import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveData = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    localStorage.setItem("User", JSON.stringify(data));

    setName("");
    setEmail("");
    setPassword("");

    alert("Data Saved Successfully");
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={saveData}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <br />
        <br />

        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Register;