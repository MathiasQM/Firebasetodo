// react imports
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// firebase imports
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
// Styling & Assets
import "./signup.css";
import logo from './todologo192.png'

export default function Signup() {

  // Saving users input to "name"

  const [name, setName] = useState("");
  let navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };
// Handling onClick event
  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth);
    updateProfile(auth.currentUser, { displayName: name });
    refreshPage(0);
  };
  return (
    <div className="register">
      <img src={logo} alt="logo"></img>
      <h1>Velkommen!</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Indtast dit navn her"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <br />
      <NavLink className="nav-link" to="/" onClick={handleSignup}>
        <button className="register-btn">Opret profil</button>
      </NavLink>
    </div>
  );
}