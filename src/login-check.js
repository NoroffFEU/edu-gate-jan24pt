import { mobileMenu } from './login-mobile-menu.mjs';
mobileMenu();

const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');

  if (
    email.value.includes('@') &&
    email.value.includes('.') &&
    password.value !== ''
  ) {
    e.preventDefault();
    if (email.value.includes('student')) {
      window.location.href = '../dashboard/student/index.html';
    }
    if (email.value.includes('teacher')) {
      window.location.href = '../dashboard/teacher/index.html';
    }
    if (email.value.includes('admin')) {
      window.location.href = '../dashboard/admin/index.html';
    }
  } else {
    e.preventDefault();
    //displays alert
    document.querySelector('.error-container').style.display = 'block';

    //checks for missing inputs
    if (email.value === '') {
      document.querySelector('.email').style.borderColor = '#FF5722';
      document.querySelector('.email-error').style.display = 'block';
      document.querySelector('#email-error').innerText = 'Please input email.';
    } else {
      if (email.value.includes('@') && email.value.includes('.')) {
        document.querySelector('.email').style.borderColor = '#CCCCCC';
        document.querySelector('.email-error').style.display = 'none';
      } else {
        document.querySelector('.email').style.borderColor = '#FF5722';
        document.querySelector('.email-error').style.display = 'block';
        document.querySelector('#email-error').innerText =
          'Please input valid email.';
      }
    }

    if (password.value === '') {
      document.querySelector('.password').style.borderColor = '#FF5722';
      document.querySelector('.password-error').style.display = 'block';
      document.querySelector('#password-error').innerText =
        'Please input password.';
    } else {
      document.querySelector('.password').style.borderColor = '#CCCCCC';
      document.querySelector('.password-error').style.display = 'none';
    }
  }

  //close alert
  document
    .querySelector('#close-alert')
    .addEventListener('click', function removeAlert() {
      document.querySelector('.error-container').style.display = 'none';
    });
});
