import { config } from "dotenv";
config();
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import getDecksContoller from "./controllers/getDecksController";
import createdDeckController from "./controllers/createDeckController";
import DeckModel from "./models/Deck";
import deleteDeckController from "./controllers/deleteDeckController";
const app: Application = express();
app.use(cors({origin:"*"}));
app.use(express.json());

app.get('/decks',getDecksContoller)

app.post('/decks', createdDeckController)

app.delete('/decks/:deckId',deleteDeckController)

mongoose.connect(process.env.MONGO_URL ?? " ")
.then(() => {
        console.log("listening to port ");
        app.listen(process.env.PORT ?? " ");
}).catch(error => {
        console.log(error)
})





