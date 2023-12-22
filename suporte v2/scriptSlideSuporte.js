    let currentIndex = 0;
    const items = document.querySelectorAll('.box-option');
    const totalItems = items.length;

    function nextSlide() {
        if (currentIndex < totalItems - 3) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 3;
        }
        updateCarousel();
    }

    function updateCarousel() {
        const carousel = document.querySelector('.carousel');
        const itemWidth = items[0].offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }