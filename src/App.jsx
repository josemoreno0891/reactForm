import Authenticate from "./components/authenticate";
import SignUpForm from "./components/signupform";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <Authenticate token={token} setToken={setToken}/>
      <SignUpForm token={token} setToken={setToken}/>
    </>
  );
}