document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const displayCurrentPlayer = document.querySelector('#current-player')
  const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
  const winningMessageElement = document.getElementById('winningMessage')
  const restartButton = document.getElementById('restart-button')
  /*
  const player1Label = document.getElementById('player-label1')
  const player1Name = document.getElementById('player-name1')
  const player1NameButton = document.getElementById('player1-name')
  player1NameButton.addEventListener('click', changeLabel)
  
  function changeLabel(){
    player1Label.innerHTML = 'Player Name is:'
  }
  */

  let currentPlayer = 1
  restartButton.addEventListener('click', startgame)

  /*
  changeHover()
  function changeHover() {
    for (let i = 0; i < squares.length - 7; i++){
      if (squares[i].classList.contains('taken')){
        squares[i].classList.remove('x')
        squares[i].classList.remove('b')
      } else if (currentPlayer == 1  && !squares[i].classList.contains('taken')){
        squares[i].classList.remove('b')
        squares[i].classList.add('x')
      } else if (currentPlayer == 2){
        squares[i].classList.remove('x')
        squares[i].classList.add('b')
      } 
    }      
  }
  */
  
  function clearTable() {
    for (let i = 0; i < squares.length - 7; i++){
      squares[i].classList.remove('x')
      squares[i].classList.remove('b')
    }
  }

  startgame()
  function startgame(){
    currentPlayer = 1
    for (i = 7; i < squares.length - 7; i++){
      squares[i].classList.remove('taken')
      squares[i].classList.remove('player-one')
      squares[i].classList.remove('player-two')
      winningMessageElement.classList.remove('show')
      displayCurrentPlayer.innerHTML = 'Player 1'
      /*
      changeHover()
      */
    }
  }

  const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [48, 41, 34, 27],
    [47, 40, 33, 26], 
    [46, 39, 32, 25], 
    [45, 38, 31, 24],
    [44, 37, 30, 23],
    [43, 36, 29, 22],
    [42, 35, 28, 21]
  ]

  function checkBoard() {
    for (let i = 7; i < winningArrays.length; i++){
      const square1 = squares[winningArrays[i][0]]
      const square2 = squares[winningArrays[i][1]]
      const square3 = squares[winningArrays[i][2]]
      const square4 = squares[winningArrays[i][3]]
      // check those squares to see if they all have the class of player 1
      if (
        square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')
      ){
        winningMessageTextElement.innerHTML = "Player One Wins!"
        winningMessageElement.classList.add('show')
      }
      if (
        square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two')
      ){
        winningMessageTextElement.innerHTML = "Player Two Wins!"
        winningMessageElement.classList.add('show')
      }
    }
  }


  for (let i = 7; i < squares.length; i++) {
    squares[i].addEventListener('click', (e) => {
      clearTable()
      //if the square below your current square is taken, you can go ontop of it
      if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')){
        if (currentPlayer == 1){
          squares[i].classList.add('taken')
          squares[i].classList.add('player-one')
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = 'Player 2'
          /*
          changeHover()
          */
        } else if (currentPlayer == 2){
          squares[i].classList.add('taken')
          squares[i].classList.add('player-two')
          currentPlayer = 1
          displayCurrentPlayer.innerHTML = 'Player 1'
          /*
          changeHover()
          */
        } else alert('can\'t go here')
        checkBoard()
      }
    }
  )}
})