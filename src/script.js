const contactForm = document.getElementById("contact");
const close=document.getElementById('close');
const more=document.getElementById('more');
const mobilenav=document.getElementById("mobile-nav");
const links=document.querySelectorAll(".mob-links");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sent");
  e.target.reset();
});
close.addEventListener("click",()=>{
    mobilenav.style.width="0vw";
    mobilenav.style.visibility="hidden";
    
});
more.addEventListener("click",()=>{
    mobilenav.style.width="100vw";
    mobilenav.style.visibility="visible";
})
links.forEach(element => {
    element.addEventListener("click",()=>{
        mobilenav.style.width="0vw";
        mobilenav.style.visibility="hidden";
    })
});