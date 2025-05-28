// register-mobile-menu.mjs
export function mobileMenu() {

  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const mobileMenu = document.querySelector('.header-bottom');

  if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', () => {
      mobileMenu.style.display = 'block';
      openMenuBtn.style.display = 'none';
      closeMenuBtn.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      openMenuBtn.style.display = 'block';
      closeMenuBtn.style.display = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mobileMenu();
});
