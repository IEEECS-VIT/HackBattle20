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
