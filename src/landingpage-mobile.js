document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburgericon");
    const burgerLinks = document.querySelector(".burgerlinks");
  
    if (hamburgerIcon && burgerLinks) {
      burgerLinks.style.display = "none";
  
      hamburgerIcon.addEventListener("click", function () {
        console.log("Hamburger clicked");
        const isVisible = burgerLinks.style.display === "inline";
        burgerLinks.style.display = isVisible ? "none" : "inline";
      });

      window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
          burgerLinks.style.display = "none";
        } 
      });
    } else {
      console.error("Elements not found: Check if 'hamburgericon' ID and '.burgerlinks' class exist in your HTML.");
    }
  });