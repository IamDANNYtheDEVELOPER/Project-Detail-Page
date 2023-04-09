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

//Header
// var lastScrollTop = 0;
//     primaryheader = document.getElementById("primaryheader");
// window.addEventListener("scroll", function()
// {
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   if(scrollTop > lastScrollTop)
//   {
//     primaryheader.style.top = "-80px";
//   }
//   else
//   {
//     primaryheader.style.top = "0";
//   }
//   lastScrollTop = scrollTop;
// })

window.addEventListener("scroll", function(){
  var header = document.getElementById("primaryheader");
  header.classList.toggle("sticky", window.scrollY > 0);
})