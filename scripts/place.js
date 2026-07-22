/* ============================================ */
/* WDD131 - place.js - Tokyo, Japan
/* ============================================ */

'use strict';

// ============================================
// 1. FOOTER DYNAMIC CONTENT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Set last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        lastModifiedElement.textContent = formattedDate;
    }
});

// ============================================
// 2. STATIC WEATHER DATA
// ============================================
const weatherData = {
    temperature: 22,  // in Celsius
    condition: 'Partly Cloudy',
    windSpeed: 15,    // in km/h
    humidity: 65
};

// Update weather display with static values
function updateWeather() {
    const tempElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('weather-condition');
    const windElement = document.getElementById('wind-speed');
    const humidityElement = document.getElementById('humidity');
    
    if (tempElement) {
        tempElement.textContent = `${weatherData.temperature}°C`;
    }
    
    if (conditionElement) {
        conditionElement.textContent = weatherData.condition;
    }
    
    if (windElement) {
        windElement.textContent = weatherData.windSpeed;
    }
    
    if (humidityElement) {
        humidityElement.textContent = weatherData.humidity;
    }
}

// ============================================
// 3. WIND CHILL CALCULATION (METRIC)
// ============================================
/**
 * Calculate wind chill factor using metric units (°C, km/h)
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 * Where T = temperature in Celsius, V = wind speed in km/h
 * 
 * Valid when T <= 10°C and V > 4.8 km/h
 * 
 * @param {number} temperature - Temperature in Celsius
 * @param {number} windSpeed - Wind speed in km/h
 * @returns {number|null} Wind chill value or null if conditions not met
 */
function calculateWindChill(temperature, windSpeed) {
    // Check if wind chill calculation is valid (metric conditions)
    if (temperature <= 10 && windSpeed > 4.8) {
        // Calculate wind chill using metric formula (one line return)
        return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }
    return null; // Conditions not met
}

// ============================================
// 4. DISPLAY WIND CHILL
// ============================================
function displayWindChill() {
    const temp = weatherData.temperature;
    const wind = weatherData.windSpeed;
    
    // Calculate wind chill
    const windChill = calculateWindChill(temp, wind);
    
    // Get the display element
    const windChillElement = document.getElementById('wind-chill');
    
    if (windChillElement) {
        if (windChill !== null) {
            // Round to 1 decimal place
            const rounded = Math.round(windChill * 10) / 10;
            windChillElement.textContent = `${rounded}°C`;
            windChillElement.style.color = '#e74c3c';
        } else {
            // Conditions not met - display N/A
            windChillElement.textContent = 'N/A';
            windChillElement.style.color = '#7f8c8d';
        }
    }
}

// ============================================
// 5. NAVIGATION SMOOTH SCROLLING
// ============================================
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, href);
            }
        }
    });
});

// ============================================
// 6. INITIALIZE ALL FEATURES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Update weather display with static data
    updateWeather();
    
    // Calculate and display wind chill
    displayWindChill();
    
    // Console greeting
    console.log('%c🏯 Tokyo, Japan - WDD131', 'font-size: 20px; font-weight: bold; color: #1a1a2e;');
    console.log('%cWind Chill Calculator: Static data loaded.', 'font-size: 14px; color: #f39c12;');
    console.log(`%cTemperature: ${weatherData.temperature}°C | Wind Speed: ${weatherData.windSpeed} km/h`, 'font-size: 12px; color: #5d6d7e;');
});