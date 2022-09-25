import React from "react";
import Meaning from "./Meaning";

export default function WordResults(props) {
  if (props.output) {
    return (
      <div className="WordResults">
        <h1>{props.output.word}</h1>

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
