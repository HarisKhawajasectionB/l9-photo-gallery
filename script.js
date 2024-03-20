// script.js

$(document).ready(function() {
    // Filter button click event
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        var category = $(this).data('category');
        if (category === 'all') {
            $('.image').show();
        } else {
            $('.image').hide();
            $('.image[data-category="' + category + '"]').show();
        }
    });

    // Image click event to open lightbox
    $('.image').click(function() {
        var imgSrc = $(this).find('img').attr('src');
        $('.lightbox-img').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    // Close lightbox
    $('.close').click(function() {
        $('#lightbox').fadeOut();
    });
});
