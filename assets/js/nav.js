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



// Designs Pop-Up

var openBtn = document.getElementById("openBtn");
var designsPopup = document.getElementById("designsPopup");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function () {
  designsPopup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  designsPopup.style.display = "none";
});


// Designs Pop-Up - Filterbuttons selections

const filterButtons = document.querySelectorAll(".filter-buttons .filterbutton");
const filterableImages = document.querySelectorAll(".filterable-images .filterable-image");
// console.log(filterButtons, filterableImages);



//Pop-Up stopped responsing after the below code

// Defining the filterImages function
const filterImages = e => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  
  // Iterate over each filterable image
  filterableImages.forEach(filterableImage => {
    // Add "hide" class to hide the image initially
    filterableImage.classList.add("hide");
    // Check if the image matches the selected filter or "all" is selected
    if (filterableImage.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      filterableImage.classList.remove("hide");
    }
  });
};

// Adding Click event listener to each filter button
filterButtons.forEach(filterButton => {
  filterButton.addEventListener("click", filterImages);
});



