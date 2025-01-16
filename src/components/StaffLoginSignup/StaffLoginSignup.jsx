import React, { useState } from "react";
import "../StaffLoginSignup/StaffLoginSignup.css";

function StaffLoginSignup() {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Signup

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Staff Signup form submitted");
      // Add signup logic here
    } else {
      console.log("Staff Login form submitted");
      // Add login logic here
    }
  };

  return (
    <div className="staff-login-signup-container">
      <div className="form-wrapper">
        <h2>{isSignup ? "Staff Signup" : "Staff Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
            </>
          )}
          {!isSignup && (
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
          )}
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
        <button className="toggle-btn" onClick={handleToggle}>
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default StaffLoginSignup;

