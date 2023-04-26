$(document).ready(function(e) {
    if($('a[data-fslightbox]')){
        $('a[data-fslightbox]').magnificPopup({
            type: 'image',
            titleSrc: function(item) {
                return item.el.attr('title');
            },
            gallery:{
                enabled:true
            }
        });
    }

});