
let slidePosition = 0;
        const slides = document.querySelectorAll('div.carousel_item');
        const totalSlides = slides.length;
        

        function updateSlidePosition() {
            for (let slide of slides){
                slide.classList.remove('div.carousel_item--visible');
                slide.classList.add('div.carousel_item--hidden');
            }

            slides[slidePosition].classList.add('carousel_item--visible');
        }
        
        function moveToNextSlide() {
            updateSlidePosition();
            if (slidePosition == totalSlides) {
                slidePosition = 0;
            } else {
                slidePosition++;
            }
            updateSlidePosition();
        }
        
        function moveToPrevSlide() {
            if (slidePosition == totalSlides) {
                slidePosition = totalSlides - 1;
            } else {
                slidePosition--;
            }
            updateSlidePosition();
        }
        

    window.addEventListener('DOMContentLoaded', function () {
        
        document.querySelector('carousel_button--prev').addEventListener('click', moveToPrevSlide, false);
        });
    
    document.querySelector('carousel_button--prev').addEventListener('click', function()  {
            moveToPrevSlide();
        });
    
    document.querySelector('carousel_button--next').addEventListener('click', function() {
            moveToNextSlide();
        });
    
        
        console.log(slides);