// Import React
import React from "react";
// Styling & Assets
import { NavLink } from "react-router-dom";
// Firebase Imports
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "./profile.css";


const Register = () => {
  

  return (
    
    <div className="Signin">
      <NavLink className="nav-link" to="/Signup">
        <button className="register-btn">Opret profil</button>
      </NavLink>
      {/* Logger dig ud af din profil */}
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