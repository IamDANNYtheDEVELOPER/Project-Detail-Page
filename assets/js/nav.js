const primaryNav = document.querySelector('.nav-content');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => 
{
  const visibility = primaryNav.getAttribute('data-visible');
  
  if (visibility === "false")
  {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  }

  else if (visibility === "true")
  {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
}
);



// TESTING POP_UP

var openBtn = document.querySelector(".open-btn");
var designsPopup = document.getElementById("designs-popup");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function () {
  designsPopup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  designsPopup.style.display = "none";
});

