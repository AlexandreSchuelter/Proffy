// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar a ação
function cloneField(){
    // Duplicar os campos    
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        fields.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


// Colocar na Página
