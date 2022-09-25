import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Dictionary() {
  let [wordInput, setwordInput] = useState(null);

  function getWord(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;
    axios.get(apiUrl).then(getWord);
  }

  function handlewordInput(event) {
    setwordInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type={search}
          placeholder="Type any word"
          onChange={handlewordInput}
        />
      </form>
    </div>
  );
}
