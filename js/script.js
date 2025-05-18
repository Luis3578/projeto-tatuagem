// SCROOL NO HEADER
window.document.querySelector('header')

window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header = window.scrollY > 100 ? header.classList.add('rolagem') : header.classList.remove('rolagem')
})
// FIM SCROOL


// SLIDE DEPOIMENTO
// PEGANDO DO DOM
const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')
const slider = document.querySelectorAll('.box-depoimento')
const containerSlider = document.querySelector('.container-depoimento')
const sliderTotal = slider.length
// FIM


// CLONANDO O PRIEMRIO E ULTIMO SLIDE PARA DEIXAR COM LOOP INFINITO
const primeiroClone = slider[0].cloneNode(true)
const segundoClone = slider[sliderTotal - 1].cloneNode(true)
// FIM

let isTransitioning = false

// AQUI VAI ADICIONAR UM CLONE NO FIM E NO INICIO
containerSlider.appendChild(primeiroClone)
containerSlider.insertBefore(segundoClone, containerSlider.firstChild)
// FIM

// AQUI VAI ATUALIZAR A NOVA LISTA DE SIDES JA COM CLONE INCLUSO
const novosSlides = document.querySelectorAll('.box-depoimento')
let indexNovo = 1
const larguraSlide = novosSlides[0].clientWidth
// FIM

// POSICIONA NO PRIMEIRO SLIDE REAL
containerSlider.style.transform = `translate3d(-${larguraSlide * indexNovo}px, 0, 0)`
// FIM

// AQUI FAZ A VERIFICAÇÃO SE O SLIDE CHEGOU NO CLONE E RESETA
containerSlider.addEventListener('transitionend', () => {
    if (novosSlides[indexNovo].isEqualNode(primeiroClone)) {
        containerSlider.style.transition = 'none'

        indexNovo = 1

        containerSlider.style.transform = `translate3d(-${larguraSlide * indexNovo}px, 0 ,0)`
    }

    if (novosSlides[indexNovo].isEqualNode(segundoClone)) {
        containerSlider.style.transition = 'none'

        indexNovo = novosSlides.length - 2

        containerSlider.style.transform = `translate3d(-${larguraSlide * indexNovo}px, 0 ,0)`
    }

    isTransitioning = false

})
// FIM

btnNext.addEventListener('click', () => {
    if (indexNovo >= novosSlides.length - 1 || isTransitioning) return

    indexNovo++

    containerSlider.style.transition = `transform 0.3s ease`
    containerSlider.style.transform = `translate3d(-${larguraSlide * indexNovo}px, 0, 0)`

    // DESATIVA O BOTÃO ENQUANTO A TRANSIÇÃO ESTÁ ACONTECENDO
    isTransitioning = true
})

btnPrev.addEventListener('click', () => {
    if (indexNovo <= 0 || isTransitioning) return

    indexNovo--

    containerSlider.style.transition = `transform 0.3s ease`
    containerSlider.style.transform = `translate3d(-${larguraSlide * indexNovo}px, 0, 0)`

    // DESATIVA O BOTÃO ENQUANTO A TRANSIÇÃO ESTÁ ACONTECENDO
    isTransitioning = true
})
// FIM SLIDE DEPOIMENTO


// MENU RESPONSIVEL
const abrirMenu = document.querySelector('.abrir-menu')
const fecharMenu = document.querySelector('.menu-fechar')
const containerMenu = document.querySelector('.container-menu')
const navMenu = document.querySelector('.nav-menu')

abrirMenu.addEventListener("click", () => {
    containerMenu.classList.add('efect')
})

fecharMenu.addEventListener("click", () => {
    containerMenu.classList.remove('efect')
})

navMenu.addEventListener("click", () => {
    containerMenu.classList.remove('efect')
})