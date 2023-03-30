const primaryNav = document.querySelector('.nav-content');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => 
{
  const visibility = primaryNav.getAttribute('data-visible');
  
  if (visibility === "false")
  {
    primaryNav.setAttribute('data-visible', true);
    primaryNav.setAttribute('aria-expanded', true);
  }

  else if (visibility === "true")
  {
    primaryNav.setAttribute('data-visible', false);
    primaryNav.setAttribute('aria-expanded', false);
  }
}
);