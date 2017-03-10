/*
Smooth page scrolling
*/

// Smooth-scrolling "back to top" links
$(document).on('click', '[href="#top"]', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 500);
});
$(document).on('click', '[href="#"]', function(event) {
  event.preventDefault();
});

// Smooth-scrolling jump links
$(document).on('click', 'a', function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});
