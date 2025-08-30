export function mobileMenu() {
  const open = document.querySelector('#open-menu');
  const close = document.querySelector('#close-menu');

  open.addEventListener('click', function openMenu() {
    document.querySelector('.mobile-menu').style.display = 'flex';
    document.querySelector('.close-menu').style.display = 'block';
  });

  close.addEventListener('click', function closeMenu() {
    document.querySelector('.mobile-menu').style.display = 'none';
    document.querySelector('.close-menu').style.display = 'none';
  });
}

const currentURL = window.location.href;

export async function navbarWidth() {
  if (currentURL.includes('dashboard') || currentURL.includes('results')) {
    document.querySelector('.navbar').style.width = '743px';
  }
}

mobileMenu();

navbarWidth();
