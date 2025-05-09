import { Modal } from "./modal.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* object literal com propriedades e valores*/


form.onsubmit = function(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const showAlerError = notANumber(weight) || notANumber(height)

    if (showAlerError){
        Error.open()
        return;
    }

    Error.close()

    const result =IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    
   Modal.message.innerText = message
    Modal.open()
}

function notANumber(value){
    return isNaN(value) || value == ""
}

const Error = {
    element: document.querySelector('.alert-error'),

    open() {
       Error.element.classList.add('open')

    },
    close() {
       Error.element.classList.remove('open')
    }
}

function IMC(weight, height){
    return (weight / ((height / 100) **2)).toFixed(2)
}

const closeError = {
    erro: document.querySelector('.alert-error'),
    input: document.querySelector('.input-wrapper'),

    close() {
        closeError.erro.classList.remove('open')
    }
}

closeError.input.oninput = () =>{
    closeError.close()
}