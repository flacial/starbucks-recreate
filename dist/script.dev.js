"use strict";

// alert('Hello there, everything is working')
// navbar link animation start
var line = document.querySelector('#line');
var item = document.querySelectorAll('#anchor');
var header = document.getElementById("nav-links");
var btns = header.getElementsByClassName("anchor");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function indicator(e) {
  line.style.left = e.offsetLeft + "px";
  line.style.width = e.offsetWidth + "px";
}

item.forEach(function (Link) {
  Link.addEventListener('click', function (e) {
    indicator(e.target);
  });
}); // navbar link animation end