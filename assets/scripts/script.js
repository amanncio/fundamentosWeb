// const button = document.querySelector('#button')

// function enviar(){
//     alert("Formulário Enviado!")
// }

// let nome = document.getElementById('name')

// function validaNome(){
//     if(nome.value.length <= 3){
//         nome.style.border = "5px solid red"
//         nome.style.color = 'orange'
//     }else{
//         nome.style.border = '5px solid green'
//         nome.style.color = 'black'
//     }
// }

// let email = document.querySelector('#email');
// let descricao = document.querySelector("#descricao")

/* 
O Java Script é CaseSensitive

Para acessar...
Por tag: getElementByTagName()
Por Id: getElementById()
Por nome: getElementByName()
Por Classe: getElementByClassName()
Por Seeletores: querySelector()
*/


let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let descricao = document.querySelector("#descricao")
let nomeOk = false
let emailOk = false
let descricaoOk = false
let mapa = document.querySelector("#mapa")


nome.style.width = "100%"
email.style.width ="100%"

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color ="red"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaDescricao(){
    let txtDescricao = document.querySelector("#txtDescricao")

    if(descricao.value.length >= 100){
        txtDescricao.innerHTML = "O texto é muito grande, utilize no máximo 100 caracteres."
        txtDescricao.style.color = "red"
        txtDescricao.style.display = "block"

    }else{
        txtDescricao.style.display = "none"
        descricaoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && descricaoOk == true){
        alert("Formulário enviado com sucesso!")
    }else{
        alert("Preecha o formulário corretamente.")
    }
}

function mapaZoom(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

function mapaNormal(){
    mapa.style.width = "300px"
    mapa.style.height = "170px"
}
