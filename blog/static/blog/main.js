
const ham = document.querySelector(".ham");
const hamSpans = document.querySelectorAll(".ham span");
const nav = document.querySelector(".nav-links");


let open = false;
function close() {
  nav.style.transform = "translateX(100%)";
  hamSpans[1].style.transform = "translate(0)";
  hamSpans[0].classList.remove("down");
  hamSpans[2].classList.remove("up");
  
  open = false;

}
function openNav(){
   console.log("open")
  hamSpans[1].style.transform = "translateX(1000px)";
  nav.style.transform = "translateX(0)";
  hamSpans[0].classList.add("down");
  hamSpans[2].classList.add("up");
  open = true;
}

ham.addEventListener("click", (toggle) => {
   console.log('click')
  if(open){
    close();
  }else{
    openNav();
  }
});