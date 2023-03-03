const StatusMsg =({winnerProp,playerProp,sqrsProp})=>{
    const noMoves = sqrsProp.every(sqvalue => sqvalue !== null );
    const playTurn = playerProp ? 'X' : 'O';
   const renderStatus = () => {
       if(!winnerProp && noMoves){
           return <div><span className="text-orange">O</span>  and <span className="text-green"> X</span> Tied</div>;
        }
        if(winnerProp){
            return <div> Winner is :<span className={winnerProp ?'text-green':'text-orange'}>{winnerProp}</span> </div>;
        } 
        if(!winnerProp && !noMoves){
        return <div> Now Playing  :<span className={playerProp ?'text-green':'text-orange'}> {playTurn}</span></div>;
        }
    return null;
    // console.log(winnerProp);
   };
return <h2 className='status-message'>{renderStatus()}</h2>;
};
export default StatusMsg;