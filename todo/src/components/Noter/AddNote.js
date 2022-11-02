// React imports
import React from "react";
import { useState } from "react";
// Firebase imports
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { storage, db } from "../../firebaseConfig";
import { toast } from "react-toastify";

import "./noter.css";

export default function Noter({title, setTitle, key, valgtListe }) {
  // Laver strukturen af vores firebase documenter
  const [formData, setFormData] = useState({
    Titel: "",
    Beskrivelse: "",
    image: "",
    oprettet: Timestamp.now().toDate(),
  });

// Koden herunder fra linje 21 til 65 er taget fra:
// https://www.youtube.com/watch?v=_7gdsAfFV9o
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.Beskrivelse) {
      alert("Udfyld venligst alle felterne");
      return;
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          Titel: "",
          Beskrivelse: "",
          oprettet: ""
        });
        

        // Add's todo to list

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          // Her tilføjer vi et Firestore document med
          // det data og giver den et id, der matcher Beskrivelsen
          setDoc(doc(db, "minliste",  formData.Beskrivelse), {
            title: "",
            todoId: formData.Beskrivelse,
            Beskrivelse: formData.Beskrivelse,
            completed: false,
          })
            .then(() => {
              toast("Todo er tilføjet", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
      
    <div className="lavtodo">
      
      {/* beskrivelse */}
      <textarea
        name="Beskrivelse"
        className="form-control"
        value={formData.Beskrivelse}
        placeholder="Hvad vil du gerne have gjort?"
        onChange={(e) => handleChange(e)}
      />
      <div className="pick-day">
        <div className="addbutton" >
          <button className="btn-primary" onClick={handlePublish}>
            Tilføj
          </button>
        </div>
      </div>
    </div>
  );
}
