const products = [
    { id: 'fc-1888', name: 'flux capacitor' },
    { id: 'fc-2050', name: 'power laces' },
    { id: 'fs-1987', name: 'time circuits' },
    { id: 'ac-2000', name: 'low voltage reactor' },
    { id: 'jj-1969', name: 'warp equalizer' }
];

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('productName');
    
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', () => {
        const formData = new FormData(reviewForm);
        const formObject = Object.fromEntries(formData.entries());
        sessionStorage.setItem('reviewData', JSON.stringify(formObject));
    });
});