 function Coletar(){
    let input = document.querySelector('.input-make').value
  console.log(input)
   dados(input)
}
//função para consumir API
async function dados(input){
let dados= await fetch(`http://makeup-api.herokuapp.com/api/${input}/json`).then(Response=>Response.json())
console.log(dados)
ExibirDados(dados)
}

//função inserir dados na tela
function ExibirDados(dados){
    document.querySelector('.Nome').value = dados.name
    document.querySelector('.Marca').value = dados.mark
    document.querySelector('.Preco').value = dados.price
    document.querySelector('.Descricao').value = dados.description
}