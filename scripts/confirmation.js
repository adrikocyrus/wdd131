const products = [
    { id: 'fc-1888', name: 'flux capacitor' },
    { id: 'fc-2050', name: 'power laces' },
    { id: 'fs-1987', name: 'time circuits' },
    { id: 'ac-2000', name: 'low voltage reactor' },
    { id: 'jj-1969', name: 'warp equalizer' }
];

document.addEventListener('DOMContentLoaded', () => {
    // Increment review count
    let count = parseInt(localStorage.getItem('reviewCount') || '0') + 1;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCounter').textContent = count;

    // Display review data
    const reviewData = JSON.parse(sessionStorage.getItem('reviewData') || '{}');
    const summaryContent = document.getElementById('summaryContent');
    
    if (Object.keys(reviewData).length > 0) {
        let summaryHTML = '<h3>Review Summary:</h3><ul>';
        for (const [key, value] of Object.entries(reviewData)) {
            if (value) {
                const label = key.replace(/([A-Z])/g, ' $1').toLowerCase();
                summaryHTML += `<li><strong>${label}:</strong> ${value}</li>`;
            }
        }
        summaryHTML += '</ul>';
        summaryContent.innerHTML = summaryHTML;
    }
});