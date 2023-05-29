const button = document.querySelector('.header__showHamburgerButton')
const hamburgerNav = document.querySelector('.header__hamburger__nav')

button.addEventListener('click',()=>{
    if(button.childNodes[1].classList.contains('arrowDown')){
        button.childNodes[1].classList.remove('arrowDown')
        button.childNodes[1].classList.add('arrowUp')
        button.style.top = "170px"
        button.style.animation = "slideAndRotateArrowDown 0.5s linear forwards"
        hamburgerNav.style.top = "0px"
        hamburgerNav.style.animation = "slideDown 0.5s linear"
    }else if(!button.childNodes[1].classList.contains('arrowDown')){
        button.childNodes[1].classList.add('arrowDown')
        button.childNodes[1].classList.remove('arrowUp')
        button.style.top = "0px"
        button.style.animation = "slideAndRotateArrowUp 0.5s linear forwards"
        hamburgerNav.style.top = "-200px"
        hamburgerNav.style.animation = "slideUp 0.5s linear"
    }
})