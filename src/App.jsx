// import Sq from './components/Sq.jsx'
import { useState } from 'react'
import './styles.scss'
// import Board from './components/Board.jsx'


function App() { 
    const [counter,setCounter] = useState(1);


    console.log("hello");
    const onBtnClick =()=>{
        setCounter(counter+1)
    }
    return (
        <div className='app'>
            <div>
                <button onClick={onBtnClick}>Click test</button>
                <div>{counter}</div>
            </div>
        </div>
    )
        
}

export default App

