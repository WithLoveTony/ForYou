function moveToFirst(cardNumber) {
    cardNumber = cardNumber + 1
    console.log("Clicou no Card " + cardNumber);

    var carousel = document.getElementById('carousel');
    var cards = document.getElementsByClassName('card');

    // Remover a classe 'clicked' dos outros cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('clicked');
    }

    // Adicionar a classe 'clicked' ao card clicado
    event.currentTarget.classList.add('clicked');

    // Encontrar a posição do card clicado
    var index = Array.prototype.indexOf.call(cards, event.currentTarget);

    // Mover o carrossel para a posição do card clicado
    if(window.innerHeight<800){
        var translateValue = -((170 + 0) * index); // Largura do card mais a margem
    }else{
        var translateValue = -((200 + 0) * index); // Largura do card mais a margem
    }
    carousel.style.transform = 'translateX(' + translateValue + 'px)';
    update(cardNumber-1)
}

function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;

    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

    if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
    } else {
        cancelFullScreen.call(doc);
    }
}

const navItem1 = document.getElementById('navItem1')
    const navItem2 = document.getElementById('navItem2')

    navItem1.addEventListener('click',()=>{
        carousel.style.display = 'flex'
        message.style.display = 'flex'
        // header.style.color = '#fff'
        navItem1.classList.remove('itemOff');
        navItem2.classList.add('itemOff');
        bigCard.style.display = 'none'
        console.log('item1')
    })
    navItem2.addEventListener('click',()=>{
        carousel.style.display = 'none'
        message.style.display = 'none'
        // header.style.color = '#fff0'
        navItem2.classList.remove('itemOff');
        navItem1.classList.add('itemOff');
        bigCard.style.display = 'flex'
    })