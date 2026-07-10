// Get references to DOM elements
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

// Declare variables
let area = 0;
const PI = 3.14159;

// Calculate for radius = 10
let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Calculate for radius = 20
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

console.log('Debugging complete! ✅');