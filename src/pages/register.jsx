import React, { useState } from "react";
import { registerAPI } from "../services/auth";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    const user = {
      name: userName,
      email: email,
      password: password,
    };
    await registerAPI(user);
    navigate("/todolist", { replace: true });
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <form>
        <div className="container">
          <div className="row justify-content-md-center">
            <div
              className="col-md-4"
              style={{ backgroundColor: "white", padding: "20px" }}
            >
              <center>
                <h1>Register</h1>
              </center>
              <div className="mb-3">
                <label>User Name</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="userName"
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="d-grid">
                <center>
                  <button
                    onClick={handleSave}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
