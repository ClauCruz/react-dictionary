import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WordOutput from "./WordOutput";
import Images from "./Images";

export default function Dictionary() {
  let [wordInput, setwordInput] = useState(null);
  let [wordOutput, setwordOutput] = useState(null);
  let [images, setImages] = useState(null);

  function getWord(response) {
    setwordOutput(response.data[0]);
  }

  function getImage(response) {
    setImages(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordInput}`;
    axios.get(apiUrl).then(getWord);

    let pexelsKey = "563492ad6f91700001000001a92e47a35d7b4677a3b46953f0beab28 ";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${wordInput}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(getImage);
  }

  function handlewordInput(event) {
    setwordInput(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <img src="./colmillo izq.png" className="l-fang" width="60"></img>
        <img src="./colmillo der.png" className="r-fang" width="60"></img>
        <form onSubmit={search}>
          <input
            type={search}
            placeholder="I am hungry"
            onChange={handlewordInput}
          />
        </form>
      </section>
      <WordOutput output={wordOutput} />
      <Images images={images} />
    </div>
  );
}
