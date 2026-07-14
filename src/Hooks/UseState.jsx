import React, { useState } from "react";

function UseState() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  return (
    <>
      <div>
        <h2>Enter Password</h2>

        <input
          type={showPassword ? "text" : "password"}
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}

export default UseState;