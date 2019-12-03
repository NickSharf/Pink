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
