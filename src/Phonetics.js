import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <img
          src="listen.png"
          alt="Listen"
          width={70}
          className="sound-button"
        ></img>
      </a>
    </div>
  );
}
