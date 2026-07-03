// ===============================
// WDD 131 - getdates.js
// Adriko Cyrus
// ===============================

// Display the current year
const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();

// Display the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Highlight the current navigation link
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (
        href === currentPage ||
        (currentPage === "" && href === "index.html")
    ) {
        link.style.backgroundColor = "#f39c12";
        link.style.color = "#000";
        link.style.fontWeight = "600";
        link.style.borderRadius = "5px";
    }
});

// Fade-in animation for cards
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease";

    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 250);

});

// Console messages
console.log("Current Year:", new Date().getFullYear());
console.log("Last Modified:", document.lastModified);
console.log("WDD 131 page loaded successfully.");