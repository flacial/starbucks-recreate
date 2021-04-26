"use strict";

// navbar link animation start
var $ = function $(query) {
  return document.querySelector(query);
};

var line = document.querySelector('#line');
var item = document.querySelectorAll('#anchor');
var secLine = document.querySelector('#secLine');
var tabs = document.querySelectorAll('.tab');
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
});

function secIndicator(e) {
  secLine.style.left = e.offsetLeft + "px";
  secLine.style.width = e.offsetWidth + "px";
} // Make all the tabpanels hidden except the one called tab


var tabPanelsRemover = function tabPanelsRemover(tab) {
  // Loops through 1 to 6 except the tab number while adding hide to the elements and removing show.
  for (var _i = 1; _i < 6; _i++) {
    if (_i !== tab) {
      var tabPanel = document.querySelector("#tab-panel-".concat(_i));
      tabPanel.classList.add('hide');
      tabPanel.style.position = 'absolute';
      tabPanel.classList.remove('show');
    }
  }
};

tabs.forEach(function (Link) {
  Link.addEventListener('click', function (e) {
    secIndicator(e.target); // Slice the last value of the button id which is a number like 1 or 5

    var id = Number(e.target.id[e.target.id.length - 1]); // Slice the last value of the tab panel id which is also a number like 1 or 5

    var tabPanelId = function tabPanelId(id) {
      var tabPanel = document.querySelector("#tab-panel-".concat(id));
      return Number(tabPanel.id[tabPanel.id.length - 1]);
    }; // Function to get the tab panel by id


    var tabPanel = function tabPanel(id) {
      return document.querySelector("#tab-panel-".concat(id));
    }; // Checks if button id (1) is equal to the tab id (1), if they're equal add the show class to the tabpanel and remove the hide class and hide all the rest of the tabpanels


    if (id === tabPanelId(id)) {
      tabPanel(id).classList.add('show');
      tabPanel(id).style.position = 'static';
      tabPanel(id).classList.remove('hide');
      tabPanelsRemover(id);
    }
  });
}); // navbar link animation end
// drinkImg = document.querySelector('.drink-img');
// function imgSlider(images) {
//     document.querySelector('.drink-img').src = images;
// }
// function hChanger(h1) {
//     document.querySelector('.tab-panel-text span').innerHTML = h1;
// }
// function hChanger(h1) {
//     document.querySelector('.tab-panel-text span').innerHTML = h1;
// }
// function pChanger(p) {
//     document.querySelector('.tab-panel-text p').innerHTML = p;
// }
// const tabObj = {
//     tabChanges: [
//       {
//         headerOne: 'Customize your drink',
//         paragraph: 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup',
//       },
//       {
//         headerOne: 'Brewed hot coffee, bakery item or hot tea',
//         paragraph: 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.',
//       },
//       {
//         headerOne: 'Handcrafted drink, hot breakfast or parfait',
//         paragraph: 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.',
//       },
//       {
//         headerOne: 'Salad, sandwich or protein box',
//         paragraph: 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.',
//       },
//       {
//         headerOne: 'Select merchandise or at-home coffee',
//         paragraph: 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.',
//       },
//     ],
//   };