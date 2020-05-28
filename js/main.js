$(document).ready(function(){
    // $('.js-example-templating').select2();
    $(".owl-carousel").owlCarousel();
})

$(".first-carousel").owlCarousel({
    loop: true,
    center: true,
    dots: true,
    autoplay: true,
    margin: 0,
    items: 1,
    dots: true,
})

// function formatState(state) {
//     if(!state.id) {
//         return state.text;
//     }
//     var baseUrl = "../img";
//     var $state = $(
//         '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
//         );
//     return $state;
// };

// $(".js-example-templating").select2({
//     templateResult: formatState
// });