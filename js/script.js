const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        header.classList.add("sticky");
        navLinks.forEach(link => {
            link.style.color = '#fff'; // Change nav link text color to white
        });
    } else {
        header.classList.remove("sticky");
        navLinks.forEach(link => {
            link.style.color = 'var(--text-color)'; // Reset nav link text color to default
        });
    }
});



let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
}


const scr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

scr.reveal('.home-text', {delay: 200});
scr.reveal('.home-img', {delay: 300});
scr.reveal('.container', {delay: 300});

scr.reveal('.about-img', {});
scr.reveal('.about-text', {delay: 200});

scr.reveal('.middle-text', {});
scr.reveal('.row-btn,.shop-content', {delay: 100});

scr.reveal('.middle-text', {});
scr.reveal('.review-content,.contact', {delay: 200});