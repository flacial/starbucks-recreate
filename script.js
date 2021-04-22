// alert('Hello there, everything is working')
// navbar link animation start
var line = document.querySelector('#line');
var item = document.querySelectorAll('#anchor');

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