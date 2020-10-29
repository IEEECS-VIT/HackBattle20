// $(document).ready(function(){
//     var myFullpage = new fullpage('#fullpage', {
//         sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
//         // anchors: ['home', 'about', 'tracks', 'prizes','schedule','faq','faq2'],
//         // navigation: true,
//         // menu: '#menu',
//         // scrollingSpeed: 700
//     });

// });
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        autoScrolling:true,
        sectionSelector: '.section',
        navigation: true,
    });
    $('#home-link').click(function(){
        $('#fp-nav ul li:nth-child(1) a').click();
    });
    $('#about-link').click(function(){
        $('#fp-nav ul li:nth-child(2) a').click();
    });
    $('#tracks-link').click(function(){
        $('#fp-nav ul li:nth-child(3) a').click();
    });
    $('#prizes-link').click(function(){
        $('#fp-nav ul li:nth-child(4) a').click();
    });
    $('#schedule-link').click(function(){
        $('#fp-nav ul li:nth-child(5) a').click();
    });
    $('#faq-link').click(function(){
        $('#fp-nav ul li:nth-child(6) a').click();
    });
});