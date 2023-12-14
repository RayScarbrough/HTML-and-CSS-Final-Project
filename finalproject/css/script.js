document.addEventListener("DOMContentLoaded", function() {
    const iconBar = document.querySelector('.icon-bar');

    // Show icon bar on hover
    iconBar.addEventListener('mouseenter', function() {
        iconBar.style.left = '0';
    });

    // Hide icon bar when mouse leaves
    iconBar.addEventListener('mouseleave', function() {
        iconBar.style.left = '-230px';
    });
});
