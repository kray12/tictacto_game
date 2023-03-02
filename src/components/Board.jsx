import { useState } from 'react';
import Sq from './Sq.jsx'
const Board = () => {
    const [player,setNextPlayer] = useState(true); // set players turn.
    const [sqrs,setSqrs]=useState(Array(9).fill(null)); // Asume board as an array with 9 sqs.
    console.log(sqrs); // to print array of sqs.
    const sqClick = (clickedSq)=>{ // Mark sq. functions on board.
        if(sqrs[clickedSq]){
            return; // exit condition to prevent rewrite sq.
        } 
        setSqrs(currentSq=>{ // update sqs.
            return currentSq.map((mappedArr,spot)=>{
                if(clickedSq === spot){
                    return player ? "X" : "O"; // set players input.
                }
                // return console.log(sqrs);
                return mappedArr;
            })
        })
    
        // console.log('clicked')
        setNextPlayer((player => !player)) // reset players
    }
// main container  --
    const renderSq = spot => {
        return (
            <Sq value={sqrs[spot]} 
                onClick={()=>sqClick(spot)}
            />
        )
    }
    return (
    <div className="board">
        <div className="board-row">
            {renderSq(0)}
            {renderSq(1)}
            {renderSq(2)}
        </div>  
        <div className="board-row">
            {renderSq(3)}
            {renderSq(4)}
            {renderSq(5)}

        </div>  
        <div className="board-row">
            {renderSq(6)}
            {renderSq(7)}
            {renderSq(8)}

        </div>  
    </div>
    )
}

export default Board;