let pedido = Number(0);

function selecionarPrato(element){
   
    const pratoSelecionado = document.querySelector(".comida .selecionado")

    if(pratoSelecionado !== null ){
        pratoSelecionado.classList.remove("selecionado");
        pratoSelecionado.querySelector("ion-icon").classList.add("sumido");
       pedido--;
       
    }
    if(pratoSelecionado === null || pratoSelecionado !== element){
        element.classList.add("selecionado");
        element.querySelector("ion-icon").classList.remove("sumido");
        pedido++;
       
    }
    ativarBotao()

}

function selecionarBebida(element){
   
    const pratoSelecionado = document.querySelector(".bebida .selecionado")

    element.classList.toggle("selecionado");
    element.querySelector("ion-icon").classList.toggle("sumido");

    if(pratoSelecionado !== null ){
        pratoSelecionado.classList.remove("selecionado");
        pratoSelecionado.querySelector("ion-icon").classList.add("sumido");
       pedido--;
       
    }
    if(pratoSelecionado === null || pratoSelecionado !== element){
        element.classList.add("selecionado");
        element.querySelector("ion-icon").classList.remove("sumido");
        pedido++;
        
    }
    ativarBotao()
   
}

function selecionarSobremesa(element){
   
    const pratoSelecionado = document.querySelector(".sobremesa .selecionado")

    element.classList.toggle("selecionado");
    element.querySelector("ion-icon").classList.toggle("sumido");

  
    if(pratoSelecionado !== null ){
        pratoSelecionado.classList.remove("selecionado");
        pratoSelecionado.querySelector("ion-icon").classList.add("sumido");
       pedido--;
       
    }
    if(pratoSelecionado === null || pratoSelecionado !== element){
        element.classList.add("selecionado");
        element.querySelector("ion-icon").classList.remove("sumido");
        pedido++;
        
    }
    ativarBotao()
}


function ativarBotao(){    

    const btn = document.querySelector('.rodaPe button');

    if(pedido === 3){
        
        btn.classList.remove("fundorBotao");
        btn.classList.add("cursor");
        btn.disabled = false;
        btn.innerHTML = "Fazer pedido";
    } 
    else{
        btn.classList.remove('cursor');
        btn.classList.add("fundorBotao");
        btn.disabled = true;
        btn.innerHTML = "selecione os 3 itens para fechar o pedido";
    } 
}

