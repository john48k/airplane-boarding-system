import { useState } from "react";
import { Navbar } from "../components/Navbar";
 
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    const loginData = {
      username,
      password,
    };
 
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
 
      const result = await response.text(); // Expecting a text response
 
      if (response.ok) {
        alert(result); // "Login successful!" or error message
        console.log("Login result:", result);
        // Reset fields
        setUsername("");
        setPassword("");
      } else {
        alert(result); // Invalid credentials or error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };
 
  return (
    <div>
      <Navbar activeTab="Login" />
 
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
 
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
 
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};