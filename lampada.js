function ligarLampada(){
   document.getElementById('lampada').src = './img/ligada.jpg'; 
}

document.getElementById('ligar').addEventListener('click', ligarLampada);

function desligarLampada(){
    document.getElementById('lampada').src = './img/desligada.jpg';
}

document.getElementById('desligar').addEventListener('click', desligarLampada);

function duploClickLampada(){
    document.getElementById('lampada').src = './img/quebrada.jpg';
}

document.getElementById('lampada').addEventListener('dblclick', duploClickLampada);