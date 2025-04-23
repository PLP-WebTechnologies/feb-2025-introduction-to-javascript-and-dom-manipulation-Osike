// Function to change text content
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('dynamic-text').textContent = 'The text has been changed!';
});

// Function to add a new element
document.getElementById('add-element-btn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'A new paragraph has been added!';
    document.querySelector('main section').appendChild(newElement);
});
// Function to remove element
document.getElementById('remove-element-btn').addEventListener('click', function() {
    const elementToRemove = document.querySelector('main section p:last-child');
    if (elementToRemove) {
        elementToRemove.remove();
    } else {
        alert('No more elements to remove!');
    }
});
