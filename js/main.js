const form = document.querySelector('#novoItem')
const lista = document.querySelector('#lista')
const item = JSON.parse(localStorage.getItem('item'))||[]


item.forEach((elemento)=>{
    criaElemento(elemento)
    
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    const existe = item.find(elemento => elemento.nome === nome.value)
   
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
       }

       if(existe){
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        item[existe.id] = itemAtual
       }else{
        itemAtual.id = item.length
        
        criaElemento(itemAtual)

        item.push(itemAtual)
        console.log(item)
    }

    
    
       localStorage.setItem('item', JSON.stringify (item))

   nome.value = ""
    quantidade.value = ""
})

function criaElemento(item){

   const novoItem = document.createElement('li')
   novoItem.classList.add('item')

   const numeroItem = document.createElement('strong')
  
   numeroItem.innerHTML = item.quantidade
   
   numeroItem.dataset.id = item.id
   
   novoItem.appendChild(numeroItem) 
   
   novoItem.innerHTML += item.nome
   
   novoItem.appendChild(botaoDeleta(item.id))
   
   lista.appendChild(novoItem)

}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'X'

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
    
}

function deletaElemento(tag, id){
    tag.remove()

    item.splice(item.findIndex(elemento => elemento.id === id), 1)
    localStorage.setItem('item', JSON.stringify (item))
}



