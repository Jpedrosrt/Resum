const btn = window.document.querySelectorAll('.btn')
const turn = window.document.querySelector('.turn')
const player = window.document.querySelector('.player')
const pc = window.document.querySelector('.pc')
var aux = 0

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

function game(aux) {
    if (aux == 'X' || aux == 'O') {
        
        const box = window.document.querySelectorAll('.box')  
        let aux2 = ['']

        for (var i = 0; i < box.length; i++) {
            box[i].addEventListener("click", (e) => {
                console.log(aux2)
                console.log(aux2.includes(e.target.id))
                if(!aux2.includes(e.target.id)) {
                    let p = document.createElement("p")
                    p.append(aux)
                    e.target.append(p)
                    aux2.push(e.target.id)
                    console.log(aux2)
                    if (aux == 'X') {
                        e.target.style.color = "#ff96ad"
                    } else {
                        e.target.style.color = "#5CE672"
                    }
                }
            })
        }
        pc(aux)
    }
}

function pc(aux) {
    
}