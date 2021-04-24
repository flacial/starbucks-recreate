// navbar link animation start
let line = document.querySelector('#line');
let item = document.querySelectorAll('#anchor');

let secLine = document.querySelector('#secLine');
let tabs = document.querySelectorAll('#tab');

let header = document.getElementById("nav-links");
let btns = header.getElementsByClassName("anchor");


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

function indicator(e) {
    line.style.left = e.offsetLeft+"px";
    line.style.width = e.offsetWidth+"px";
}

item.forEach(Link => {
    Link.addEventListener('click', (e)=> {
        indicator(e.target);
    })
})

function secIndicator(e) {
    secLine.style.left = e.offsetLeft+"px";
    secLine.style.width = e.offsetWidth+"px";
}

tabs.forEach(Link => {
    Link.addEventListener('click', (e)=> {
        secIndicator(e.target);
    })
})

// navbar link animation end
drinkImg = document.querySelector('.drink-img');

function imgSlider(images, g) {
    document.querySelector('.drink-img').src = images;
    drinkImg.style.transition = g;
}

function hChanger(h1) {
    document.querySelector('.tab-panel-text span').innerHTML = h1;
}

function pChanger(p) {
    document.querySelector('.tab-panel-text p').innerHTML = p;
}

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

