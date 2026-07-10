// Step 1: Declare three variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button[type="submit"]');
const list = document.querySelector('#list');

// Step 2: Create a click event listener for the Add Chapter button
button.addEventListener('click', function() {
    // Step 3: Check to make sure the input is not blank
    const chapterText = input.value.trim();
    
    if (chapterText === '') {
        // If blank, provide a message and return focus to the input field
        alert('Please enter a chapter name.');
        input.focus();
        return; // Exit the function if input is blank
    }
    
    // Step 4: Move the code from the previous activity into this if block
    // Create a li element that will hold each entry's chapter title and delete button
    const li = document.createElement('li');
    
    // Populate the li element's textContent with the input value
    li.textContent = chapterText;
    
    // Create a delete button
    const deleteBtn = document.createElement('button');
    
    // Set the delete button's textContent to ❌
    deleteBtn.textContent = '❌';
    
    // Add the 'delete' class for styling (matches your CSS)
    deleteBtn.classList.add('delete');
    
    // Add aria-label for accessibility (screen readers)
    deleteBtn.setAttribute('aria-label', `Remove ${chapterText}`);
    
    // Append the delete button to the li element
    li.appendChild(deleteBtn);
    
    // Append the li element to the unordered list
    list.appendChild(li);
    
    // Step 5: Add an event listener to the delete button that removes the li element when clicked
    deleteBtn.addEventListener('click', function() {
        // Remove the parent li element when delete button is clicked
        list.removeChild(li);
    });
    
    // Step 6: Change the input value to an empty string to clean up the interface
    input.value = '';
    
    // Step 7: After processing, send focus to the input element
    input.focus();
});

// Optional: Allow pressing Enter key to add a chapter
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Trigger the button click event
        button.click();
    }
});