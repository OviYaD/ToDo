import React, { useState } from "react";

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          required
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={handleSave}>
          Resgister
        </button>
      </form>
    </div>
  );
};
