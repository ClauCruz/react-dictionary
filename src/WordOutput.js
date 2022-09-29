import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function WordResults(props) {
  if (props.output) {
    return (
      <div className="WordResults">
        <h1>{props.output.word}</h1>

        {props.output.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetic} />
            </div>
          );
        })}

        {props.output.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
