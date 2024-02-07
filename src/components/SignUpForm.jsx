import React from "react";
import { useState } from "react";

export default function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setToken } = props;
  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋");
  }
  return <h2>Sign Up!
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>Submit</button>
    </form>
  </h2>;
}