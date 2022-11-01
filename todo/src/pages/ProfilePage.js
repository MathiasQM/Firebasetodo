import React from 'react'
import Profile from '../components/profil/Profile'
import '../components/profil/profile.css'
import Notifikationer from '../components/profil/Notifikationer'
import Theme from '../components/profil/Theme'
import Register from '../components/profil/Register'
import wave from "../components/Nav/navwave2.svg"


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