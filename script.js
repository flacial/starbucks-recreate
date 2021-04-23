// navbar link animation start
let line = document.querySelector('#line');
let item = document.querySelectorAll('#anchor');
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

// navbar link animation end



