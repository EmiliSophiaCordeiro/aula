const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const botaoSomar = document.getElementById('somar');
const resultadoTexto = document.getElementById('resultado');

function somar( a, b ) {
    return a + b
}

botaoSomar.addEventListener('click', () => {
    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);

    const resultado = somar(numero1, numero2);

    resultadoTexto.innerText = `resultado: ${resultado}`;
});

module.exports = {
    somar
}