const op1 = document.querySelector('.op1')
const op2 = document.querySelector('.op2')
const player = document.querySelector('.player')
const pc = document.querySelector('.pc')
const player2 = document.querySelector('.player2')
const turn = document.querySelector('.turn')
const boxs = document.querySelectorAll("[data-box]")
const refs = document.querySelectorAll("[data-refre]")
const end = document.querySelector('.endgame')


const wins = [
    [0, 1, 2], [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
]

let plX = []
let plO = []

for (const refre of refs) {
    refre.addEventListener("click", (e) => location.reload())
}


let versuPlayer = false;
let xTurn = turn;
let optC = false;

const turnM = (x) => (o) => {
    x.append('X')
    x.style.color = "#ff96ad"
    o.append('O')
    o.style.color = "#5CE672"
    optC = true
}

const gameChoice = (e) => {
    if (e.target.classList[1] == 'btn-2') {
        versuPlayer = true;
    }
    op1.classList.add('escon')
    op2.classList.remove('escon')
}

const playerChoice = (e) => {
    op2.classList.add('escon')
    turn.classList.remove('escon')
    op2.parentElement.classList.add('escon')
    if (versuPlayer) {
        player2.classList.remove('escon')
        pc.classList.add('escon')
        if(e.target.innerHTML == 'X') {
            turnM(player)(player2)
        } else {
            turnM(player2)(player)
        }
    } else {
        if(e.target.innerHTML == 'X') {
            turnM(player)(pc)
        } else {
            turnM(pc)(player)
        }
    }
}


const willWin = (e) => (mark)=> {
    if (mark == 'X') plX.push(Number(e.id[1]))
    else plO.push(Number(e.id[1]))
    return wins.some(x => {
        return x.every(y => {
            if(plX.includes(y) && mark == 'X') return true
            else if (plO.includes(y) && mark == 'O') return true
            else return false
        })
    })
}

const changeTurn = () => {
    xTurn = !xTurn
}

const addMark = (e) => (mark) => {
    let p = document.createElement("p")
    p.append(mark)
    e.append(p)
    if (mark == 'X') {
        e.style.color = "#ff96ad"
    } else {
        e.style.color = "#5CE672"
    }
}

function coloc(e) {
    if (optC) {
        const mark = xTurn ? 'X' : 'O'
        if(versuPlayer) {
            addMark(e.target)(mark)
            changeTurn()
            if( willWin(e.target)(mark) ) msgEnd(mark)
        }
        e.target.removeEventListener('click', coloc);
    }
}

const msgEnd = (mark) => {
    end.classList.remove('escon')
    if (mark == 'X') {
        end.childNodes[1].innerText = "Winner: X"
    } else if (mark == 'O') {
        end.childNodes[1].innerText = "Winner: O"
    } else {
        end.childNodes[1].innerText = "Draw!!"
    }
}

op1.addEventListener("click", gameChoice, { once: true})
op2.addEventListener("click", playerChoice, { once: true})

for (const box of boxs) {
    box.addEventListener('click', coloc)
}

