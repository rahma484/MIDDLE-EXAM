const board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "K", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
];

let barisR = 0
let kolomR = 0

let barisK = 0
let kolomK = 0

for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
        if(board[i][j]=="R"){
            barisR = i
            kolomR = j
        }
        else if (board[i][j] =="K"){
            barisK = i
            kolomK = j
        }
    }
}
    if(barisR==barisK || kolomR==kolomK){
        console.log("SKAK!");
    }
    else{
        console.log("Aman");
}
