import React from 'react';
import './reset.css'
import './universal.css';
import {Routes,
        Route,
        Navigate
        } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Nav from "./components/Nav/Nav";
import SignUpPage from './pages/SignUpPage';



function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Signup" element={<SignUpPage />} />
      </Routes>
    </main>
  );
}

export default App;
