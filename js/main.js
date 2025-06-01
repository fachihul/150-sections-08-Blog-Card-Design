$(document).ready(function () {
    $(".staff-list").owlCarousel({
        items: 4,
        autoplay: false,
        margin: 30,
        nav: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>",
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false,
            },
            1200: {
                items: 4,
                nav: true,
                loop: false,
            },
        },
    });
});
