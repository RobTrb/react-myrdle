import { useState, StrictMode } from "react";
import NewGameSetup from "./NewGameSetup";

function Game({ onBackToMenu }) {
    
    return(        
        <NewGameSetup onBackToMenu={onBackToMenu}/>        
    )
}

export default Game;