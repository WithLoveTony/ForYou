const acessCode = document.getElementById('acessCode')
const login = document.getElementById('login')
const loginBg = document.getElementById('loginBg')
function findCode(codeF) {
    const pessoa = information[codeF];
    if (information.hasOwnProperty(codeF)) {
        code = {
            nome: pessoa.nome,
            fotoCard: pessoa.fotoCard.slice(),
            nomeCard: pessoa.nomeCard.slice(),
            textoCard: pessoa.textoCard.slice(),
            cor: pessoa.cor.slice()
        };
        login.innerHTML = `<p class='welcome'> Bem Vindo(a) <br> ${code.nome}</p>`

    } else {
        alert("Código não encontrado");
    }

    setTimeout(()=>{
        update(0)
        gerenate()
        loginBg.classList.add('showOffAni')
        setTimeout(()=>{
            loginBg.style.display = 'none'
        }, 1000);
    }, 2000);
}

function start() {
    findCode(acessCode.value)
    // toggleFullScreen()
}

var randomNum = Math.floor(Math.random() * 360) + 1;

loginBg.style = `background: linear-gradient(0deg, rgba(42, 42, 42, 0.44) 0.23%, rgba(42, 42, 42, 0.00) 23.21%), linear-gradient(180deg, hsla(${randomNum}, 42%, 31%, 0.6) 0%, rgba(110, 33, 56, 0.00) 50%), #000;`