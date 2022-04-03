let pedido = Number(0);

let nomeComida;
let nomeBebida;
let nomeSobremesa;
let valorTotal;

function selecionarPrato(element){
   
    const pratoSelecionado = document.querySelector(".comida .selecionado")

    if(pratoSelecionado !== null && pratoSelecionado !== element && pratoSelecionado !== element ){
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

    if(pratoSelecionado !== null && pratoSelecionado !== element  ){
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
  
    if(pratoSelecionado !== null && pratoSelecionado !== element ){
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

function enviarPedido(){

    let valor1;
    let valor2;
    let valor3;
    let mensagem= "";

    nomeComida = document.querySelector(".comida .selecionado h5").innerHTML;
    valor1 = document.querySelector(".comida .selecionado .preco").innerHTML.replace(/R\$ /, "").replace(/,/, ".");

    nomeBebida = document.querySelector(".bebida .selecionado h5").innerHTML;
    valor2 = document.querySelector(".bebida .selecionado .preco").innerHTML.replace(/R\$ /, "").replace(/,/, ".");;

    nomeSobremesa = document.querySelector(".sobremesa .selecionado h5").innerHTML;
    valor3 = document.querySelector(".sobremesa .selecionado .preco").innerHTML.replace(/R\$ /, "").replace(/,/, ".");;

    valorTotal = Number(valor1) + Number(valor2) + Number(valor3);
    
    mensagem += "Olá, gostaria de fazer o pedido:";
    mensagem += `\n - Prato: ${nomeComida}`;
    mensagem += `\n - Bebida: ${nomeBebida}`
    mensagem += `\n - Sobremesa: ${nomeSobremesa}`
    mensagem += `\n - Total: R$ ${valorTotal}`

    mensagem = encodeURIComponent(mensagem);

    window.open(`https://wa.me/5573999059366?text=${mensagem}`);
}

