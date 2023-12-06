const btnClaro = document.querySelector('#claro');
function mudarCor(){
    const cor1 = "#8181CA";
    document.body.style.backgroundColor = cor1;
}
btnClaro.addEventListener('click',mudarCor);

const btnEscuro = document.querySelector('#escuro');
function mudarCor2(){
    const cor2 = "#3634AC";
    document.body.style.backgroundColor = cor2;
}
btnEscuro.addEventListener('click',mudarCor2);

const btnPadrao = document.querySelector('#padrao');
function mudarCor3(){
    document.body.style.backgroundColor = "#ffff";
}
btnPadrao.addEventListener('click',mudarCor3);