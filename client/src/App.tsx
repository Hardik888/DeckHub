import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import deleteDecks from "./api/deleteDecks";
import getDecks, { Deck } from "./api/getDecks";
import createDecks from "./api/createDecks";
const  App = () =>{
  const [title, settitle] = useState<string>(" ");
  const [decks,setdecks] = useState<Deck[]>([]);

  async function handlesubmit  (e:React.FormEvent)  {
  e.preventDefault();
  if (title){
  const deck = await createDecks(title);
  setdecks([...decks,deck]);
  settitle("");
  }
};

async function handleDeleteDeck(deckId:string){
  await deleteDecks(deckId);
  setdecks(decks.filter((deck)=>deck._id!==deckId));
}

useEffect(()=>{
  async function fetchDecks(){
    const newDecks = await getDecks();
    setdecks(newDecks);
  }
  fetchDecks();
},[]);

return (
    
      <div className="App">
        <ul className="decks">
          {decks.map((deck)=>(
              <li key = {deck._id}>
           <button onClick={()=>handleDeleteDeck(deck._id)}>X</button>
              <Link to = {`decks/${deck._id}`}>{deck.title}</Link>
                </li>
            ))}
          </ul>
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

    
  );
}

export default App;
