import React from "react";
import "./profile.css";

// Get a hook function
const { useState } = React;

const Notifikationer = () => {
  const [displayedText, setDisplayedText] = useState("");

  const sodText = () =>
    setDisplayedText(
      "Øv! Kun 1 ud af 3 færdig gjort i dag. Men en er jo langt bedre end ingen!"
    );
  const fairText = () =>
    setDisplayedText(
      "Du nåede kun 1 ud af tre ToDos i dag. Det kan vi gøre bedre i morgen!"
    );
  const aggressivText = () =>
    setDisplayedText("Tag dig nu sammen dit dovne læs lort!");
  const truendeText = () =>
    setDisplayedText(
      "Du har ikke nået dine ToDo's i dag... Husk jeg ved hvor du bor."
    );
  return (
    <div className="notifikation-container">
      <h3>Notifikationer</h3>

      <div className="notif-picker">
        <p className="Selected" onClick={sodText}>
          Sød😘
        </p>
        <p onClick={fairText}>Fair🕊</p>
        <p onClick={aggressivText}> Aggressiv😈</p>
        <p onClick={truendeText}>Truende🤬</p>
      </div>
      <div className="theme-show-box">
        <div className="theme-box" id="themebox">
          {displayedText}
        </div>
      </div>
    </div>
  );
};
export default Notifikationer;
