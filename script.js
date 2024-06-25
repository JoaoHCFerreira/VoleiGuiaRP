$(document).ready(function(){
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;
    const intervalTime = 3000; // Tempo entre slides (3 segundos)
    let carouselInterval;

    function showSlide(index) {
        if(index >= itemCount) {
            index = 0;
        } else if(index < 0) {
            index = itemCount - 1;
        }
        const newTransform = -index * 100 + '%';
        $('.carousel-inner').css('transform', 'translateX(' + newTransform + ')');
        $('.indicator').removeClass('active').eq(index).addClass('active');
        currentIndex = index;
    }

    function startCarousel() {
        carouselInterval = setInterval(function() {
            showSlide(currentIndex + 1);
        }, intervalTime);
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    $('.next').click(function(e){
        e.preventDefault();
        stopCarousel();
        showSlide(currentIndex + 1);
        startCarousel();
    });

    $('.prev').click(function(e){
        e.preventDefault();
        stopCarousel();
        showSlide(currentIndex - 1);
        startCarousel();
    });

    $('.indicator').click(function() {
        stopCarousel();
        const index = $(this).data('slide-to');
        showSlide(index);
        startCarousel();
    });

    // Inicia o carrossel automaticamente
    startCarousel();
});