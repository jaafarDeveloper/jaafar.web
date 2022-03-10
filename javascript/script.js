const btnOff = document.getElementById("btn-off");
const body = document.getElementById("body");

btnOff.addEventListener("click", () => {
  if (btnOff.classList.contains("fa-toggle-off")) {
    btnOff.classList.add("fa-toggle-on");
    btnOff.classList.remove("fa-toggle-off");
    btnOff.style.color = "#0044ff";
    body.classList.add("body");
  } else {
    btnOff.classList.remove("fa-toggle-on");
    btnOff.classList.add("fa-toggle-off");
    btnOff.style.color = "#556ba5";
    body.classList.remove("body");
  }
});



// show and cansle the navbar for mobile

const showNav = document.getElementById("show-nav");
const cancleNav = document.getElementById("cancle-nav");
const nav = document.getElementById("nav")


showNav.addEventListener("click", () => {
  showNav.classList.toggle("true");

  if (showNav.classList.contains("true")) {

    showNav.style.display ="none";
    nav.style.top = "0"
  }
})


cancleNav.addEventListener("click", () => {
  showNav.classList.remove("true");

  showNav.style.display ="block";
    nav.style.top="-250px"
  
})


