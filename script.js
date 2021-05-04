// navbar link animation start
const $ = query => document.querySelector(query)

let line = document.querySelector('#line');
let item = document.querySelectorAll('#anchor');

const tab1 = document.querySelector('#tab-1')
let secLine = document.querySelector('#secLine');

// Change secLine width to tab button width
secLine.style.width = `${tab1.clientWidth}px`;

let tabs = document.querySelectorAll('.tab');

let header = document.getElementById("nav-links");
let btns = header.getElementsByClassName("anchor");

const input = $('input');
const label = $('label');

input.addEventListener('focus', e => {
    label.style.bottom = '2.2rem';
    label.classList.add('animate-input-show');
})

input.addEventListener('blur', e => {
    if (!input.value.length) {
        label.style.bottom = '10px';
        label.classList.remove('animate-input-show');
    }
})




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

item.forEach(Link => {
    Link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})

function secIndicator(e) {
    secLine.style.left = e.offsetLeft + "px";
    secLine.style.width = e.offsetWidth + "px";
}

// Make all the tabpanels hidden except the one called tab
const tabPanelsRemover = (tab) => {

    // Loops through 1 to 6 except the tab number while adding hide to the elements and removing show.
    for (let i = 1; i < 6; i++) {
        if (i !== tab) {
            const tabPanel = document.querySelector(`#tab-panel-${i}`);
            tabPanel.classList.add('hide');
            tabPanel.style.position = 'absolute';
            tabPanel.classList.remove('show');
        }

    }
}



tabs.forEach(Link => {
    Link.addEventListener('click', (e) => {
        secIndicator(e.target);

        // Slice the last value of the button id which is a number like 1 or 5
        const id = Number(e.target.id[e.target.id.length - 1])

        // Slice the last value of the tab panel id which is also a number like 1 or 5
        const tabPanelId = (id) => {
            const tabPanel = document.querySelector(`#tab-panel-${id}`)

            return Number(tabPanel.id[tabPanel.id.length - 1])
        }

        // Function to get the tab panel by id
        const tabPanel = (id) => document.querySelector(`#tab-panel-${id}`)

        // Checks if button id (1) is equal to the tab id (1), if they're equal add the show class to the tabpanel and remove the hide class and hide all the rest of the tabpanels
        if (id === tabPanelId(id)) {
            tabPanel(id).classList.add('show')
            tabPanel(id).style.position = 'static'
            tabPanel(id).classList.remove('hide')
            tabPanelsRemover(id)
        }
    })
})

// navbar link animation end
// drinkImg = document.querySelector('.drink-img');


// function imgSlider(images, g) {
//     document.querySelector('.drink-img').src = images;
//     drinkImg.style.transition = g;
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