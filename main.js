let dark = document.querySelector('#darkBtn');
let body = document.querySelector('body');
let h2 = document.querySelectorAll('h2');
let h3 = document.querySelectorAll('h3');
let h4 = document.querySelectorAll('h4');
let p = document.querySelectorAll('p');
let ctmr = document.querySelectorAll('.customer__box');
let card = document.querySelectorAll('.news__card');
let sbg = document.querySelector('.get');
let bgc = document.querySelector('#bgc');
let pbt = document.querySelector('#pbt');
let bgImg = document.querySelector('#wrapper');



let imgDark = document.querySelector('.btnImg');

function darkmode(){
  dark.addEventListener('click',(e) => {
    body.classList.toggle('dark');
    h2.forEach(e => {
      e.style.color = "#fff"
    })
    h3.forEach(e => {
      e.style.color = "#fff"
    })
    h4.forEach(e => {
      e.style.color = "#fff"
    })
    p.forEach(e => {
      e.style.color = '#D6D6D6'
    })
    ctmr.forEach(e => {
      e.style.backgroundColor = '#555555'
    })
    sbg.style.backgroundColor = '#6B50FF'

    bgc.style.backgroundColor = '#211F25'

    pbt.style.backgroundColor = '#211F25'

    bgImg.classList.toggle('darks')
  })
}

darkmode()


/// dark mode 




let backBtn = document.querySelector('.backBtn');
let nextBtn = document.querySelector('.nextBtn')


let transform = 0
function changeImage(){
    if(transform >= 0){
        transform = 0;
    } else if(transform <= -700){
        transform = -700;
    } else{
        transform = transform;
    }
    carousel.style.transform = translateX(`${transform}px`);
}


backBtn.addEventListener("click", function(event){
    event.preventDefault();
    transform+=300;
    console.log(transform);
    changeImage();
});

nextBtn.addEventListener("click", function(event){
    event.preventDefault();
    transform-=300;
    console.log(transform);
    changeImage();
});

