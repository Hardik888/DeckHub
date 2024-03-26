1. **Use types for knowing the functionalities of the exact method.**
2.  **Connect to the Database before listening to requests.**
3. **Using Middleware to check and process given information before moving to the next Execution.**
4.  **Fetch req params : - method, body, headers.**
5.  **CORS is used to allow browser to access cross origin urls.**
6. **Make sure the content type is correct in request headers.**
7.  **For writing in to database create ➖**

```
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const DeckSchema = new Schema({
    title:String,
})

```

**8. For doing crud operations on the object ➖**

```tsx
app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new DeckModel({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

app.get('/decks',async(req:Request,res:Response)=>{
const decks = await DeckModel.find();
res.json(decks);
});

app.delete('/decks/:deckId',async(req:Request,res:Response)=>{
    const DeckId = req.params.deckId;
    const deck = await DeckModel.findByIdAndDelete(DeckId);
    res.json(deck);
})

```

**9. Using Fetch to do POST operations from the front end ➖**

```tsx
  async function handlesubmit  (e:React.FormEvent)  {
    e.preventDefault();
    await fetch('http://localhost:5000/decks',{
      method: "POST",
      body : JSON.stringify({title,
    }),
    headers: {
      "Content-Type": "application/json",
    }
    })
    settitle('');
  };
```

**10. To Perform A Delete Operation ➖**

```tsx
async function handleDeleteDeck (DeckId: string ){
  await fetch (`http://localhost:5000/decks/${DeckId}`,{
    method:'DELETE',
});
}
```

**11. Using Filter to update the state after Deleting the Object with a specific id ➖**

```tsx

setdecks(decks.filter((deck)=>deck._id!== DeckId));
```

**Real life use case scenario of the above ➖**

- **Deleting Posts**
- **Removing Comments**
- **Deleting Direct Messages**
1.  Using Spread operator to update the changes fetched from the backend into the client side . 

```tsx
 const deck = await response.json();
    setdecks([...decks,deck])
```

**Real life use case scenario of the above ➖**

- **Adding a New Post**
- **Posting a Comment**
- **Sending a Direct Message**
1. Using React Router for navigating towards route on the frontend ➖

```tsx
// Basic Setup For React Router 
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/app",
    element: <App/>
  },
 
 <RouterProvider router={router} />
	// Using Link to Redirect to a new page 
 <Link to = {`decks/${deck._id}`}>{deck.title}</Link>
  // Handling 404 Error 
 <Route path="*" component={NotFound} />

```

**Real life use case scenario of the above ➖**

- Social Media Platforms
- Project Management Tools
- Content Management Systems(CMS)
