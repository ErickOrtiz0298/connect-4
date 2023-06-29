import React from "react";
import GameCircle from "./GameCircle";

const GameBoard = () =>{
    return (
        <div>
            <GameCircle id={1}> 
                Read
            </GameCircle>
            <GameCircle id={2}> 
                Blue
            </GameCircle>
            <GameCircle id={3}> 
                Read
            </GameCircle>
            <GameCircle id={4}> 
                Blue
            </GameCircle>
            <GameCircle id={5}> 
                Read
            </GameCircle>
            <GameCircle id={5}> 
                Blue
            </GameCircle>
            <GameCircle id={7}> 
                Read
            </GameCircle>
            <GameCircle id={8}> 
                Blue
            </GameCircle>
        </div>

    )
}
export default GameBoard;