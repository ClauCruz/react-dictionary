import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.text}
      <a href={props.phonetics.audio}>
        <img src="listen.png" alt="Listen" width={70}></img>
      </a>
    </div>
  );
}
