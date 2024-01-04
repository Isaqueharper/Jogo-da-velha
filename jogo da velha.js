document.addEventListener("DOMContentLoaded", function() {
    const currentPlayer = document.querySelector(".currentPlayer");
    let selected;
    let player = "X";
  
    const positions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
  
    function init() {
        selected = new Array(10).fill(null);
      
        currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
      
        document.querySelectorAll(".game button").forEach((item) => {
          item.innerHTML = "";
          item.addEventListener("click", newMove);
        });
    }
  
    init();
  
    function newMove(e) {
        const index = e.target.getAttribute("data-i");
        if (selected[index] === null) {
            e.target.innerHTML = player;
            e.target.removeEventListener("click", newMove);
            selected[index] = player;
        
            setTimeout(() => {
                check();
            }, 100);
        
            player = player === "X" ? "O" : "X";
            currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
        }
    }
  
    function check() {
        let playerLastMove = player === "X" ? "O" : "X";
  
        for (const pos of positions) {
            if (selected[pos[0]] === playerLastMove && selected[pos[1]] === playerLastMove && selected[pos[2]] === playerLastMove) {
                alert("O JOGADOR '" + playerLastMove + "' GANHOU!");
                init();
                return;
            }
        }
    
        if (selected.filter((item) => item !== null).length === 9) {
            alert("DEU EMPATE!");
            init();
            return;
        }
    }
});
