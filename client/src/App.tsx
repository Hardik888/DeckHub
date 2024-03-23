import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, settitle] = useState("");
  const handlesubmit = (e:React.FormEvent) => {
    e.preventDefault();

  };
  return (
    <>
      <div className="App">
        <form onSubmit={handlesubmit}>
          <label htmlFor="deck-title">DECK TITLE </label>
          <input
            id="deck-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              settitle(e.target.value);
            }}
          />
          <button>Create Deck</button>
        </form>
      </div>
    </>
  );
}

export default App;
