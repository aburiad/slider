const imgSlide = document.querySelector('.carousel-slide');
const img = document.querySelectorAll('.carousel-slide img')
 
// Button
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

// Counter
let counter = 1;
const size = img[0].clientWidth;

imgSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

// ButtonSlide
nextBtn.addEventListener('click', ()=>{
    if(counter >= img.length -1) return;
    imgSlide.style.transition ='transform 0.4s ease-in-out';
    counter++;
    imgSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', ()=>{
    if(counter <= 0)return;
    imgSlide.style.transition ='transform 0.4s ease-in-out';
    counter--;
    imgSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
});
imgSlide.addEventListener('transitionend',()=>{
    if(img[counter].id == "lastClone"){
        // console.log('prev');
        imgSlide.style.transition ='none';
        counter = img.length - 4;
        imgSlide.style.transform = 'translateX('+ (-size * counter) + 'px)'
    }
    if(img[counter].id == "firstClone"){
        // console.log('next');
        imgSlide.style.transition ='none';
        counter = img.length - counter;
        imgSlide.style.transform = 'translateX('+ (-size * counter) + 'px)'
    }
});