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

scr.reveal('.home-text', {delay: 150});
scr.reveal('.home-img', {delay: 100});
scr.reveal('.container', {delay: 100});

scr.reveal('.abouts-img', {});
scr.reveal('.abouts-text', {delay: 200});

scr.reveal('.middle-text', {});
scr.reveal('.swper-container', {delay: 100});

// scr.reveal('.middle-text', {});
scr.reveal('.blog-section,.contact, .services', {delay: 100});


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


  
// Ensure the site maintains proper responsiveness
function adjustViewport() {
    const viewportMeta = document.querySelector("meta[name=viewport]");

    // Check if the viewport meta tag exists
    if (!viewportMeta) {
        console.error("No viewport meta tag found. Add <meta name='viewport' content='width=device-width, initial-scale=1.0'> to your HTML.");
        return;
    }

    // Dynamically set the viewport width based on device width
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Keep the mobile view
        viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
    } else {
        // For larger screens, use desktop behavior
        viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
    }
}

// Run on load
adjustViewport();

// Reapply the behavior when the window is resized
window.addEventListener("resize", adjustViewport);





/*----------------------------------*\
    # DESKTOP RESPONSIVENESS
\*----------------------------------*/


