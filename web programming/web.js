const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const slider1 = document.querySelectorAll ('.slider1'),
    dot=document.querySelectorAll('.dot')

let counter = 1;
slidefun(counter);

function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n){
    counter = n;
    slidefun (counter);
    resetTimer();
}

function slidefun(n){
    let i;
    for(i=0; i<slider1.length;i++){
        slider1[i].style.display = "none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n> slider1.length){
        counter=1;
    }
    if (n<1){
        counter =slider1.length;
    }
    slider1[counter - 1].style.display = "block";
    dot[counter -1].classList.add('active');
}