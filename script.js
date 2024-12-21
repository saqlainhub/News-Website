//NAVBAR STYLEING
// BY pressing enter toogle search option
document.getElementById('search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});
document.getElementById('search-icon').addEventListener('click', search);

function search() {
    const query = document.getElementById('search-input').value;
    // Add your search logic here
    alert('Searching for: ' + query);
}



// Toggle filter options on click
const filterBtn = document.getElementById('filter-icon');
const filterOptions = document.getElementById('filter-options');

filterBtn.addEventListener('click', () => {
    filterOptions.classList.toggle('show');
});
document.addEventListener('click', (e) => {
    if (!filterBtn.contains(e.target) && !filterOptions.contains(e.target)) {
        filterOptions.classList.remove('show');
    }
});



//Dark and light mode toogle theme
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const themeIcon = themeBtn.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});



// overlay enter press serch
document.getElementById('overlay-search').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search2();
    }
});
document.getElementById('overlay-searchIcon').addEventListener('click', search2);
function search2() {
    const query = document.getElementById('overlay-searchIcon').value;
    // Add your search logic here
    alert('Searching for: ' + query);
}



//overlay filter working
const filterBt = document.getElementById('overlay-filterIcon');
const filterOpt = document.getElementById('overlay-filterOptions');
filterBt.addEventListener('click', () => {
    filterOpt.classList.toggle('show');
});
document.addEventListener('click', (e) => {
    if (!filterBt.contains(e.target) && !filterOpt.contains(e.target)) {
        filterOpt.classList.remove('show');
    }
});



//responsive navbar overlay and search button handling

const searchButton = document.querySelector('.search-button');
const overlay = document.getElementById('overlay');
const backButton = document.getElementById('back-icon');

// Show overlay when search button is clicked
searchButton.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Hide overlay when back button is clicked
backButton.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Function to handle screen resize
function handleResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) { // Small screen logic
        document.querySelector('.search-input').style.display = 'none';
        document.querySelector('.filter-icon').style.display = 'none';
        document.querySelector('.search-icon').style.display = 'none';
        searchButton.style.display = 'block';
    } else { // Large screen logic
        document.querySelector('.search-input').style.display = 'block';
        document.querySelector('.filter-icon').style.display = 'block';
        document.querySelector('.search-icon').style.display = 'block';
        searchButton.style.display = 'none';
        overlay.classList.remove('active'); // Hide overlay when switching to large screen
    }
}

// Run on initial load
handleResize();

// Run on window resize
window.addEventListener('resize', handleResize);



// overlay back and open
document.querySelector('.search-button').addEventListener('click', function () {
    this.style.display = 'none';
    document.querySelector('.back-icon').style.display = 'flex';
});
document.querySelector('.back-icon').addEventListener('click', function () {
    this.style.display = 'none';
    document.querySelector('.search-button').style.display = 'flex';
    applyMediaQueryStyles();
});

//overlay and search button show and hide
document.getElementById('search-button').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('search-button').style.display = 'none';
});
document.getElementById('back-icon').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('search-button');
});






//SIDEBAR JAVASCRIPT CODE

const sidebar = document.getElementById('sidebar');
const logo = sidebar.querySelector('.logo');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
const mainContent = document.getElementById('main-content');


// Toggle sidebar collapse/expand
logo.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        // Close all open dropdown menus when sidebar is collapsed
        dropdownBtns.forEach((btn) => {
            const dropdownContainer = btn.nextElementSibling;
            dropdownContainer.style.display = 'none';
            btn.classList.remove('active');
            
        });
        mainContent.style.marginLeft = '70px';
    }else {
        mainContent.style.marginLeft = '250px';
    }
});





// Handle click on dropdown buttons
dropdownBtns.forEach((btn) => {
    const dropdownContainer = btn.nextElementSibling;
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior

        if (sidebar.classList.contains('collapsed')) {
            // Expand sidebar if collapsed
            sidebar.classList.remove('collapsed');
            mainContent.style.marginLeft = '250px';
            
        }

        // Toggle dropdown menu
        dropdownContainer.classList.toggle('active');
        btn.classList.toggle('active');
        dropdownContainer.style.display = dropdownContainer.style.display === 'block' ? 'none' : 'block';
    });
    
});







//BOTTOM MENUE
// Optional: Add active class based on click
const menuLinks = document.querySelectorAll('.bottom-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menuLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});



function handleBarResize() {
    const sidebar = document.querySelector('.container');
    const bottomMenu = document.querySelector('.bottom-bar');

    if (window.innerWidth <= 480) {
        sidebar.style.display = 'none';
        bottomMenu.style.display = 'flex';
    } else {
        sidebar.style.display = 'block';
        bottomMenu.style.display = 'none';
    }
}

// Run on initial load
handleBarResize();

// Run on window resize
window.addEventListener('resize', handleBarResize);








// Script to handle scrolling with the "Next" arrow
const scrollArrow = document.querySelector('.scroll-arrow');
const trendingKeywords = document.querySelector('.trending-keywords');

scrollArrow.addEventListener('click', () => {
    trendingKeywords.scrollBy({ 
        left: 200, 
        behavior: 'smooth' 
    });
});






// JavaScript to toggle more text
document.querySelectorAll('.more-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const moreText = btn.previousElementSibling;
        moreText.style.display = (moreText.style.display === 'none' || moreText.style.display === '') ? 'inline' : 'none';
        btn.textContent = (btn.textContent === 'More...') ? 'Less...' : 'More...';
    });
});

// JavaScript to handle like/dislike functionality
document.querySelectorAll('.like-icon').forEach(function(likeBtn) {
    likeBtn.addEventListener('click', function() {
        const likeCount = likeBtn.querySelector('.like-count');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});

document.querySelectorAll('.dislike-icon').forEach(function(dislikeBtn) {
    dislikeBtn.addEventListener('click', function() {
        const dislikeCount = dislikeBtn.querySelector('.dislike-count');
        dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
    });
});








// Script to handle settings menu
document.querySelectorAll('.settings-menu').forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        const options = menu.querySelector('.settings-options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
});

// Close the settings menu when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.settings-options').forEach(options => {
        options.style.display = 'none';
    });
});









 // Script to handle settings menu
 document.querySelectorAll('.settings-menu').forEach(menu => {
     menu.addEventListener('click', (e) => {
         e.stopPropagation(); // Prevent event from bubbling up
         const options = menu.querySelector('.settings-options');
         options.style.display = options.style.display === 'block' ? 'none' : 'block';
     });
 });

 // Close the settings menu when clicking outside
 document.addEventListener('click', () => {
     document.querySelectorAll('.settings-options').forEach(options => {
         options.style.display = 'none';
     });
 });







 