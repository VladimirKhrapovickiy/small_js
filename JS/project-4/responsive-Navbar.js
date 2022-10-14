let navToggle = document.querySelector('.nav-toggle-button');
let menu = document.querySelector('.menu__ul');

navToggle.addEventListener('click', function(){
    menu.classList.toggle('show');
})