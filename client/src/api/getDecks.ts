
export interface Deck  
{
_id: string ;
title : string ;
}

export default async function getDecks():Promise<Deck[]> {
const response = await fetch("http://localhost:5000/decks");
return response.json();
}