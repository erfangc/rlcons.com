jQuery(document).ready(function ($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({target: '#top', offset: 400});

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        const target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, {offset: -80, 'axis': 'y', easing: 'easeOutQuad'});
        //Collapse mobile menu after clicking
        const $navbar = $('.navbar-collapse');
        if ($navbar.hasClass('in')) {
            $navbar.removeClass('in').addClass('collapse');
        }

    });

    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    });

    /* ======= jQuery Placeholder ======= */
    $('input, textarea').placeholder();

    /* ======= jQuery FitVids - Responsive Video ======= */
    $("#video-container").fitVids();

    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */

    $('#testimonials').find('.quote-box').matchHeight();

    /* ======= Style Switcher (Remove on production site) ======= */
    $('#config-trigger').on('click', function (e) {
        const $config = $('#config-panel');
        const $panel = $config;
        const panelVisible = $config.is(':visible');
        if (panelVisible)
            $panel.hide();
        else
            $panel.show();
        e.preventDefault();
    });

    $('#config-close').on('click', function (e) {
        e.preventDefault();
        $('#config-panel').hide();
    });


    $('#color-options').find('a').on('click', function (e) {
        const $styleSheet = $(this).attr('data-style');
        const $logoImage = $(this).attr('data-logo');
        $('#theme-style').attr('href', $styleSheet);
        $('#logo-image').attr('src', $logoImage);

        var $listItem = $(this).closest('li');
        $listItem.addClass('active');
        $listItem.siblings().removeClass('active');

        e.preventDefault();

    });


});