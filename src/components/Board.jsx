import Sq from './Sq.jsx'
const Board = ({BoardProp ,sqBoardClickProp}) => {
// accesing sq props in board --
    const renderSq = spot => {
        return (
            <Sq sqValProp={BoardProp[spot]} 
                sqClickProp={()=>sqBoardClickProp(spot)}
            />
        )
    }
    // main board conatiner
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