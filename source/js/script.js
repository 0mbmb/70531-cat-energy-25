// Nav
var mainNav = document.querySelector('.main-nav');

// Toggle
var mainNavToggle = document.querySelector('.main-header__toggle');
var toggleIcon = document.querySelector('.toggle__icon');

// Mobile Menu No JS
mainNav.classList.remove('main-nav--no-js');

// Mobile Menu On/off
mainNavToggle.addEventListener('click', function (evt) {
  mainNav.classList.toggle('main-nav--active');
  toggleIcon.classList.toggle('toggle__icon--close');
});

// Before - After
var rangeInput = document.querySelector('#before-after');
var imageBefore = document.querySelector('.before-after__image--before');
var imageAfter = document.querySelector('.before-after__image--after');

rangeInput.addEventListener('input', (event) => {
  imageBefore.style.width = event.target.value + '%';
  imageAfter.style.width = (100 - event.target.value) + '%';
});
