// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate Product Name Select Options
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    
    // Create and append option elements from products array
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;  // Use product id as value
        option.textContent = product.name;  // Display product name
        productSelect.appendChild(option);
    });

    // Star rating interaction
    const ratingOptions = document.querySelectorAll('.rating-option');
    
    ratingOptions.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        const star = option.querySelector('.star');
        
        // Hover effect
        option.addEventListener('mouseenter', function() {
            const currentRating = parseInt(radio.value);
            highlightStars(currentRating);
        });
        
        option.addEventListener('mouseleave', function() {
            const checkedRadio = document.querySelector('input[name="rating"]:checked');
            if (checkedRadio) {
                highlightStars(parseInt(checkedRadio.value));
            } else {
                resetStars();
            }
        });
        
        // Click effect
        radio.addEventListener('change', function() {
            highlightStars(parseInt(this.value));
        });
    });
    
    function highlightStars(rating) {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.style.color = '#f1c40f';
                star.style.transform = 'scale(1.2)';
            } else {
                star.style.color = '#ddd';
                star.style.transform = 'scale(1)';
            }
        });
    }
    
    function resetStars() {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.style.color = '#ddd';
            star.style.transform = 'scale(1)';
        });
    }

    // Form submission - store data in sessionStorage
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', function(e) {
        // Get form data
        const formData = new FormData(form);
        const reviewData = {};
        
        // Collect all form data
        for (let [key, value] of formData.entries()) {
            if (key === 'features') {
                if (!reviewData[key]) {
                    reviewData[key] = [];
                }
                reviewData[key].push(value);
            } else {
                reviewData[key] = value;
            }
        }
        
        // Store review data in sessionStorage to display on confirmation page
        sessionStorage.setItem('reviewData', JSON.stringify(reviewData));
        
        // The form will submit normally with GET method
        // The confirmation page will handle the counter increment
    });
});
