////////////////////////////////////////////////////////////////////////////////////////
/// TRABAJO FINAL ( TRES EN RAYA ) - JAVASCRIPT
////////////////////////////////////////////////////////////////////////////////////////

/*

Como trabajo final se debe crear el juego “Tres en Raya” integrando todos los temas vistos en clase.

1. El juego cuenta con 9 casillas disponibles.
2. Existen 8 combinaciones posibles para ganar.
3. El programa debe hacer coincidir ceros y cruces de manera vertical, horizontal o diagonal en diversaS direcciones.
4. La secuencia del juego es como sigue:
  4.1. Un primer jugador coloca un símbolo, por ejemplo, la “O”, en una de las casillas libres.
  4.2. El programa valida si con esa jugada, el jugador completa alguna de las formas de ganar. De ser así se proclama como ganador del juego, de lo contrario se da paso al siguiente jugador.
  4.3. El siguiente jugador coloca el otro símbolo, por ejemplo, la “X”, en alguna de las casillas libres.
  4.4. El programa valida si con esa jugada, el jugador completa alguna de las formas de ganar. De ser así se proclama como ganador del juego, de lo contrario se da paso al primer jugador.
  4.5. La secuencia continúa hasta que uno de los jugadores resulte ganador o no se disponga de casillas libres.

*/

// INICIAR JUEGO
document.addEventListener('DOMContentLoaded', () => {

  // ANIMACION DE INICIO
  for(let i = 0; i < 2; i++) {

    setTimeout(() => {

      document.getElementById("root").innerHTML = `<div class="animation-xo">${ i % 2 ? 'o' : 'x' }</div>`;

    }, 700 * i);

  };

  // CREAR TABLERO
  setTimeout(() => {

    document.getElementById("root").innerHTML = `

      <div class="container">
        <div class="title-container">
          <h1>#TresEnRaya | <h1 id="turn">TURNO: <span>X</span></h1></h1>
        </div>
        <div class="play-container">
          <div class="tictactoe">
            <div class="boxes">
              <div class="box box-1"></div>
              <div class="box box-2"></div>
              <div class="box box-3"></div>
              <div class="box box-4"></div>
              <div class="box box-5"></div>
              <div class="box box-6"></div>
              <div class="box box-7"></div>
              <div class="box box-8"></div>
              <div class="box box-9"></div>
            </div>
          </div>
          <div class="bar-container">
            <div class="bar">
              <div class="bar-title"><h2>Historial</h2></div>
              <div id="bar-element__1"></div>
              <div id="bar-element__2"></div>
              <div id="bar-element__3"></div>
              <div id="bar-element__4"></div>
              <div id="bar-element__5"></div>
              <div id="bar-element__6"></div>
              <div id="bar-element__7"></div>
              <div id="bar-element__8"></div>
              <div id="bar-element__9"></div>
              <button id="reload">reiniciar<br>partida</button>
            </div>
          </div>
        </div>
      </div>

    `;

    // LANZADORES DE EVENTOS
    document.querySelectorAll('.box').forEach((box, i) => box.addEventListener('click', (e) => boxClicked(e, i)));
    document.getElementById('reload').addEventListener('click', () => location.reload());

  }, 1400);
  
});

// VARIABLES GLOBALES
let turn = 0;
const board = [];

// FUNCION MARCAR CASILLAS
const boxClicked = (e, i) => {

  turn ++;
  const box = e.target;
  const player = turn % 2 ? '<span>X</span>' : '<span>O</span>';
  box.innerHTML = player;
  document.getElementById('turn').innerHTML = `TURNO: ${ player == '<span>X</span>' ? '<span>O</span>' : '<span>X</span>' }`;
  document.getElementById(`bar-element__${turn}`).innerHTML = `${player}&nbspcasilla ${i + 1}`;
  board[i] = player;
  checkWin();

};

// FUNCION VERIFICAR GANADOR
const checkWin = () => {

  const winConditions = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ];

  winConditions.forEach((condition) => {

    const [a, b, c] = condition;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {

      for(let i = 0; i < 9; i++) {

        setTimeout(() => {
    
          document.getElementById("root").innerHTML = `<div class="win-container-${i + 1}"><h1>${board[a]}</h1></div>`;
    
        }, 300 * i);
    
      };

      setInterval("location.reload()", 2700);

    };

  });

};