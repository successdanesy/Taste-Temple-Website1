const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// ScrollReveal().reveal(".header__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".header__content h2", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".header__content h1", {
//   ...scrollRevealOption,
//   delay: 1000,
// });

// ScrollReveal().reveal(".order__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });


document.addEventListener("DOMContentLoaded", () => {
  // Function to update the image based on selected option
  function updateImage(selectElement) {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const imageId = selectElement.getAttribute("data-image-id");
      const imageUrl = selectedOption.getAttribute("data-image");

      console.log(`Selected option value: ${selectedOption.value}`);
      console.log(`Image ID to update: ${imageId}`);
      console.log(`New image URL: ${imageUrl}`);

      if (imageId && imageUrl) {
          const imageElement = document.getElementById(imageId);
          if (imageElement) {
              console.log(`Updating image src for element with ID: ${imageId}`);
              imageElement.src = imageUrl;
          } else {
              console.log(`No image element found with ID: ${imageId}`);
          }
      }
  }

  // Get all select elements with the data-image-id attribute
  const selectElements = document.querySelectorAll('select[data-image-id]');

  // Attach change event listeners to all select elements
  selectElements.forEach(selectElement => {
      selectElement.addEventListener('change', () => {
          updateImage(selectElement);
      });
  });
});


