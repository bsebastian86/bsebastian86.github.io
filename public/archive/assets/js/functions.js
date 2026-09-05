$(document).ready(function() {

  startSlider();
  SmoothScroll();
  StickyNav();
  MobileNav();
  AnimateElements();
  workBelt();
  workLoad();

});

sliderInt = 1;
sliderNext = 2;

function startSlider() {

    count = $(".quotes > .quote").size();
    
    loop = setInterval(function() {
        
        if(sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }
        
        var current = $('.quotes .quote:visible');
        
        var next = current.next().length ? current.next() : $('.quotes .quote:eq(0)');
        
        current.animate({top:"50px", opacity:"hide"}, 500);
        next.css({top:"-50px"});
        next.delay(300).animate({top:"0", opacity:"show"}, 500);
        
        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
        
    }, 6000);
    
}

function SmoothScroll() {

	$('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: target.offset().top
                }, 800);

                return false;
            }
        }
        
    });

}

function StickyNav() {

	var nav = $('.sticky-nav'),
        banner = $('header'),
        home = $('#home').offset().top,
        about = $('#about').offset().top,
        work = $('#work').offset().top,
        process = $('#process').offset().top,
        contact = $('#contact').offset().top;
    
    $(window).scroll(function() {
        
        // Off Canvas Menu from Top
        
        var windowpos = $(window).scrollTop();
        
        if (windowpos >= banner.outerHeight() - 50) {
            nav.removeClass("slide-menu");
        } else {
            nav.addClass("slide-menu");
        }

        // Active States

        var all_links = $('nav a'),
            home_link = $('nav a.home-link'),
            about_link = $('nav a.about-link'),
            work_link = $('nav a.work-link'),
            process_link = $('nav a.process-link'),
            contact_link = $('nav a.contact-link');

        if (windowpos >= home) {
            all_links.removeClass('active');
            home_link.addClass('active');
        }

        if (windowpos >= about - 50) {
            all_links.removeClass('active');
            about_link.addClass('active');
        }

        if (windowpos >= work - 50) {
            all_links.removeClass('active');
            work_link.addClass('active');
        }

        if (windowpos >= process - 50) {
            all_links.removeClass('active');
            process_link.addClass('active');
        }

        if (windowpos >= contact - 50) {
            all_links.removeClass('active');
            contact_link.addClass('active');
        }
        
    });

}

function MobileNav() {

    $('.menu-toggle').click(function() {

        $('.mobile-nav').toggleClass('mobile-menu');

    });

}

function AnimateElements() {

    $(window).scroll(function(event) {

        var windowpos = $(window).scrollTop() + $(window).height();

        var skills = $('.skills-container').offset().top;

        if (windowpos >= skills + 200) {
            $('.score-container div[class^="score-"]').removeClass('animate');
        } else {
            $('.score-container div[class^="score-"]').addClass('animate');
        }

        var process = $('.process-container').offset().top;

        if (windowpos >= process + 300) {
            $('.connect').removeClass('appear').clearQueue();
            $('.design').delay(200).queue(function() {
                $(this).removeClass('appear').clearQueue();
            });
            $('.develop').delay(400).queue(function() {
                $(this).removeClass('appear').clearQueue();
            });
            $('.maintain').delay(600).queue(function() {
                $(this).removeClass('appear').clearQueue();
            });
        } else if (windowpos < process) {
            $('.process').addClass('appear').clearQueue();
        }

    });

}

function workBelt() {

    $('.thumbnail').click(function() {
        $('.work-belt').css('left','-100%');
        $('.work-container').show();
    });

    $('.work-return').click(function() {
        $('.work-belt').css('left','0');
        $('.work-container').fadeOut(800);
    });

}

function workLoad() {

    $.ajaxSetup({ cache: true });

    $('.thumbnail').click(function() {

        var $this = $(this),
            newTitle = $this.data('title'),
            newFolder = $this.data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = 'work/'+ newFolder +'.html';

        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);

    })

}