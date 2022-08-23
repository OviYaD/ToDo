import React, { useState } from "react";
import { loginAPI, sampleApi } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    await loginAPI(user);
    navigate("/todolist", { replace: true });
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
                <h1>Login</h1>
              </center>
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
                  required
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-grid">
                <center>
                  <button
                    onClick={handleLogin}
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
