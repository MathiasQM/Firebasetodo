import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useState } from "react";
import "./profile.css";


const Register = () => {
  
  const [erVist, setErVist] = useState(false);

  return (
    <div className="Signin">
      <NavLink className="nav-link" to="/Signup" onClick= {() => setErVist}>
        <button className="register-btn">Opret profil</button>
      </NavLink>

      <button
        className="logout-btn"
        onClick={() => {
          signOut(auth);
        }}
      >
        Log ud
      </button>
    </div>
  );
};

export default Register;