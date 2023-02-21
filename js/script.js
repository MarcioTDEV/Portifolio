const botao = document.querySelector(".header_botao")
const nav = document.querySelector(".header_container_menus")

const botaoHome = document.querySelector(".botao_menu_home")
botaoHome.addEventListener("click", ()=>{
    nav.classList.toggle("show")
})

const botaohabilidades = document.querySelector(".botao_menu_habilidades")
botaohabilidades.addEventListener("click", ()=>{
    nav.classList.toggle("show")
})

const botaoportifolio = document.querySelector(".botao_menu_portifolio")
botaoportifolio.addEventListener("click", ()=>{
    nav.classList.toggle("show")
})

const botaocontato = document.querySelector(".botao_menu_contato")
botaocontato.addEventListener("click", ()=>{
    nav.classList.toggle("show")
})

botao.addEventListener("click",()=>{
    nav.classList.toggle("show")
})