// import React
import React from 'react'
// Styling & assets
import {CgProfile} from 'react-icons/cg'
import './profile.css'
import Register from './Register'
import img2 from "./profilwave.svg"
// import firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";



const ProfilePage = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <img className="wavetwo" src={img2} alt=""/>
      <div className='profile-header'>
        <CgProfile className='avatar'/>
        {/* Viser Nanvet fra Firebase */}
        {user && <div>{user.displayName}</div>}    
      </div>
    </div>
    
  )
}

export default ProfilePage