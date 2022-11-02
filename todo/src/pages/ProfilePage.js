// react imports
import React from 'react'
// components
import Profile from '../components/profil/Profile'
import Notifikationer from '../components/profil/Notifikationer'
import Theme from '../components/profil/Theme'
import Register from '../components/profil/Register'
// svg & css
import wave from "../components/Nav/navwave2.svg"
import '../components/profil/profile.css'

const ProfilePage = () => {
  return (
    <section>
      <Profile classname="profile" />
      <Notifikationer />
      <Theme />
      <Register />
      <img src={wave} alt="Bottom-wave"/>
    </section>
  )
}

export default ProfilePage