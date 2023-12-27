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
    } else {
        alert("Código não encontrado");
    }
    update(0)
    gerenate()
}
// findCode('TESTE')
// findCode('MTTH3S')
// findCode('RYH0SE')
findCode('TRR3S')