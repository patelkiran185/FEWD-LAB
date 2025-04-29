import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const predefinedUsers = [
    { username: "admin", password: "admin123" },
    { username: "user", password: "user123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const user = predefinedUsers.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        onLogin(user.username);
      } else {
        setError("Invalid username or password");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleLogin}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <br />
        {error && (
          <div style={{ color: "red", fontSize: "0.9em" }}>{error}</div>
        )}
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
