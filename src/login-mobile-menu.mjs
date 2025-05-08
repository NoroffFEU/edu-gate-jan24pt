export function mobileMenu() {
  const open = document.querySelector('#open-menu');
  const close = document.querySelector('#close-menu');

  open.addEventListener('click', function openMenu() {
    document.querySelector('.mobile-header').style.height = '100vh';
    document.querySelector('.open-menu').style.display = 'none';
    document.querySelector('.close-menu').style.display = 'block';
  });

  close.addEventListener('click', function closeMenu() {
    document.querySelector('.mobile-header').style.height = '70px';
    document.querySelector('.close-menu').style.display = 'none';
    document.querySelector('.open-menu').style.display = 'block';
  });
}
