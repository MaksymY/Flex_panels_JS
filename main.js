const panels = document.querySelectorAll('.panels');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleOpen(){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',
   toggleActive));