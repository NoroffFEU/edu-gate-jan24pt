document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburgericon");
    const burgerLinks = document.querySelector(".burgerlinks");
  
    burgerLinks.style.display = "none";
  
    hamburgerIcon.addEventListener("click", function () {
      console.log("Hamburger clicked");
      const isVisible = burgerLinks.style.display === "flex";
      burgerLinks.style.display = isVisible ? "none" : "flex";
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        burgerLinks.style.display = "none";
      } 
    });
  });