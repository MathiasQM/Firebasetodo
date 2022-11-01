import React from 'react';
import { useState } from "react"
import { db } from "../../firebaseConfig";
import { doc, setDoc  } from "firebase/firestore";

const UpdateNote = ({id}) => {
    const [opdaterTodo, setOpdaterTodo] = useState("")

    const handleSubmit = async (e) => {
      // prevent page refresh
      e.preventDefault();
      if (opdaterTodo !== "") {
        //         await setDoc(doc(db, "minliste", "la"), {
          setDoc(doc(db, "minliste", id), {
            title: "",
            todoId: opdaterTodo,
            Beskrivelse: opdaterTodo,
            completed: false,
          }); 
          setOpdaterTodo("");
      }
  
      console.log('form submitted ✅');
  };
  return (
    <form onSubmit={handleSubmit}>
        <input id={id} type="text" placeholder="Rediger Todo" value={opdaterTodo} onChange={(e) => setOpdaterTodo(e.target.value)}/>
  </form>
  )
}

export default UpdateNote