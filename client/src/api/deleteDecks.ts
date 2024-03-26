export default async function(deckId:string) {
await fetch(`http://localhost:5000/decks/${deckId}`,{
    method:"DELETE",
})}