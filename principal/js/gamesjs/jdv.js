const btn = window.document.querySelectorAll('.btn')
const turn = window.document.querySelector('.turn')
const player = window.document.querySelector('.player')
const pc = window.document.querySelector('.pc')
var aux2 = ['']

for (var i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', (e) => {
        if (e.target.classList) {
            e.target.classList.add("op")
            e.path[1].classList.add("escon")
            turn.classList.remove("escon")
            player.append(e.target.innerHTML)
            if (e.target.innerHTML == 'X') {
                player.style.color = "#ff96ad"
                pc.append('O')
                pc.style.color = "#5CE672"
            } else {
                player.style.color = "#5CE672"
                pc.append('X')
                pc.style.color = "#ff96ad"
            }
            game(e.target.innerHTML)
        } else { 
            e.target.className += "op"
            e.path[1].className += "escon"
            turn.classList.remove("escon")
            player.append(e.target.innerHTML)
            game(e.target.innerHTML)
        }
    })
}

var refre = document.querySelector("#refre")
refre.addEventListener("click", (e) => location.reload())

function colc(aux, e, aux2) {
    let p = document.createElement("p")
    p.append(aux)
    e.append(p)
    aux2.push(e.id)
    if (aux == 'X') {
        e.style.color = "#ff96ad"
    } else {
        e.style.color = "#5CE672"
    }
}

function game(aux) {
    if (aux == 'X' || aux == 'O') {
        
        const box = window.document.querySelectorAll('.box')  

        for (var i = 0; i < box.length; i++) {
            box[i].addEventListener("click", (e) => {
                if(!aux2.includes(e.target.id)) {
                    
                    let tar = e.target
                    colc(aux, tar, aux2)
                }
                pcturn(aux, aux2)
            })
        }
        
    }
}

function pcturn(aux, aux2) {
    const boxs = window.document.querySelectorAll('.box')

    if (aux == 'X') {
        aux = 'O'
    } else {
        aux = 'X'
    }
    let a = aux2.map((x) => Number(x[1]))
    console.log(a)
    let b
    while(b == undefined) {
        b = Math.floor(Math.random() * 8 ) + 1
        if (a.includes(b)) {
            b = undefined
        }
    }
    aux2.push()
    colc(aux, boxs[b], aux2)

    //console.log()

}