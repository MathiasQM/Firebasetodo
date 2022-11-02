// Ract imports
import React from 'react'
import { useState } from "react";
// Assets & Styling
import './minelister.css';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoIosNotificationsOff } from 'react-icons/io';
import Liste from './liste/Liste'




const MineLister = ({title, setTitle, getLists, handleSubmit, valgtListe, setValgtListe, key}) => {

    // Giver listen en ny class, som åbner tilføj nu liste
    const [active, setActive] = useState("list-menu");
    const listToggle = () => {
        active === "list-menu" 
        ? setActive("list-menu list-active")
        : setActive("list-menu");
    };
    
  return (
    <section className='minelister-section'>
        {/* Åbner dialog boksen */}
        <div onClick={listToggle}>
            <h3>Mine Lister</h3>
        </div>
        {/* Form til at angive liste navn */}
        <div className={active}>     
            <form onSubmit={handleSubmit}>
                <input className="list-titel"
                placeholder='Navngiv din liste'
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <button className="add-button">Tilføj</button>
            </form>
            {/* Indstillinger til listen */}
            <form>
                <div >
                <IoIosNotificationsOff className='bell-off'/>
                <IoIosNotificationsOutline className='bell'/>
                </div>
                <label className='colorpicker' for="colorpicker">Vælg farvetema</label>
                <input type="color" id="colorpicker" value="#0000ff"></input>
                {/* Henter lister fra firebase */}
                {getLists.map(({key}) => (
                        <Liste 
                        valgtListe={valgtListe} 
                        setValgtListe={setValgtListe}
                        key={key} 
                        />  
                    ))}
            </form>
        </div>
        <div className="bg-blur"></div>
    </section>
  )
}

export default MineLister;