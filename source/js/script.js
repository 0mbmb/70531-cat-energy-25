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
var labelBefore = document.querySelector('.before-after__label--before');
var labelAfter = document.querySelector('.before-after__label--after');
var imageBefore = document.querySelector('.before-after__image--before');
var imageAfter = document.querySelector('.before-after__image--after');

rangeInput.addEventListener('input', function(evt) {
  imageBefore.style.width = (100 - evt.target.value) + '%';
  imageAfter.style.width = evt.target.value + '%';
});


labelBefore.addEventListener('click', function(evt) {
  rangeInput.value = 0;

  imageBefore.style.width = '100%';
  imageAfter.style.width = '0%';
});

labelAfter.addEventListener('click', function(evt) {
  rangeInput.value = 100;

  imageBefore.style.width = '0%';
  imageAfter.style.width = '100%';
});
