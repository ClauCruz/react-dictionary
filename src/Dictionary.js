import React, { useState } from "react";
import "./App.css";

export default function Dictionary() {
  let [wordInput, setwordInput] = useState(null);

  function search(event) {
    event.preventDefault();
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
