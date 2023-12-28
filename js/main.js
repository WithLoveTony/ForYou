const bigCard = document.getElementById('bigCard');
const header = document.getElementById('header');
const message = document.getElementById('message');
const carousel = document.getElementById('carousel');
const nav = document.getElementById('nav');
const body = document.getElementById('body');
const info = information
let code = null;

function update(currentCard) {
    let greetingsRand = ['Obrigado por fazer parte do meu ano','Obrigado por tudo d vdd','Você é foda dms','Pprt amo você', "Obrigado por fazer meu ano melhor ❤"]
    var randomNumG = (Math.floor(Math.random() * 5) + 1)-1;

    header.innerHTML = `<p>${code.nomeCard[currentCard]}</p>`
    message.innerHTML = `<p>${code.textoCard[currentCard]}</p>`
    message.style.display = 'flex'
    body.style = `background-image: url(${code.fotoCard[currentCard]});`
    nav.style = `background: linear-gradient(180deg, hsla(${code.cor[currentCard]}, 29%, 40%, 0) 0%, hsla(${code.cor[currentCard] - 10}, 40%, 40%, 0.6) 50%, hsla(${code.cor[currentCard]}, 40%, 40%, 1) 100%);`
    header.style = `background: linear-gradient(180deg, hsla(${code.cor[currentCard]}, 40%, 15%, 0.7) 0%, hsla(${code.cor[currentCard]}, 40%, 15%, 0) 100%);`

    bigCard.innerHTML = `
    <div class="bigCard" style='width:100%;height:100%;background: linear-gradient(180deg, hsla(${code.cor[currentCard]}, 29%, 50%, 0.1) 0%, hsla(${code.cor[currentCard]}, 29%, 50%, 0.6) 100%), url(${code.fotoCard[currentCard]}), lightgray 50% / cover no-repeat; background-size: cover; background-position: center;'>${greetingsRand[randomNumG]}</div>`
    
}

function gerenate() {
    for (let i = 0; i < code.nomeCard.length; i++) {
        if (i == 0) {
            carousel.innerHTML += `<div class="card clicked" onclick="moveToFirst(${i})" style='background: linear-gradient(180deg, hsla(${code.cor[i]}, 29%, 50%, 0.1) 0%, hsla(${code.cor[i]}, 29%, 50%, 0.9) 100%), url(${code.fotoCard[0]}), lightgray 50% / cover no-repeat; background-size: cover; background-position: center;'>${code.nomeCard[i]}</div>`
        } else {
            carousel.innerHTML += `<div class="card" onclick="moveToFirst(${i})" style='background: linear-gradient(180deg, hsla(${code.cor[i]}, 29%, 50%, 0.1) 0%, hsla(${code.cor[i]}, 29%, 50%, 0.9) 100%), url(${code.fotoCard[i]}), lightgray 50% / cover no-repeat; background-size: cover; background-position: center;'>${code.nomeCard[i]}</div>`
        }

    }
}