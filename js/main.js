const header = document.getElementById('header');
const message = document.getElementById('message');
const carousel = document.getElementById('carousel');
const nav = document.getElementById('nav');
const body = document.getElementById('body');
const info = information
let code = null;
// let code = info.MTTH3S
function update(currentCard) {
    header.innerHTML = `<p>${code.nomeCard[currentCard]}</p>`
    message.innerHTML = `<p>${code.textoCard[currentCard]}</p>`
    body.style = `background-image: url(${code.fotoCard[currentCard]});`
    nav.style = `background: linear-gradient(180deg, hsla(${code.cor[currentCard]}, 29%, 50%, 0) 0%, hsla(${code.cor[currentCard]-10}, 40%, 50%, 0.6) 50%, hsla(${code.cor[currentCard]}, 40%, 50%, 1) 100%);`
    header.style = `background: linear-gradient(180deg, hsla(${code.cor[currentCard]}, 40%, 18%, 0.7) 0%, hsla(${code.cor[currentCard]}, 40%, 18%, 0) 100%);`
}

function gerenate(){
    for(let i = 0;i< code.nomeCard.length; i++ ){
        if(i==0){
            carousel.innerHTML += `<div class="card clicked" onclick="moveToFirst(${i})" style='background: linear-gradient(180deg, hsla(${code.cor[i]}, 29%, 50%, 0.1) 0%, hsla(${code.cor[i]}, 29%, 50%, 0.9) 100%), url(${code.fotoCard[i]}), lightgray 50% / cover no-repeat; background-size: cover; background-position: center;'>${code.nomeCard[i]}</div>`
        }else{
            carousel.innerHTML += `<div class="card" onclick="moveToFirst(${i})" style='background: linear-gradient(180deg, hsla(${code.cor[i]}, 29%, 50%, 0.1) 0%, hsla(${code.cor[i]}, 29%, 50%, 0.9) 100%), url(${code.fotoCard[i]}), lightgray 50% / cover no-repeat; background-size: cover; background-position: center;'>${code.nomeCard[i]}</div>`
        }

    }
}