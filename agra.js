let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

function showSlide(){
    slides.style.transform = `translateX(-${index * 700}px)`;
}

function nextSlide(){
    index++;
    if(index >= total-2){
        index = 0;
    }
    showSlide();
}

function prevSlide(){
    index--;
    if(index < 0){
        index = total - 1;
    }
    showSlide();
}

/* Auto Slide */
setInterval(()=>{
    nextSlide();
}, 3000); // 3 seconds
