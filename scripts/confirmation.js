// Product array needed for displaying product names
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

// Initialize and increment review counter
document.addEventListener('DOMContentLoaded', function() {
    // Get or initialize review counter from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    // Increment counter for this new review
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount.toString());
    
    // Display the counter
    document.getElementById('reviewCounter').textContent = reviewCount;
    
    // Display review summary from form data
    displayReviewSummary();
});

function displayReviewSummary() {
    const summaryContent = document.getElementById('summaryContent');
    const reviewData = JSON.parse(sessionStorage.getItem('reviewData'));
    
    if (reviewData) {
        // Find product name from product ID
        let productName = 'Not specified';
        if (reviewData.productName) {
            const product = products.find(p => p.id === reviewData.productName);
            productName = product ? product.name : reviewData.productName;
        }
        
        const rating = reviewData.rating || 'Not rated';
        const installDate = reviewData.installDate || 'Not specified';
        const features = reviewData.features ? reviewData.features.join(', ') : 'None selected';
        const writtenReview = reviewData.writtenReview || 'No review provided';
        const userName = reviewData.userName || 'Anonymous';
        
        // Create star rating display
        const starRating = '★'.repeat(parseInt(rating) || 0) + '☆'.repeat(5 - (parseInt(rating) || 0));
        
        summaryContent.innerHTML = `
            <p><strong>Product:</strong> ${productName}</p>
            <p><strong>Rating:</strong> ${starRating} (${rating}/5)</p>
            <p><strong>Installation Date:</strong> ${installDate}</p>
            <p><strong>Useful Features:</strong> ${features}</p>
            <p><strong>Review:</strong> ${writtenReview}</p>
            <p><strong>Reviewer:</strong> ${userName}</p>
        `;
    } else {
        summaryContent.innerHTML = '<p>No review data available. Please submit a review first.</p>';
    }
}