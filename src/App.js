import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "TakeOut Box",
  "❤️": "Love",
  "😑": "Annoyance"
}; //Object better Than Arrays

var emojisWeKnow = Object.keys(emojiDictionary); //converting object into arrays

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in our databse";
    }

    //console.log(meaning)
    setMeaning(meaning); //react call to show output
    // console.log(event.target.value);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Outtt</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      {/*Actual Output set by react using useState */}
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)} //Passing something from list
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
