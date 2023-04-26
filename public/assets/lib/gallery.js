var width = window.screen.width;
var theme = 'azur';
if( width < 768){
    var gHeight = 320;
} else {
    var gHeight = 480;
}

$( function() {
    var galleria = document.getElementsByClassName("galleria");
    if( galleria ) {
        Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.6.1/themes/azur/galleria.azur.min.js');
        Galleria.run('.galleria', {
            theme: theme,
            height: gHeight,
            width: '100%',
            autoplay: 7000
        });
        $(window).resize(function() {
            Galleria.run('.galleria', {
                theme: theme,
                height: gHeight,
                width: '100%',
                autoplay: 7000
            });
        })
    }
});