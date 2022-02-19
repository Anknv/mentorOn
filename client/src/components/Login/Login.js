import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import Welcome from '../../Icons/Welcome.png'

function Login({ user, setUser, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      history.replace('/dashboard')
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      email,
      password,
    });

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("/api/login", data, {
        headers: headers,
      })
      .then((response) => {
        if (response.status === 200) {
          window.localStorage.setItem('user', JSON.stringify(response.data));
          setUser({ id: response.data.id, email: response.data.email });
          history.replace('/dashboard');
          setError("");
        } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
        setError("error");
      });
  };

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleChange = () => {
    setError("error");
    history.replace('/login');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-email" onSubmit={handleSubmit}>
          <p className="login-text">Login</p>
          <div className="input-group">
            <input type="email" placeholder="Email" name="email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" name="password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-group">
            <button name="submit" className="btn" disabled={!validateForm}>Login</button>
          </div>
          <p className="login-register-text">Don't have an account?</p>
          <div className="input-group">
            <button type="button" className="btn" onClick={handleChange}>Register Here</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


