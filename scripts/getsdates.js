// getdates.js - Dynamic date functionality for WDD 131

// 1. Dynamically output the copyright year (current year)
// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Find the span element with id "currentyear" and set its text content
document.getElementById("currentyear").textContent = currentYear;

// 2. Dynamically output the document last modified date
// Use the lastModified property of the document object
// This returns a string with the date and time the document was last modified
document.getElementById("lastModified").innerHTML = document.lastModified;

// Optional: Log to console for debugging
console.log("Current Year:", currentYear);
console.log("Last Modified:", document.lastModified);
