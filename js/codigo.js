function iniciar(){
    console.log("iniciando");
    document.getElementById('titulo')
}




function saludar(){
    let nombre="juan";
    window.alert("hola, como estás? mi nombre es "+nombre);
}

function saludar2(nombre){
    window.alert("hola, como estás? mi nombre es "+nombre);
}

function calcular(){
    let precio=12;
    let unidades=window.prompt("dime cuantas unidades: ");
    let total=precio*unidades;
    window.alert("el total es= "+total);
    window.confirm("Aceptas la compra?");
}
