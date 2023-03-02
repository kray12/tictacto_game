import { useState } from 'react';
import Sq from './Sq.jsx'
const Board = () => {
    const [sqrs,setSqrs]=useState(Array(9).fill(null));
    console.log(sqrs)
    const sqClick = (clickedSq)=>{
        setSqrs(currentSq=>{
            return currentSq.map((mappedArr,spot)=>{
                if(clickedSq === spot){
                    return "X";
                }
                // return console.log(sqrs);
                return mappedArr;
            })
        })
    
        // console.log('clicked')
    }
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