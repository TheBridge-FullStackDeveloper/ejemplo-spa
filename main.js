const homeNav = document.getElementById("homeNav");
const aboutNav = document.getElementById("aboutNav");
const contactNav = document.getElementById("contactNav");
const homeDiv = document.getElementById("home");
const aboutDiv = document.getElementById("about");
const contactDiv = document.getElementById("contact");

function hideViews() {
  homeDiv.classList.add("hide"); //escondemos home
  aboutDiv.classList.add("hide"); //esconde about
  contactDiv.classList.add("hide"); //esconde contact
}

function goAbout() {
  hideViews();
  aboutDiv.classList.remove("hide"); //mostrar about
}

function goHome() {
  hideViews();
  homeDiv.classList.remove("hide"); //mostrar home
}

function goContact() {
  hideViews(); //esconde home
  contactDiv.classList.remove("hide");
}

aboutNav.addEventListener("click", goAbout);
homeNav.addEventListener("click", goHome);
contactNav.addEventListener("click", goContact);
