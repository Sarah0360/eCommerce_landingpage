/*----------------------------------*\
 #STICKY HEADER
\*----------------------------------*/

const header = document.querySelector("header");
const navLinks = document.querySelectorAll(".navlist a");
const logoTitle = document.querySelector(".logo-title");
const logoSubtitle = document.querySelector(".logo-subtitle");

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        header.classList.add("sticky");

        navLinks.forEach(link => {
            link.style.color = '#fff'; 
        });

        logoTitle.style.color = 'var(--bg-color)'; 

        logoSubtitle.style.color = 'var(--main-color)'; 

    } else {
        header.classList.remove("sticky");

        navLinks.forEach(link => {
            link.style.color = 'var(--text-color)'; 
        });

        // Reset logo text color
        logoTitle.style.color = 'var(--text-color)';
        logoSubtitle.style.color = 'var(--accent-color)';
    }
});


/*----------------------------------*\
    #MENU TOGGLE
\*----------------------------------*/

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


/*----------------------------------*\
    #ABOUT MODAL OVERLAY
\*----------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('explore-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('close-btn');
    const body = document.body;

    // Show the modal when the button is clicked
    exploreBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior (if it's a link)
        modalOverlay.style.display = 'flex';
        body.classList.add('modal-open'); // Disable scrolling
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        body.classList.remove('modal-open'); // Enable scrolling
    });

    // Close the modal when clicking outside of the modal content (optional)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
            body.classList.remove('modal-open'); // Enable scrolling
        }
    });

    // Ensure the modal does not show on page reload
    modalOverlay.style.display = 'none';
});

/*----------------------------------*\
    #PRODUCT SWIPER CARD
\*----------------------------------*/
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 20,

    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
           slidesPreview:1 
        },
        768: {
            slidesPreview:2 
         },
         1024: {
            slidesPreview:3 
         },
    }
  });


/*----------------------------------*\
    #SCROLL REVEAL
\*----------------------------------*/
  
const scr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

scr.reveal('.home-text', {delay: 200});
scr.reveal('.home-img', {delay: 300});
scr.reveal('.container', {delay: 300});

scr.reveal('.abouts-img', {});
scr.reveal('.abouts-text', {delay: 200});

scr.reveal('.middle-text', {});
scr.reveal('.row-btn,.shop-content', {delay: 100});

scr.reveal('.middle-text', {});
scr.reveal('.review-content,.contact', {delay: 200});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



/*----------------------------------*\
    #SCROLL TO TOP
\*----------------------------------*/
const scrollBtn = document.querySelector('.scroll');

window.onscroll = () => {
    if (window.scrollY > 200) { 
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
};

scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};



let previousWidth = window.innerWidth;

window.addEventListener('resize', function () {
    if (previousWidth !== window.innerWidth) {
        // The screen size changed (e.g., from mobile to desktop view)
        if (window.innerWidth >= 1024) {
            // Apply desktop-specific changes
            document.body.classList.add('desktop-view');
        } else {
            // Apply mobile-specific changes
            document.body.classList.remove('desktop-view');
        }
        previousWidth = window.innerWidth;
    }
});
