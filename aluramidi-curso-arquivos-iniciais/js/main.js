/* Função para tocar os sons 
Foi passado o paramêtro idElementAudio
*/
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
   
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } else{
        console.log('Elemento não encontrado ou seletor invalido.');
    }
}


/* Constante para guardar as teclas do documento */
const listaDeTeclas = document.querySelectorAll('.tecla');

/* Variavel de controle */

/* Estrutura de repetição para percorrer o nodelist das teclas */
for (let i = 0; i < listaDeTeclas.length; i++) {


    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    
    
    /* template String */
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    /* função de click */
    tecla.onclick = function (){
        tocaSom(idAudio)
    }
    

    console.log(i);

    // Evento de tecla 
    tecla.onkeydown = (evento)=>{
        
        console.log(evento.code === 'Space');
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = ()=>{
        tecla.classList.remove('ativa')
    }
}
 

