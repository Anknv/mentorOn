import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div class="container">
    <form action="/api/login" method="POST" class="login-email">
      <p class="login-text" style="font-size: 2rem; font-weight: 800;">Login</p>
      <div class="input-group">
        <input type="email" placeholder="Email" name="email" required/>
      </div>
      <div class="input-group">
        <input type="password" placeholder="Password" name="password" required/>
      </div>
      <div class="input-group">
        <button name="submit" class="btn">Login</button>
      </div>
      <p class="login-register-text">Don't have an account? Register Here</p>
    </form>
  </div>
  )
}

export default Login