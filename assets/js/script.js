// SELECT
const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');
const selectValue = document.getElementById('select-value');

selectHeader.forEach(item => {
  item.addEventListener('click', selectToggle)
});

selectItem.forEach(item => {
  item.addEventListener('click', selectChoose)
});

function selectToggle() {
  this.parentElement.classList.toggle('active');
}

function selectChoose() {
  const text = this.innerText,
    select = this.closest('.select'),
    currentText = select.querySelector('.select__current');
  currentText.innerText = text;
  select.classList.remove('active');
  selectValue.value = text;
}


const select = document.querySelector('#select');
document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(select);

  if (!withinBoundaries) {
    select.classList.remove('active');
  }
})

// SCROLL
new SimpleBar(document.getElementById('custom-scroll'), {
  autoHide: false,
  classNames: {
    scrollbar: 'scrollbar__scroll',
    track: 'scrollbar__track'
  }
});

// RANGE
const range = document.getElementById('range');
const rangeValue = document.querySelector('.range__value');

rangeValue.innerHTML = range.value + ' %';

range.oninput = function () {
  rangeValue.innerHTML = this.value + ' %';
}

// FILE
let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.file__text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.file__text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.file__text').innerText = labelVal;
  });
});

//MOBILE-MENU
let burger = document.querySelector('#icon-menu');
let overlay = document.querySelector('#overlay');
let mobileMenu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelectorAll('.nav--mob  a');

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
  overlay.classList.toggle('active');
  mobileMenu.classList.toggle('active');

  if (overlay.classList.contains('active')) {
    overlay.addEventListener('click', function () {
      this.classList.remove('active');
      document.querySelector('body').classList.remove('lock');
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');

    })
  }

  if (burger.classList.contains('active')) {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        overlay.classList.remove('active');
        document.querySelector('body').classList.remove('lock');
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
      })
    })
  }
})

//REMOVE <br>
if (window.innerWidth <= 992) {
  document.querySelector('.title--main br').style.display = 'none';
}

window.addEventListener('resize', function () {
  if (window.innerWidth <= 992) {
    document.querySelector('.title--main br').style.display = 'none';
  } else {
    document.querySelector('.title--main br').style.display = 'inline-block';
  }
});