import { Request,Response } from "express";
import DeckModel from "../models/Deck";

 const deleteDeckController = async (req:Request,res:Response)=>{
    const DeckId = req.params.deckId;
    const deck = await DeckModel.findByIdAndDelete(DeckId);
    res.json(deck);
}
export default deleteDeckController;