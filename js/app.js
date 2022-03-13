// const slides = document.querySelectorAll('.slide');
const prew = document.querySelector('.btn-prew');
const next = document.querySelector('.btn-next');
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const widthSlider = parseInt(window.getComputedStyle(slider).width);

let current = 0;

next.addEventListener('click', () => {
   if (current < (slide.length - 1) * widthSlider || current === 0) {
      prew.style.opacity = '1';
      current += widthSlider;
      slider.style.transform = `translateX(${-current}px)`;

      if (current === (slide.length - 1) * widthSlider) {
         next.style.opacity = '0.4';
      }
   }
   activeDots();
});

prew.addEventListener('click', () => {
   if (current > 0) {
      next.style.opacity = '1';
      current -= widthSlider;
      slider.style.transform = `translateX(${-current}px)`;
   }
   if (current === 0) {
      prew.style.opacity = '0.4';
   }
   activeDots();
});

function activeDots() {
   for (let dot of dots) {
      dot.classList.remove('active');
   }
   dots[current / widthSlider].classList.add('active');
}

///////////////////////////////
// let index = 0;

// const activeSlide = (n) => {
//    console.log(index);

//    for (let slide of slides) {
//       slide.classList.remove('active');
//    }
//    slides[n].classList.add('active');
// };

// const dobleFunc = (ind) => {
//    activeSlide(ind);
//    activeDot(ind);
// };

// const nextSlide = () => {
//    if (index == slides.length - 1) {
//       index = 0;
//       dobleFunc(index);
//    } else {
//       index++;
//       dobleFunc(index);
//    }
// };

// const prewSlide = () => {
//    if (index == 0) {
//       index = slides.length - 1;
//       dobleFunc(index);
//    } else {
//       index--;
//       dobleFunc(index);
//    }
// };
// next.addEventListener('click', nextSlide);
// prew.addEventListener('click', prewSlide);

// dots.forEach((item, indexDot) => {
//    item.addEventListener('click', () => {
//       index = indexDot;
//       dobleFunc(index);
//    });
// });

// const activeDot = (n) => {
//    for (let dot of dots) {
//       dot.classList.remove('active');
//    }
//    dots[n].classList.add('active');
// };
// // setInterval(nextSlide, 5000);
// const dotsClick = () => {};
