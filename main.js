function tempoSegundos(segundos){
    const data = new Date(segundos* 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = tempoSegundos(segundos);

    },1000);
}

iniciar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciaRelogio();
    relogio.style.color = '#fff'

});

zerar.addEventListener('click',function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.style.color = 'rgb(255,42,42)';
})