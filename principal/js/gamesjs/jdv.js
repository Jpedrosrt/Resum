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
            aux = 1
            game(aux)
        } else { 
            e.target.className += "op"
            e.path[1].className += "escon"
            turn.classList.remove("escon")
            player.append(e.target.innerHTML)
            aux = 1
            game(aux)
        }
    })
}

var refre = document.querySelector("#refre")
refre.addEventListener("click", (e) => location.reload())
function game(aux) {
    console.log(aux)
    if (aux == 1) {
        const op = window.document.querySelector('.op')
        
        const box = window.document.querySelectorAll('.box')
            
        for (var i = 0; i < box.length; i++) {
            box[i].addEventListener("click", (e) => {
                console.log(e.target.classList.contains('mark'))
                if(!(box[i].classList.contains('mark'))) {
                    var p = document.createElement("p")
                    p.append(op.innerHTML)
                    e.target.append(p)
                    e.target.classList.add('mark')
                    if (op.innerHTML == 'X') {
                        e.target.style.color = "#ff96ad"
                    } else {
                        e.target.style.color = "#5CE672"
                    }
                }
            })
        }
        
    }
}