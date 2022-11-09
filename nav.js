let navLinksMobile = document.querySelector('.links-mobile')
let btnNavMobile = document.querySelector('.icons-nav')
let openNav = document.querySelector('.icon-hamburger')
let closeNav = document.querySelector('.icon-close')




btnNavMobile.addEventListener('click', function(){
    navLinksMobile.classList.toggle('nav-mobile-active')
    openNav.classList.toggle('hidden')
    closeNav.classList.toggle('hidden')
})

