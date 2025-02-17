// script.js
document.addEventListener('scroll', function () {
    const footer = document.querySelector('footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 50) { // Adjust the offset as needed
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    } else {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(20px)';
    }
});