$(document).ready(function() {
    $(".custom-navbar .link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 // Offset for fixed navbar
            }, 700, function() {
                // Optionally update URL hash without jumping
                history.pushState(null, null, hash);
            });
        }
    });

    // Hamburger toggle for mobile
    $("#nav-toggle").on('click', function() {
        $(".custom-navbar .nav").toggleClass("active");
        $(this).toggleClass("is-active");
    });
});
