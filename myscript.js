let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]

let you = "O";

function press(x,y) {

    // Do stuff

    console.log(x,y);
    if (you == "O") {
        you = "X"
    }else{
        you= "O"
    };

    board[x][y] = you;
    let game = document.getElementById(`${x}${y}`);
    game.innerText= you ; 

    if (board[0][0] == you && board[0][1]== you && board[0][2]== you ) {
    document.getElementById("winner").innerText= `${you} is the winner`;
    };
 if (board[1][0] == you && board[1][1]== you && board[1][2]== you)
    {
        document.getElementById("winner").innerText= ` ${you} is the winner`;   
    };
    if (board[2][0] == you && board[2][1]== you && board[2][2]== you)
    {
        document.getElementById("winner").innerText= ` ${you} is the winner`  ; 
    }
    if (board[0][0] == you && board[1][1]== you && board[2][2]== you)
    {
        document.getElementById("winner").innerText= ` ${you} is the winner` ;  
    };
    if (board[0][1] == you && board[1][1]== you && board[2][1]== you)
    {
        document.getElementById("winner").innerText= ` ${you} is the winner` ;  
    };
    if (board[0][2] == you && board[1][2]== you && board[2][2]== you)
    {
        document.getElementById("winner").innerText= ` ${you} is the winner` ;  
    };
    if (board[0][2] == you && board[1][1]== you && board[2][0]== you)
    {
        document.getElementById("winner").innerText= ` ${you} is the winner` ;  
    };
    
}
function newGame(){
    document.getElementById("winner").innerText="";
  game.innerText=""
}
      