// Get the visitor count element
const visitorCountElement = document.getElementById('visitorCount');

// Check if there's a stored visitor count
let visitorCount = localStorage.getItem('visitorCount');

// If no stored count, initialize it to 1
if (!visitorCount) {
    visitorCount = 1;
    localStorage.setItem('visitorCount', visitorCount);
}

// Update the visitor count element
visitorCountElement.textContent = visitorCount;

// Increment the visitor count for the next visit
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);