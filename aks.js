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

document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  function openModal() {
    modal.classList.add("show");
    console.log("modal opened");
  }

  function closeModal() {
    modal.classList.remove("show");
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

});