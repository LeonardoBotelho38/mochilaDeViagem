const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')
const item = JSON.parse(localStorage.getItem('item'))||[]


item.forEach((elemento)=>{
    criaElemento(elemento)
    console.log(elemento)
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
       }

    criaElemento(itemAtual)

       item.push(itemAtual)
    
       localStorage.setItem('item', JSON.stringify (item))

   nome.value = ""
    quantidade.value = ""
})

function criaElemento(item){

   const novoItem = document.createElement('li')
   novoItem.classList.add('item')

   const numeroItem = document.createElement('strong')
   numeroItem.innerHTML = item.quantidade
   
   novoItem.appendChild(numeroItem) 
   novoItem.innerHTML += item.nome
    
   lista.appendChild(novoItem)

  
   

}