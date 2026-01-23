let user = document.getElementById("user"); 
let loginBtn = document.getElementById("loginBtn"); 
let placeName = document.getElementById("placeName"); 
let submit = document.getElementById("submit"); 
let connect=document.getElementById("conect");
 
user.addEventListener("click",function(){ 
   document.querySelector(".loginpage").classList.toggle("active1"); 
}) 
   loginBtn.addEventListener("click",function(){ 
 
    let email = document.getElementById("email"); 
    let pass = document.getElementById("pass"); 
 
    if(email.value == "" && pass.value == ""){ 
        alert("please Fill Detail") 
    }
    else{ 
        alert("You Logged In") 
        document.querySelector(".loginpage").style.display="none" 
    } 
 }) 
 
 
   submit.addEventListener("click",function(){ 
    if( placeName.value == ""){ 
alert("Fill Form") 
}else{ 
alert(placeName.value + " Tour Booked") 
} 
})
connect.addEventListener("click",function(){
    alert("connected, We Response After Sometimes (THANK-YOU)")
})
  function goToPage() {
    window.location.href = "agra.html";
  }
// about agra page
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

function showSlide(){
    slides.style.transform = `translateX(-${index * 800}px)`;
}

function nextSlide(){
    index++;
    if(index >= total){
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

