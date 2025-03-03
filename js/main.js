AOS.init();
let hamburger = document.getElementById('hamburger');
let navbar = document.getElementsByClassName('navbar')[0];
let menu = document.getElementsByClassName('menu')[0];
let count = true;
let scroll = document.getElementById('scroll');
hamburger.addEventListener('click', () => {
    if(count){
        if(menu.style.display = "none"){
        menu.style.display = "block";
    }
    hamburger.style.transform = "rotate(-90deg)"
    hamburger.style.transition = "1s";
    navbar.style.borderRadius = "10px";
    navbar.style.padding = "10px";
    navbar.style.border = "2px solid #FA9F42"
   }else{
        menu.style.display = "none"
        navbar.style.backgroundColor = "transparent"
        hamburger.style.transform = 'rotate(0deg)'
        navbar.style.border = "0px"
    }
   count = !count;
});

scroll.addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth'
    });
});