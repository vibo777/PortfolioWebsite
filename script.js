const hamburger =  document.querySelector(".hamburger");  
const headermenu = document.querySelector(".header-menu");

  hamburger.addEventListener("click",() => {
  hamburger.classList.toggle("active");
  headermenu.classList.toggle("active"); 
})
