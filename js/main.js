const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
      mobileMenu.classList.remove("animate-close-menu");
      mobileMenu.classList.add("animate-open-menu");
    } else {
      mobileMenu.classList.remove("animate-open-menu");
      mobileMenu.classList.add("animate-close-menu");
      // Delay hiding the menu until the animation is complete
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");
      }, 500); // Match the duration of the animation
    }
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);