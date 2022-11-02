// Import React
import React from 'react'
// Styling & Assets
import Signup from '../components/auth/Signup'
import wave from "../components/Nav/navwave2.svg"
import './homepage.css'

const SignUpPage = () => {
  return (
    <article>
    <Signup />
    <img className="bottom-wave"src={wave} alt="Bottom-wave"/>
    </article>
  )
}

export default SignUpPage