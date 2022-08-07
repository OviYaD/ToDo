import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" name="email" required onChange={handleChange} />
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSave}>
          Login
        </button>
      </form>
    </div>
  );
};
