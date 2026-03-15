const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const container = document.querySelector('.container');

f1.addEventListener('mouseenter', entrar);
f2.addEventListener('mouseenter', entrar);
f3.addEventListener('mouseenter', entrar);
f4.addEventListener('mouseenter', entrar);
f1.addEventListener('mouseout', sair);
f2.addEventListener('mouseout', sair);
f3.addEventListener('mouseout', sair);
f4.addEventListener('mouseout', sair);

function entrar() {
    const img = event.target.dataset.foto;
    container.style.backgroundImage = `url(${img})`;
}

function sair() {
    container.style.backgroundImage = '';
}
