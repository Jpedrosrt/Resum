const btn = window.document.querySelectorAll('.btn')
const turn = window.document.querySelector('.turn')
const player = window.document.querySelector('.player')
const pc = window.document.querySelector('.pc')

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
        } else { 
            e.target.className += "op"
            e.path[1].className += "escon"
            turn.classList.remove("escon")
            player.append(e.target.innerHTML)
        }
    })
}

var refre = document.querySelector("#refre")
refre.addEventListener("click", (e) => location.reload())

const op = window.document.querySelectorAll('.btn')

for(var r = 0; r < 2; r++) {
    console.log(op[r].classList)
    if(op[r].classList.contains('op')) {
        console.log('eae')
        const box = window.document.querySelectorAll('.box')

        for (var i = 0; i < box.length; i++) {
            box[i].addEventListener("click", (e) => e.target.append('oi'))
        }
    }
}