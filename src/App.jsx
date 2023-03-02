// import Sq from './components/Sq.jsx'
import { useState } from 'react';
import './styles.scss';
import Board from './components/Board.jsx';
import { calWinner } from './winner';

function App() { 
    const [player,setNextPlayer] = useState(true); // set players turn.
    const playTurn = player ? 'X' : 'O';
   
    const [sqrs,setSqrs] = useState(Array(9).fill(null)); // Asume board as an array with 9 sqs.
    
    const winner = calWinner(sqrs); //sqr === markedSqs for test
    const winStatus  = winner ? `Winner is ${winner}` : `Now Playing ${playTurn}`
    // console.log(winner);

    // console.log(sqrs); // to print array of sqs.
    
    const sqClick = (clickedSq)=>{ // Mark sq. functions on board.
        if(sqrs[clickedSq] || winner){
            return; // exit condition to prevent rewrite sq.
        } 
        // console.log(clickedSq);
        setSqrs(currentSq=>{ // update sqs.
            return currentSq.map((mappedArr,spot)=>{
                if(clickedSq === spot){
                    return playTurn; // set players input.
                }
                // return console.log(sqrs);
                return mappedArr;
            });
        });
        // console.log('clicked')
        setNextPlayer((player => !player)) // reset players
    }
   
    return (
        <div className='app'>
            <div>
                <h3>{winStatus}</h3>
            <Board BoardProp={sqrs} sqBoardClickProp={sqClick} > </Board>
            </div>
        </div>
    )
        
}

export default App

