import React from "react";
import MineLister from "../components/HomePage/MineLister.js";
import Noter from "../components/Noter/Noter";
import AddNote from "../components/Noter/AddNote";
import Liste from "../components/HomePage/liste/Liste.js";
import wave from "../components/Nav/navwave2.svg";
import {useEffect, useState} from "react"
import { db } from '../firebaseConfig';
import { collection, addDoc, setDoc, query, onSnapshot, doc  } from 'firebase/firestore';
import './homepage.css'


const HomePage = () => {

 

  const [valgtListe, setValgtListe] = useState('')

  //Henter Lists fra firebase og indsætter i listen

  const [getLists, setGetLists] = useState([]);
  const minListeRef = collection(db, "Voreslister");

  useEffect(() => {
      const q = query(minListeRef)
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let listsArray = []
          querySnapshot.forEach((doc) => {
              listsArray.push({...doc.data(), id: doc.id})
          });
          setGetLists(listsArray)
          setValgtListe(doc.id)
          console.log(listsArray)
      })
      return () => unsubscribe()
  }, [])


  // Mathias - Tilføjer ny liste til firebase
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
      // prevent page refresh
      e.preventDefault();
      if (title !== "") {
        //         await setDoc(doc(db, "minliste", "la"), {
          setDoc(doc(db, title, 'tom'), {
            title: "",
            completed: false,
          }); 
          setTitle("");
      }
  
      console.log('form submitted ✅');
  };
  

  return (
    <div className="container">
      <MineLister title={title} setTitle={setTitle} valgtListe={valgtListe} setValgtListe={setValgtListe} getLists={getLists} key={getLists.id} setGetLists={setGetLists} handleSubmit={handleSubmit}/>

      <section className="row">
        <div className="col-md-4">
          <AddNote valgtListe={valgtListe} title={title} setTitle={setTitle} key={title.id} handleSubmit={handleSubmit} doc={doc}/>
        </div>
      </section>

      <section className="col-md-8">
        <Noter title={title}/>
      </section>
      <img className="bottom-wave" src={wave} alt="bottom-wave"/>
    </div>
  );
};

export default HomePage;
