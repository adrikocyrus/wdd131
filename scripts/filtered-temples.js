// Temple Album JavaScript with Filtering

// ===== TEMPLE DATA ARRAY =====
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Additional temples (at least 3 more)
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-temple-3.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-temple-exterior-4.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, August, 27",
    area: 54545,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple-4.jpeg"
  }
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== DYNAMIC FOOTER YEAR =====
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector("#currentyear");
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // ===== DYNAMIC LAST MODIFIED DATE =====
    const modifiedElement = document.querySelector("#lastModified");
    if (modifiedElement) {
        modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
    
    // ===== HAMBURGER MENU =====
    const menuButton = document.querySelector("#menuButton");
    const navigation = document.querySelector("nav");
    
    if (menuButton && navigation) {
        // Toggle menu on button click
        menuButton.addEventListener("click", function() {
            navigation.classList.toggle("open");
            
            // Change button icon
            if (navigation.classList.contains("open")) {
                menuButton.textContent = "✖";
                menuButton.setAttribute("aria-label", "Close Menu");
            } else {
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-label", "Open Menu");
            }
        });
        
        // Close menu when a link is clicked (mobile only)
        const navLinks = navigation.querySelectorAll("a");
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                if (window.innerWidth < 700) {
                    navigation.classList.remove("open");
                    menuButton.textContent = "☰";
                    menuButton.setAttribute("aria-label", "Open Menu");
                }
            });
        });
        
        // Close menu when window resizes to desktop
        window.addEventListener("resize", function() {
            if (window.innerWidth >= 700) {
                navigation.classList.remove("open");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-label", "Open Menu");
            }
        });
    }
    
    // ===== DISPLAY TEMPLES FUNCTION =====
    function displayTemples(filteredTemples) {
        const grid = document.getElementById('templeGrid');
        grid.innerHTML = ''; // Clear existing content
        
        if (filteredTemples.length === 0) {
            grid.innerHTML = '<p style="text-align:center;padding:2rem;font-size:1.2rem;color:#666;">No temples match this filter.</p>';
            return;
        }
        
        filteredTemples.forEach(temple => {
            // Create figure element
            const figure = document.createElement('figure');
            
            // Create image element with lazy loading
            const img = document.createElement('img');
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = 'lazy';
            img.width = 400;
            img.height = 250;
            
            // Create figcaption with temple details
            const figcaption = document.createElement('figcaption');
            
            // Create name element
            const name = document.createElement('h3');
            name.textContent = temple.templeName;
            
            // Create details paragraph
            const details = document.createElement('p');
            details.innerHTML = `
                <strong>Location:</strong> ${temple.location}<br>
                <strong>Dedicated:</strong> ${temple.dedicated}<br>
                <strong>Area:</strong> ${temple.area.toLocaleString()} sq ft
            `;
            
            // Assemble the figure
            figcaption.appendChild(name);
            figcaption.appendChild(details);
            figure.appendChild(img);
            figure.appendChild(figcaption);
            
            // Add to grid
            grid.appendChild(figure);
        });
    }
    
    // ===== FILTER FUNCTIONS =====
    function filterTemples(filterType) {
        let filtered = [];
        const currentYear = new Date().getFullYear();
        
        switch(filterType) {
            case 'home':
                filtered = temples;
                break;
                
            case 'old':
                // Temples built before 1900
                filtered = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
                
            case 'new':
                // Temples built after 2000
                filtered = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
                
            case 'large':
                // Temples larger than 90,000 square feet
                filtered = temples.filter(temple => temple.area > 90000);
                break;
                
            case 'small':
                // Temples smaller than 10,000 square feet
                filtered = temples.filter(temple => temple.area < 10000);
                break;
                
            default:
                filtered = temples;
        }
        
        return filtered;
    }
    
    // ===== NAVIGATION FILTER EVENT LISTENERS =====
    const navLinks = document.querySelectorAll('nav a');
    const pageTitle = document.querySelector('main h1');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the filter type from data attribute
            const filterType = this.getAttribute('data-filter');
            
            // Update page title based on filter
            let titleText = 'Temples';
            switch(filterType) {
                case 'home': titleText = 'All Temples'; break;
                case 'old': titleText = 'Old Temples (Before 1900)'; break;
                case 'new': titleText = 'New Temples (After 2000)'; break;
                case 'large': titleText = 'Large Temples (>90,000 sq ft)'; break;
                case 'small': titleText = 'Small Temples (<10,000 sq ft)'; break;
            }
            pageTitle.textContent = titleText;
            
            // Filter and display temples
            const filteredTemples = filterTemples(filterType);
            displayTemples(filteredTemples);
            
            // Update active link styling
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // ===== INITIAL DISPLAY - Show all temples =====
    displayTemples(temples);
    
    // Set Home as active by default
    const homeLink = document.querySelector('nav a[data-filter="home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});