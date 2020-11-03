$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        autoScrolling:true,
        sectionSelector: '.section',
        navigation: true,
        navigationPosition: 'left',
    });

    if (window.innerWidth <= 920) {
        $('#fp-nav').removeClass('left');
        $('#fp-nav').addClass('right');
    }
    if (window.innerWidth > 920) {
        $('#fp-nav').removeClass('right');
        $('#fp-nav').addClass('left');
    }

    $('#about-link').click(function(){
        $('#fp-nav ul li:nth-child(2) a').click();
    });
    $('#tracks-link').click(function(){
        $('#fp-nav ul li:nth-child(3) a').click();
    });
    $('#prizes-link').click(function(){
        $('#fp-nav ul li:nth-child(5) a').click();
    });
    $('#schedule-link').click(function(){
        $('#fp-nav ul li:nth-child(6) a').click();
    });
    $('#faq-link').click(function(){
        $('#fp-nav ul li:nth-child(7) a').click();
    });
    $('#sponsors-link').click(function(){
        $('#fp-nav ul li:nth-child(8) a').click();
    });
    
    window.onresize = function() {
        if (window.innerWidth <= 920) {
            $('#fp-nav').removeClass('left');
            $('#fp-nav').addClass('right');
        }
        if (window.innerWidth > 920) {
            $('#fp-nav').removeClass('right');
            $('#fp-nav').addClass('left');
        }
    }
});
$(document).ready(function(){
    $("#day2").hide();
    $("#day3").hide();
    $("#d1").click(function(){
        $("#day1").fadeIn();
        $("#day2").fadeOut();
        $("#day3").fadeOut();
        $("#d1").addClass("active1");
        $("#d2").removeClass("active1");
        $("#d3").removeClass("active1");
        

    });
    $("#d2").click(function(){
        $("#day1").fadeOut();
        $("#day2").fadeIn();
        $("#day3").fadeOut();
        $("#d2").addClass("active1");
        $("#d1").removeClass("active1");
        $("#d3").removeClass("active1");

    });
    $("#d3").click(function(){
        $("#day1").fadeOut();
        $("#day2").fadeOut();
        $("#day3").fadeIn();
        $("#d3").addClass("active1");
        $("#d1").removeClass("active1");
        $("#d2").removeClass("active1");

    });

});
var burgerMenu = function() {

    $('body').on('click', '.js-fh5co-nav-toggle', function(event){

        event.preventDefault();

        if ( $('#ftco-nav').is(':visible') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');	
        }

        
        
    });

};
burgerMenu();


var onePageClick = function() {


    $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
    event.preventDefault();

    var href = $.attr(this, 'href');

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 70
    }, 500, function() {
        // window.location.hash = href;
    });
    });

};

onePageClick();


var carousel = function() {
    $('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:false,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
    });
};
carousel();

$('nav .dropdown').hover(function(){
    var $this = $(this);
    // 	 timer;
    // clearTimeout(timer);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
    $this.find('.dropdown-menu').addClass('show');
}, function(){
    var $this = $(this);
        // timer;
    // timer = setTimeout(function(){
        $this.removeClass('show');
        $this.find('> a').attr('aria-expanded', false);
        // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').removeClass('show');
    // }, 100);
});


$('#dropdown04').on('show.bs.dropdown', function () {
  console.log('show');
});

