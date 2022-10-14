document.querySelector('.project_1__button').onclick = switchBackground;
function switchBackground(){
    let element = document.querySelector('.project_1');
    element.classList.toggle('cool')
  }