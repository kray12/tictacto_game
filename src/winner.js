export function calWinner(sqrs){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,6],
        [2,4,6]
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(sqrs[a] && sqrs[a] === sqrs[b] && sqrs[a] === sqrs[c]){
            return sqrs[a];
        }
    }
    return null;
}