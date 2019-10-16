$(window).load(function(){
    $(".before-after").twentytwenty({
        before_label: 'С Автокомпасом',
        after_label: 'Без Автокомпаса'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
    });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
        $('.menu-button__lines').toggleClass('menu-button__lines_active');
    });
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){  
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -150 + "px"});
        return false;
    });
    $('input[type["tel"]').mask("+7 (999) 999-99-99");
});
for (let i = 0; i < 6; i++) {
    let imageBlock = document.getElementsByClassName('price-card__image')[i];
    let curImage = imageBlock.getElementsByTagName('img')[0];
    imageBlock.onmouseover = imageBlock.onmouseout = handler;

    function handler(event) {
        if (event.type == 'mouseover') {
            curImage.src = 'img/price/'+ (i+1) + '.1.jpg';
        }
        if (event.type == 'mouseout') {
            curImage.src = 'img/price/'+ (i+1) + '.jpg';
        }
    }
}