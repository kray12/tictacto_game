const Square=({sqValProp,sqClickProp})=> {
    // console.log(sqValProp);
    // console.log(sqClickProp);
    return (
    <button type="button" className="square" onClick={sqClickProp}>
    {sqValProp}
    </button>
    );
};
export default Square;