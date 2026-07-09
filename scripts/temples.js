// Temple Album JavaScript

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
    
});