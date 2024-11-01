/*console.log("Hola mundo")

let nombre= "Nodo Tecnologico";

let edad= 18

console.log("Hola soy"+ nombre + "y tengo"+ edad + "años")
//definicion de funcion
function suma(numero1 ,numero2){
    return numero1+numero2
}
//Llamado a la funcion
let resultado = suma(5,8)
console.log(resultado)*/

const persona = {
    nombre:"Juli Cano",
    edad: 14,
    anioDeNacimiento: 2009

}
console.log("Hola soy " + persona.nombre + " tengo " + persona.edad + " y naci en " + persona.anioDeNacimiento)
   
const textoHeader = document.querySelector("#heading")
console.log(textoHeader)
textoHeader.textContent = "Nuevo Texto"
textoHeader.classList.add('nueva-clase')
const enlaces =document.querySelectorAll('.navegacion a')
console.log(enlaces[2])

enlaces[2].textContent= "Holaaaaaaaaaaaaaaaaaaaaaa"

const nuevoEnlace = document.createElement('A')
nuevoEnlace.textContent= "ver mas"
nuevoEnlace.href= "https://github.com/juliettty/Jsblogcafe-j.c-"
nuevoEnlace.classList.add("nueva-clase")
const navegacion= document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)

const nuevoParrafo= document.createElement('P')
nuevoParrafo.textContent= "hhhhhh"
nuevoParrafo.classList.add("nueva-clase")
const headerTexto= document.querySelector('header__texto')
headerTexto.appendChild(nuevoParrafo)

const textoPrueba = document.createElement('p')

 textoPrueba.textContent = "El mejor caffe"

 
 textoPrueba.classList.add("nueva-calse")

 const HeaderTexto = document.querySelector('.header__texto')

 HeaderTexto.appendChild(textoPrueba)

 const btnForm= document.querySelector('.formulario input[type=submit]')
 console.log(btnForm)

 /*btnForm.addEventListener('click', function(){


 })*/

 btnForm.addEventListener('click', imprimirClick)

 function imprimirClick(e){
    e.preventDefault()
console.log("click")
 }

 const btnCam= document.querySelector('h3')
 console.log(btnCam)
 btnCam.addEventListener('click', cambiarClase)
 function cambiarClase(e) {
    e.preventDefault()
    console.log("clickDos")
 }