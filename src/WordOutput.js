import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function WordResults(props) {
  if (props.output) {
    return (
      <div className="WordResults">
        <section>
          <h1>{props.output.word}</h1>
          {props.output.phonetics.map(function (phonetics, index) {
            if (index > 4) return <></>;
            return (
              <div key={index}>
                <h2>
                  <Phonetics phonetics={phonetics} />
                </h2>
              </div>
            );
          })}
        </section>
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
