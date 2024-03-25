import { config } from "dotenv";
config();
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import DeckModel from "./models/Deck";
const app: Application = express();
app.use(express.json());

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new DeckModel({
        title: req.body.title,
        
   
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});


mongoose.connect(process.env.MONGO_URL ?? " ")
    .then(() => {
        console.log("listening to port ");
        app.listen(process.env.PORT ?? " ");
    }).catch(error => {
        console.log(error)
    })





