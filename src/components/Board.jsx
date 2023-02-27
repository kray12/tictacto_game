import Sq from './Sq.jsx'
const Board = () => {
    return (
    <div className="board">
        <div className="board-row">
            <Sq value={0}></Sq>
            <Sq value={1}></Sq>
            <Sq value={2}></Sq>
        </div>  
        <div className="board-row">
            <Sq value={3}></Sq>
            <Sq value={4}></Sq>
            <Sq value={5}></Sq>
        </div>  
        <div className="board-row">
            <Sq value={6}></Sq>
            <Sq value={7}></Sq>
            <Sq value={8}></Sq>
        </div>  
    </div>
    )
}

export default Board;