window.addEventListener('scroll',function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})

function toggleMenu(){
const toggle = document.querySelector('.toggle')
const navbar = document.querySelector('.navbar')
    toggle.classList.toggle('active')
    navbar.classList.toggle('active')}
