// Indicator
$(document).ready(function () {
    $(document).mousemove(function (event) {
        $('#indicator-arrow').css({
            left: event.clientX + 'px',
            top: event.clientY + 'px'
        });
    });
});

// Typing Effect
document.addEventListener("DOMContentLoaded", function () {

    let typed = new Typed('.auto-line', {
        strings: ["Hello", "I Am a Web Designer",],
        typeSpeed: 150,
        backspeed: 100,
        loop: false
    });

    let anim = $('.auto-line');
    anim.animate({
        opacity: "0",
        fontSize: "1vh",
        easing: "cubic-bezier(.17,.67,.81,1)",
    }, 500);
    anim.animate({
        opacity: "1",
        fontSize: '18vh',
        easing: "cubic-bezier(.17,.67,.81,1)",
    }, 1000);
});

$(document).ready(function () {

    let profile = $(".home-top-profile");
    let img = $("#profile");

    img.hover(function () {
        profile.show();
        console.log("hover");
        // profile.animate({
        //     opacity: "0",
        //     easing: "cubic-bezier(.17,.67,.81,1)",
        // }, 500);
        // profile.animate({
        //     opacity: "1",
        //     easing: "cubic-bezier(.17,.67,.81,1)",
        // }, 500);
    }, function () {
        console.log("hidden");
        profile.hide();
    });
});

// $(document).ready(function () {

//     let profile = $(".home-top-profile");

//     // Show the profile element with default opacity and font size
//     profile.show();

//     // Animate opacity and font size sequentially
//     profile.animate({
//         opacity: "0.5",
//         fontSize: "0.2vh",
//         easing: "cubic-bezier(.17,.67,.81,1)"
//     }, 500)
//         .delay(500) // Add a delay of 500 milliseconds before the next animation
//         .animate({
//             opacity: "1",
//             fontSize: "2vh",
//             easing: "cubic-bezier(.17,.67,.81,1)"
//         }, 1000);
// });




// $(".home-top-profile").animate({
//     opacity: "1",

//     easing: "cubic-bezier(.17,.67,.81,1)",
// }, 1000);

// $(window).load(function() {
// 	$(".loader").delay(3000).fadeOut("fast");
// });