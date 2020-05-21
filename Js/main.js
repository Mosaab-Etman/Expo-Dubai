$(document).ready(function() {

// Showing & Hiding user Submenues

    // (1) By clicking on the button
    $('.mainNavBar .userNavBar li').on('click', function() {

        let customData = $(this).data('menu');

        $(this).toggleClass('active').siblings().removeClass('active');
        $(`.mainNavBar .userMenues div[data-menu= ${customData}]`).fadeToggle().toggleClass('active').siblings().fadeOut().removeClass('active');
    })

    // (2) By clicking on window
    $(window).on('click', function(e) {

        if (!$('.user .active').is(e.target) && $('.user .active').has(e.target).length == 0) {

            $('.userNavBar .active').removeClass('active');
            $('.userMenues .active').fadeOut().removeClass('active');
            
        }
    })

// Closing the search Section

    $('.user .search i').on('click', function() {

        $('.userNavBar .active').removeClass('active');
        $('.userMenues .active').fadeOut().removeClass('active');
    })


// Showing & Hiding map Submenues

    // (1) By clicking on the button
    $('.mainNavBar .mapNavBar li').on('click', function() {

        let customData = $(this).data('menu');

        $(this).toggleClass('active').siblings().removeClass('active');
        $('.mainNavBar').toggleClass('bgActive');
        $(`.mainNavBar .mapMenues div[data-menu= ${customData}]`).slideToggle().toggleClass('active').siblings().fadeOut().removeClass('active');
        
    })

    // (2) By clicking on window
    $(window).on('click', function(e) {

        if (!$('.map .active').is(e.target) && $('.map .active').has(e.target).length == 0) {

            $('.mapNavBar .active').removeClass('active');
            $('.mapMenues .active').fadeOut(function() {
                $('.mainNavBar').removeClass('bgActive');
            }).removeClass('active');
            
        }
    })

    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 100) {
            $('.mainNavBar').addClass('bgActive');

        } else {
            $('.mainNavBar').removeClass('bgActive');
        }
    })

    // Showing and Hiding mapMenue

        $('.mapMenuToggler').on('click', () => {

            $('.mapMenu').slideToggle();
        })

    // Banner slider

        // (1) Setting the width & marginLeft of the thumbnails

    $('.banner .thumbnail').width($('.banner .slider-show').width() / 4);

    $('.banner .slider-thumbnails').width($('.slider-thumbnails').children().length * $('.banner .thumbnail').width());

    $(' .banner .slider-thumbnails').css('margin-left', '-=' + $('.banner .thumbnail').width());

    $(' .banner .banner-slider .thumbnail:odd').css({marginTop: 70})


        // (2) Setting order of the thumbnails

    for (let i =0; i < $('.banner .thumbnail').length; i++) {

        $('.banner .thumbnail').eq(i).css('order', i + 1)
        
    }
        
        // (2) Setting Margin of the thumbnails


        // (3) Sliding the thumbnails

    $('.banner .banner-slider .right').on('click', () => {

        let firstThumbnail = $('.banner .thumbnail[style*="order: 1"]');

        $('.banner .slider-thumbnails').animate({ marginLeft : '-=' + $('.banner .thumbnail').width()}, () => {
            firstThumbnail.siblings().css({order: '-=' + 1});
            firstThumbnail.css('order', $('.banner .thumbnail').length);
            $('.banner .slider-thumbnails').css({ marginLeft : '+=' + $('.banner .thumbnail').width()})
        }) 
        
    })

    $('.banner .banner-slider .left').on('click', () => {

        let lastThumbnail = $(`.banner .thumbnail[style*="order: ${$('.banner .thumbnail').length}"]`)

        
        $('.banner .slider-thumbnails').animate({ marginLeft : '+=' + $('.banner .thumbnail').width()}, () => {
            lastThumbnail.siblings().css({order: '+=' + 1});
            lastThumbnail.css({order: 1});
            $('.banner .slider-thumbnails').css({ marginLeft : '-=' + $('.banner .thumbnail').width()})
        });
         
    })

    // Banner 01 slider

        // (1) Setting the width & marginLeft of the thumbnails

    $('.banner01 .thumbnail').width($('.banner01 .slider-show').width() / 4);

    $('.banner01 .slider-thumbnails').width($('.slider-thumbnails').children().length * $('.banner01 .thumbnail').width());

    $(' .banner01 .slider-thumbnails').css('margin-left', '-=' + $('.banner01 .thumbnail').width());
    
    
    
        // (2) Setting order of the thumbnails
    
    for (let i =0; i < $('.banner .thumbnail').length; i++) {

        $('.banner01 .thumbnail').eq(i).css('order', i + 1)
        
    }
            
        // (3) Setting Margin of the thumbnails


        // (4) Sliding the thumbnails

    $('.banner01 .banner-slider .right').on('click', () => {

        let firstThumbnail = $('.banner01 .thumbnail[style*="order: 1"]');

        $('.banner01 .slider-thumbnails').animate({ marginLeft : '-=' + $('.banner01 .thumbnail').width()}, () => {
            firstThumbnail.siblings().css({order: '-=' + 1});
            firstThumbnail.css('order', $('.banner01 .thumbnail').length);
            $('.banner01 .slider-thumbnails').css({ marginLeft : '+=' + $('.banner01 .thumbnail').width()})
        }) 
        
    })
    
    $('.banner01 .banner-slider .left').on('click', () => {

        let lastThumbnail = $(`.banner01 .thumbnail[style*="order: ${$('.banner01 .thumbnail').length}"]`)

        
        $('.banner01 .slider-thumbnails').animate({ marginLeft : '+=' + $('.banner01 .thumbnail').width()}, () => {
            lastThumbnail.siblings().css({order: '+=' + 1});
            lastThumbnail.css({order: 1});
            $('.banner01 .slider-thumbnails').css({ marginLeft : '-=' + $('.banner01 .thumbnail').width()})
        });
            
    })

    // Sliding sites

    $('.carousel').carousel({
        interval: 2000
    })

    // open and closing chat
    $('.chat .welcome img').on('click', () => {

        $('.chatBody').fadeIn();
    })

    $('.chat .chatBody .head i').on('click', () => {

        $('.chatBody').fadeOut();
    })

    $('.chat .chatBody .speak i').on('click', () => {

        let speach = $('.chat .chatBody .speak input').val(),
            speachDiv = document.createElement('div'),
            speachP = document.createElement('p');

        speachP.append(speach);
        speachDiv.append(speachP);
        $('.chat .body .userTalk').append(speachDiv)
    })

  
    

    
        
    
})