const btn = window.document.querySelectorAll('.btn')
for (var i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', (e) => (e.target.classList)? e.target.classList.add("op") : e.target.className += "op")
}



const box = window.document.querySelectorAll('.box')

const paragrafo = document.createElement("p");
const jgd1 = document.createTextNode("X");
const jgd2 = document.createTextNode("O");
paragrafo.appendChild(jgd1);

for (var i = 0; i < box.length; i++) {
    box[i].addEventListener("click", (e) => e.target.appendChild(paragrafo))
}
