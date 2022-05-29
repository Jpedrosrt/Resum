const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext('2d')

const base = require('./base')


const N_COL_CANVAS = 20
const N_ROWS_CANVAS = 14

const NORTH = { x: 0, y: -1 }
const SOUTH = { x: 0, y: 1 }
const EAST  = { x: 1, y: 0 }
const WEST  = { x:-1, y: 0 }

const x = c => Math.round(c * canvas.width / N_COL_CANVAS)

const y = r => Math.round(r * canvas.height / N_ROWS_CANVAS)

const willCrash = game => gamind(base.pointEq(nextHead(game)))

const willEat   = game => base.pointEq(nextHead(game))(game.apple)
const validMove = move => game =>
  game.moves[0].x + move.x != 0 || game.moves[0].y + move.y != 0

const enqueue = (game, move) => validMove(move)(game)
  ? merge(game)({ moves: game.moves.concat([move]) })
  : game

const nextMoves = game => game.moves.length > 1 ? base.dropFirst(game.moves) : game.moves

const nextHead  = game => gamength == 0
  ? { x: 2, y: 2 }
  : {
    x: base.mod(N_COL_CANVAS)(game.snake[0].x + game.moves[0].x),
    y: base.mod(N_ROWS_CANVAS)(game.snake[0].y + game.moves[0].y)
  }

const nextSnake = game => willCrash(game)
  ? []
  : (willEat(game)
    ? [nextHead(game)].concat(game.snake)
    : [nextHead(game)].concat(base.dropLast(game.snake)))
  
const nextApple = game => willEat(game) ? rndPos() : game.apple

const rndPos = () => ({
  x: rnd(0)(N_COL_CANVAS - 1),
  y: rnd(0)(N_ROWS_CANVAS - 1)
})

const gameState = () => ({
    snake: [],
    apple: {x: 16, y: 5},
    moves: [EAST],

})

let game = gameState()

const draw = () => {
    ctx.fillStyle = '#808080'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'rgb(0,200,50)'
    gamap(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

    ctx.fillStyle = 'rgb(0, 217, 255)'
    gaap(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

    ctx.fillStyle = 'rgb(255,50,0)'
    ctx.fillRect(x(gam), y(gam), x(1), y(1))

    if (gamength == 0) {
      ctx.fillStyle = 'rgba(255,0,0,0.274)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#000'
      ctx.font = '48px serif';
      ctx.fillText('Game Over', 245, 250);
      setTimeout(3000)
    }
}

window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'w': case 'h': case 'ArrowUp':    game = enqueue(game, NORTH); break
      case 'a': case 'j': case 'ArrowLeft':  game = enqueue(game, WEST);  break
      case 's': case 'k': case 'ArrowDown':  game = enqueue(game, SOUTH); break
      case 'd': case 'l': case 'ArrowRight': game = enqueue(game, EAST);  break
    }
})

const next = base.spec({
  moves: nextMoves,
  snake: nextSnake,
  apple: nextApple,
})
console.log(next(game))

const step = t1 => t2 => {
  if (t2 - t1 > 100) {
    game = next(game)
    draw()
    window.requestAnimationFrame(step(t2))
  } else {
    window.requestAnimationFrame(step(t1))
  }
}


draw(); window.requestAnimationFrame(step(0))