// Load the header into the placeholder
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the header.html file
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Insert the header content into the placeholder
            document.getElementById('header').innerHTML = data;

            // Highlight the active page link
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const links = document.querySelectorAll('nav ul li a');

            links.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading the header:', error);
        });
});