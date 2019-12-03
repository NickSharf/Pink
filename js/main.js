'use strict';

var form = document.querySelector('.contest__form');
var submitBtn = document.querySelector('.submit__btn');
var popupError = document.querySelector('.popup--error');
var popupSuccess = document.querySelector('.popup--success');
var closePopup = document.querySelectorAll('.popup__button');

function showCover() {
  var cover = document.createElement('div');
  cover.classList.add('cover');
  document.body.appendChild(cover);
}

function hideCover() {
  document.body.removeChild(document.querySelector('.cover'));
}

if (form) {
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (form.checkValidity()) {
      showCover();
      form.classList.remove('validation-error');
      popupSuccess.classList.add('popup--show');
      form.reset();
    } else {
      showCover();
      popupError.classList.add('popup--show');
      form.classList.add('validation-error');
    }
  });
}

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27 || event.keyCode === 13) {
    if (popupError.classList.contains('popup--show') || popupSuccess.classList.contains('popup--show')) {
      event.preventDefault();
      hideCover();
      popupError.classList.remove('popup--show');
      popupSuccess.classList.remove('popup--show');
    }
  }
});

for (var i = 0; i < closePopup.length; i++) {
  closePopup[i].addEventListener('click', function (event) {
    event.preventDefault();
    hideCover();
    popupError.classList.remove('popup--show');
    popupSuccess.classList.remove('popup--show');
  });
}

'use strict';

var pageheader = document.querySelector('.page-header');
var menutoggle = document.querySelector('.toggle');
var mainnav = document.querySelector('.main-nav');
var pagelogo = document.querySelector('.page-logo');
var icon = document.querySelector('.toggle__icon');

pageheader.classList.remove('page-header--nojs');

pagelogo.classList.remove('page-logo--open');
mainnav.classList.remove('main-nav--shown');
mainnav.classList.add('main-nav--closed');


menutoggle.addEventListener('click', function () {
  if (mainnav.classList.contains('main-nav--closed')) {
    mainnav.classList.remove('main-nav--closed');
    mainnav.classList.add('main-nav--shown');
    icon.classList.remove('toggle__icon--burger');
    icon.classList.add('toggle__icon--cross');
    pagelogo.classList.add('page-logo--open');
  } else {
    mainnav.classList.remove('main-nav--shown');
    mainnav.classList.add('main-nav--closed');
    icon.classList.remove('toggle__icon--cross');
    icon.classList.add('toggle__icon--burger');
    pagelogo.classList.remove('page-logo--open');
  }
});

var map = document.querySelector('map');

if (map) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.938631, 30.323055],
        zoom: 16,
        controls: []
      },{
        suppressMapOpenBlock: true
      },{
        searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(([59.938631, 30.323055]), {

      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/icon-map-marker.svg',
        // Размеры метки.
        iconImageSize: [36, 36],
        // Смещение левого верхнего угла иконки относительно
        // её 'ножки' (точки привязки).
        iconImageOffset: [0, 0]
      });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('routeEditor');
  });
}
