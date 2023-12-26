function moveToFirst(cardNumber) {
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
    var translateValue = -((160 + 0) * index); // Largura do card mais a margem
    carousel.style.transform = 'translateX(' + translateValue + 'px)';
}