// react imports
import React from "react";
// firebase imports
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { toast } from "react-toastify";
import "./noter.css";

export default function DeleteNote({ id }) {
  // sletter en todo fra minliste ud fra dets id
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
