import { collection, onSnapshot, orderBy, query, doc, setDoc, getDocs  } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import DeleteNote from "./DeleteNote";
import UpdateNote from './UpdateNote'
import "./noter.css";
import { AiOutlineUnorderedList } from "react-icons/ai";
import BlockIcon from "./blockicon.svg"



// Henter todos

export default function Noter() {


  //Viser ALLE ToDos fra ALLE Lister
  const [noter, setNoter] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleGetTodos();
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  
  const handleGetTodos = async () => {
    const colRef = collection(db, "minliste");
    try {
      getDocs(colRef)
      .then((snapshot) => {
        let noter = []
        snapshot.docs.forEach((doc) => {
          noter.push({ ...doc.data(), id: doc.id })
        })
        setNoter(noter);
        console.log(noter)
        return getDocs
      })
    } catch (error) {}
  };

  
  const [active, setActive] = useState("bordernote");
  const [activetwo, setActivetwo] = useState("flex-box");
  const [activethree, setActivethree] = useState("col-9");
  const [activefour, setActivefour] = useState("block-icon");
  const [activefive, setActivefive] = useState("list");
  const blockToggle = () => {
    active === "bordernote"
      ? setActive("bordernote bordernote-active")
      : setActive("bordernote bordernote-active");

    activetwo === "flex-box"
      ? setActivetwo("flex-box-active")
      : setActivetwo("flex-box-active")

    activethree === "col-9"
      ? setActivethree("col-9-active")
      : setActivethree("col-9-active")

    activefour === "block-icon"
    ? setActivefour("block-icon-active")
    : setActivefour("block-icon-active")

    activefive === "list"
    ? setActivefive("listtwo")
    : setActivefive("listtwo")
  };
  

  const listToggle = () => {
    active === "bordernote"
      ? setActive("bordernote")
      : setActive("bordernote");

    activetwo === "flex-box"
      ? setActivetwo("flex-box")
      : setActivetwo("flex-box")

    activethree === "col-9"
      ? setActivethree("col-9")
      : setActivethree("col-9")

      activefour === "block-icon"
    ? setActivefour("block-icon")
    : setActivefour("block-icon")

    activefive === "list"
    ? setActivefive("list-activetwo")
    : setActivefive("list-activetwo")
  };

  return (
    <div className="block" onLoad={() => handleGetTodos()}>

      <div className="layout-box">
        <h3>Layout</h3>
        <div className="filter-box">
          <h4 className={activefive} onClick={listToggle}><AiOutlineUnorderedList /></h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" onClick={blockToggle} className={activefour}>
  <g className={activefour} id="Rectangle_63" data-name="Rectangle 63" fill="none" stroke="#707070" stroke-width="1">
    <rect  width="10" height="10" rx="2" stroke="none"/>
    <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" fill="none"/>
  </g>
  <g className={activefour} id="Rectangle_64" data-name="Rectangle 64" transform="translate(11)" fill="none" stroke="#707070" stroke-width="1">
    <rect width="10" height="10" rx="2" stroke="none"/>
    <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" fill="none"/>
  </g>
  <g className={activefour} id="Rectangle_65" data-name="Rectangle 65" transform="translate(11 11)" fill="none" stroke="#707070" stroke-width="1">
    <rect width="10" height="10" rx="2" stroke="none"/>
    <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" fill="none"/>
  </g>
  <g className={activefour} id="Rectangle_62" data-name="Rectangle 62" transform="translate(0 11)" fill="none" stroke="#707070" stroke-width="1">
    <rect width="10" height="10" rx="2" stroke="none"/>
    <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" fill="none"/>
  </g>
</svg>
        </div>
      </div>
      <div className={activetwo}>
        {noter.length === 0 ? (
          <p>Igen noter fundet</p>
        ) : (
          noter.map(({ id, Beskrivelse }) => (
            <div className={active} key={id}>
              <div className="row">
                <div className={activethree}>
                  <p>{Beskrivelse}</p>
                  <DeleteNote id={id} />
                  <UpdateNote id={id}/>
                </div>
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}
