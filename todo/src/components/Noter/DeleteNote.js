import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebaseConfig";
import "./noter.css";

export default function DeleteNote({ id }) {
  
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "minliste", id));
      toast("Todo er slettet", { type: "success" });
    } catch (error) {}
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Slet
      </button>
    </div>
  );
}
