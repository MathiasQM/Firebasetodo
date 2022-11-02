// import React
import React from 'react'
import { useState, useEffect } from "react";
// import Firebase
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
// Styling & assets
import "../Noter/noter.css";


// Henter Todo fra firebase som eksempel af hvordan en Todo ser ud
const Theme = () => {
  const [noter, setNoter] = useState([]);
  useEffect(() => {
    const noterRef = collection(db, "Noter");
    const q = query(noterRef, orderBy("oprettet", "desc"));
    onSnapshot(q, (snapshot) => {
      const noter = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNoter(noter);
      console.log(noter);
    });
  }, []);

  // Change theme

  // ændrer Knappers styling når bliver trykket på

    const [isActive, setIsActive] = useState(false);
  
    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };
  
  
// funktionen herunder finder vores CSS VAR's og sætter dem til en variabel
  function setColor(color, bgSecondary, textColor) {
    document.documentElement.style.setProperty('--color-bg', color)
    document.documentElement.style.setProperty('--color-text', textColor)
    document.documentElement.style.setProperty('--color-bg-opacity', bgSecondary)
  }
  return (
    <div className='notifikation-container'>
        <h3>Theme</h3>
        <div className='notif-picker'>
          {/* hver af disse p tags ændrer varieblens værdi og derfor også CSS-variablerne */}
            <p className={isActive ? 'selected' : ' '} onClick={event => {
              setColor('rgb(239, 239, 239', 'rgb(250, 250, 250)', 'black')
              setIsActive(true)}} >☀️</p>
            <p  className={isActive ? 'selected' : ''} onClick={() => setColor('rgba( 0, 0, 0, 0.9', 'rgb(37, 37, 37)',  '#FFF')}>🌑</p>
            <p className={isActive ? 'selected' : ''}>🌈</p> 
        </div>

        <div className='theme-show-box'>
            <div className="bordernote">
                <div className="row">
                    <div className="col-9">
                        <p>Tøm opvasker</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

)}

export default Theme