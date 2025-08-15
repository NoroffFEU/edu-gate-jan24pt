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

export async function headerLinksDisplay() {
  if (currentURL.includes('login') || currentURL.includes('sign_up') || currentURL.includes('register')) {
    document.querySelector('.navbar').style.width = '495px';
  }
}

mobileMenu();

headerLinksDisplay();
