document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu button
    const hamburger = document.querySelector(' .hamburger ');
    const navLinks = document.querySelector('.nav-links');

    // Check if the hamburger element is available
    if (!hamburger || !navLinks) {
        console.error('Hamburger button or nav-links element not found!');
        return;
    }

    // Add event listener to the hamburger button
    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the navLinks
        navLinks.classList.toggle('active');
    });
});
