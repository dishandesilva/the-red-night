var bmSound = new Audio("bgmusic1.mp3");
bmSound.play();
bmSound.loop = true

document.addEventListener('DOMContentLoaded', function() {
    // Wait for DOM content to load
    const content = document.querySelector('.content');

    // Simulate page loading
    setTimeout(function() {
        // Hide loading circles
        document.querySelector('.loader-wrapper').style.display = 'none';

        // Fade in content
        content.classList.remove('hidden');
        content.style.opacity = '1';
    }, 2000); // Adjust the delay in milliseconds (e.g., 2000 for 2 seconds)
});
