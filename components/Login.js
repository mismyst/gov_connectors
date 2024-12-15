import React from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user);
      navigate("/home"); // Redirect to Home after login
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <h1>Gov Connect Login</h1>
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;