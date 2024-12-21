document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.book-scroll');
    const bookCards = document.querySelectorAll('.book-card');
    
    // Clone books for infinite scroll
    bookCards.forEach(card => {
        const clone = card.cloneNode(true);
        scrollContainer.appendChild(clone);
    });

    // Add manual scroll with mouse drag
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.style.animationPlayState = 'paused';
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.style.animationPlayState = 'running';
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.style.animationPlayState = 'running';
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
    
});