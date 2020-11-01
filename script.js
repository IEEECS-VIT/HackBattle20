$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        autoScrolling:true,
        sectionSelector: '.section',
        navigation: true,
        navigationPosition: 'left',
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
    $('#sponsors-link').click(function(){
        $('#fp-nav ul li:nth-child(7) a').click();
    });
    
});