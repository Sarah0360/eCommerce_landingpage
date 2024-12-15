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




// let previousWidth = window.innerWidth;

// window.addEventListener('resize', function () {
//     if (previousWidth !== window.innerWidth) {
//         // The screen size changed (e.g., from mobile to desktop view)
//         if (window.innerWidth >= 1024) {
//             // Apply desktop-specific changes
//             document.body.classList.add('desktop-view');
//         } else {
//             // Apply mobile-specific changes
//             document.body.classList.remove('desktop-view');
//         }
//         previousWidth = window.innerWidth;
//     }
// });

/*----------------------------------*\
    # DESKTOP RESPONSIVENESS
\*----------------------------------*/

// Ensure the site maintains a specific viewport width
function enforceDesktopView() {
    const viewportMeta = document.querySelector("meta[name=viewport]");
    
    // Check if the user is on a mobile device
    const isMobile = window.innerWidth <= 768;
  
    if (isMobile) {
      // Force the viewport width to simulate a laptop view
      viewportMeta.setAttribute("content", "width=1200");
    } else {
      // Default behavior for larger screens
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
    }
  }
  
  // Run on load
  enforceDesktopView();
  
  // Reapply the behavior when the window is resized
  window.addEventListener("resize", enforceDesktopView);
  


// const API_KEY = 'AIzaSyCClGTxXcef9sSbCoVy0E6oBDIjVmR_OEw'; // Your API Key
//   const SPREADSHEET_ID = '1beF-3HdEwdEFxtoW6G5VXyxZfSy1LpDAiD_29hCeFLA'; // Your Google Sheets ID
//   const RANGE = 'Sheet1!A1:E19'; // Range you want to pull data from (e.g., A1 to B10)

// // const FULL_URL = 'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID +

//   function initApiClient() {
//     gapi.client.init({
//       'apiKey': API_KEY,
//     }).then(() => {
//       fetchSheetData();
//     });
//   }

//   function fetchSheetData() {
//     gapi.client.sheets.spreadsheets.values.get({
//       spreadsheetId: SPREADSHEET_ID,
//       range: RANGE,
//     }).then(response => {
//       const data = response.result.values;
//       if (data.length > 0) {
//         displayData(data);
//       } else {
//         console.log('No data found.');
//       }
//     });
//   }

//   function displayData(data) {
//     let table = document.createElement('table');
//     data.forEach(row => {
//       let tr = document.createElement('tr');
//       row.forEach(cell => {
//         let td = document.createElement('td');
//         td.textContent = cell;
//         tr.appendChild(td);
//       });
//       table.appendChild(tr);
//     });
//     document.body.appendChild(table); // Append the table to the body or any other container
//   }

//   function loadClient() {
//     gapi.load('client', initApiClient);
//   }


// function loadClient() {
//     const deploymentUrl = "https://sheets.googleapis.com/v4/spreadsheets/1beF-3HdEwdEFxtoW6G5VXyxZfSy1LpDAiD_29hCeFLA/values/sheet1!A1:D100?key=AIzaSyCClGTxXcef9sSbCoVy0E6oBDIjVmR_OEw";
//     fetch(deploymentUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (data.values) {
//                 data.values.forEach(row => {
//                     const placeholder = row[2]; // Column C
//                     const content = row[3]; // Column D
//                     document.body.innerHTML = document.body.innerHTML.replace(placeholder, content);
//                 });
//             } else {
//                 console.error('No values found in the data:', data);
//             }
//         })
//         .catch(error => console.error('Error fetching or processing data:', error));
// }

// loadClient();
