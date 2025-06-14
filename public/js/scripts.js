// Custom JavaScript for the Bootstrap website
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Toggle mobile navigation
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
});