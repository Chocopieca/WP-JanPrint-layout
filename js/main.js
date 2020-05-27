$(document).ready(function(){
    $('.js-example-templating').select2();
})

function formatState(state) {
    if(!state.id) {
        return state.text;
    }
    var baseUrl = "../img";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
    return $state;
};

$(".js-example-templating").select2({
    templateResult: formatState
});