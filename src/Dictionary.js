import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WordOutput from "./WordOutput";

export default function Dictionary() {
  let [wordInput, setwordInput] = useState(null);
  let [wordOutput, setwordOutput] = useState(null);

  function getWord(response) {
    setwordOutput(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordInput}`;
    axios.get(apiUrl).then(getWord);
  }

  function handlewordInput(event) {
    setwordInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type={search}
            placeholder="Feed me a word!"
            onChange={handlewordInput}
          />
        </form>
      </section>
      <WordOutput output={wordOutput} />
    </div>
  );
}
