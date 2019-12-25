$('.menu__hamburger').on('click', function () {
    $(this).toggleClass('active').
        next().
        toggleClass('active');
});

(function ($) {
    var slides = $('.slide');
    var prev = $('.prev');
    var next = $('.next');
    
    function nextSlide() {
        var slideActive = $('.slide.active');
        
        slideActive.toggleClass('active');

        if (slideActive.next().length > 0) {
            slideActive.next().toggleClass('active');
        } else {
            slides.first().toggleClass('active');
        }
    }

    function prevSlide() {
        var slideActive = $('.slide.active');

        slideActive.toggleClass('active');

        if (slideActive.prev().length > 0) {
            slideActive.prev().toggleClass('active');
        } else {
            slides.last().toggleClass('active');
        }
        
    }

    setInterval(() => {
        nextSlide();
    }, 1500);

    next.click(function() {
        nextSlide();
    });

    prev.click(function() {
        prevSlide();
    });

})(jQuery);

