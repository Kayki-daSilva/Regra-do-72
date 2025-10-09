const btncalc = document.getElementById('btncalc');
const valor = document.getElementById('valor');
const juros = document.getElementById('juros');
const total = document.getElementById('total');
const anos = document.getElementById('anos');
const capital = document.getElementById('capital');
const tempo = document.getElementById('tempo');

const CalcularAno = () => {
    let taxa = parseFloat(juros.value)
    let res = 72 / taxa
    anos.innerHTML = Math.floor(res) + " Anos " + Math.floor((res - Math.floor(res)) * 12) + " Meses"
}

const Calcular = () => {
    let res = parseFloat(capital.value) * (1 + (juros.value / 100)) ** tempo.value
    total.innerHTML = "Resultado: " + res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

btncalc.onclick = () => {
    Calcular()
    CalcularAno()
}
