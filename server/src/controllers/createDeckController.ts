import { Request,Response } from "express"
import DeckModel from "../models/Deck"

const createdDeckController = async(req:Request,res:Response)=>{
const newDeck = new DeckModel({
    title:req.body.title,
});
const createdDeck = await newDeck.save();
res.json(createdDeck);
};
export default createdDeckController;