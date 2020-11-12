$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    sectionSelector: ".section",
    navigation: true,
    navigationPosition: "left",
  });
  var initWd=$(window).width();
  // console.log(initWd);

  $("#fp-nav ul li:nth-child(2) a").click();
  $("#fp-nav ul li:nth-child(1) a").click();

  $( window ).resize(function() {
    // $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
    // console.log(initWd);
    // console.log(window.innerWidth);
    if((window.innerWidth>920 && initWd<920) || (window.innerWidth<920 && initWd>920))
    {
      console.log("Reload");
      initWd=window.innerWidth;
      window.location.href = window.location.href;
      // location.reload();
    }
  });

  if (window.innerWidth <= 920) {
    $("#fp-nav").removeClass("left");
    $("#fp-nav").addClass("right");
  }
  if (window.innerWidth > 920) {
    $("#fp-nav").removeClass("right");
    $("#fp-nav").addClass("left");
  }

  $("#about-link").click(function () {
    $("#fp-nav ul li:nth-child(2) a").click();
  });
  $("#tracks-link").click(function () {
    $("#fp-nav ul li:nth-child(3) a").click();
  });
  $("#prizes-link").click(function () {
    $("#fp-nav ul li:nth-child(5) a").click();
  });
  $("#schedule-link").click(function () {
    $("#fp-nav ul li:nth-child(6) a").click();
  });
  $("#faq-link").click(function () {
    $("#fp-nav ul li:nth-child(7) a").click();
  });
  $("#sponsors-link").click(function () {
    $("#fp-nav ul li:nth-child(8) a").click();
  });
  $("#contact-link").click(function () {
    $("#fp-nav ul li:nth-child(9) a").click();
  });

  // For mobile sidebar
  $("#m-home-link").click(function () {
    $("#fp-nav ul li:nth-child(1) a").click();
    $('.closebtn').click();
  });
  $("#m-about-link").click(function () {
    $("#fp-nav ul li:nth-child(2) a").click();
    $('.closebtn').click();
  });
  $("#m-tracks-link").click(function () {
    $("#fp-nav ul li:nth-child(3) a").click();
    $('.closebtn').click();
  });
  $("#m-prizes-link").click(function () {
    $("#fp-nav ul li:nth-child(5) a").click();
    $('.closebtn').click();
  });
  $("#m-schedule-link").click(function () {
    $("#fp-nav ul li:nth-child(6) a").click();
    $('.closebtn').click();
  });
  $("#m-faq-link").click(function () {
    $("#fp-nav ul li:nth-child(7) a").click();
    $('.closebtn').click();
  });
  $("#m-sponsors-link").click(function () {
    $("#fp-nav ul li:nth-child(8) a").click();
    $('.closebtn').click();
  });
  $("#m-contact-link").click(function () {
    $("#fp-nav ul li:nth-child(9) a").click();
    $('.closebtn').click();
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
$(document).ready(function () {
  $("#day2").css('display','none');
  $("#day3").css('display','none');
  $("#d1").click(function () {
    $("#day1").css('display','block');
    $("#day1").css('opacity','1');
    $("#day2").css('opacity','0');
    $("#day2").css('display','none');
    $("#day3").css('opacity','0');
    $("#day3").css('display','none');
    $("#d1").addClass("active1");
    $("#d2").removeClass("active1");
    $("#d3").removeClass("active1");
  });
  $("#d2").click(function () {
    $("#day1").css('opacity','0');
    $("#day1").css('display','none');
    $("#day2").css('display','block');
    $("#day2").css('opacity','1');
    $("#day3").css('opacity','0');
    $("#day3").css('display','none');
    $("#d2").addClass("active1");
    $("#d1").removeClass("active1");
    $("#d3").removeClass("active1");
  });
  $("#d3").click(function () {
    $("#day1").css('opacity','0');
    $("#day1").css('display','none');
    $("#day2").css('opacity','0');
    $("#day2").css('display','none');
    $("#day3").css('display','block');
    $("#day3").css('opacity','1');
    $("#d3").addClass("active1");
    $("#d1").removeClass("active1");
    $("#d2").removeClass("active1");
  });
});
$(document).ready(function () {
    $("#m-day2").css('display','none');
    $("#m-day3").css('display','none');
    $("#m-d1").click(function () {
      $("#m-day1").css('display','block');
      $("#m-day1").css('opacity','1');
      $("#m-day2").css('opacity','0');
      $("#m-day2").css('display','none');
      $("#m-day3").css('opacity','0');
      $("#m-day3").css('display','none');
      $("#m-d1").addClass("active1");
      $("#m-d2").removeClass("active1");
      $("#m-d3").removeClass("active1");
    });
    $("#m-d2").click(function () {
      $("#m-day1").css('opacity','0');
      $("#m-day1").css('display','none');
      $("#m-day2").css('display','block');
      $("#m-day2").css('opacity','1');
      $("#m-day3").css('opacity','0');
      $("#m-day3").css('display','none');
      $("#m-d2").addClass("active1");
      $("#m-d1").removeClass("active1");
      $("#m-d3").removeClass("active1");
    });
    $("#m-d3").click(function () {
      $("#m-day1").css('opacity','0');
      $("#m-day1").css('display','none');
      $("#m-day2").css('opacity','0');
      $("#m-day2").css('display','none');
      $("#m-day3").css('display','block');
      $("#m-day3").css('opacity','1');
      $("#m-d3").addClass("active1");
      $("#m-d1").removeClass("active1");
      $("#m-d2").removeClass("active1");
  });

  $('.openbtn').click(function(){
    $('.openbtn').addClass('hide');
  });
  $('.closebtn').click(function(){
    $('.openbtn').removeClass('hide');
  });

});
// var burgerMenu = function() {

//     $('body').on('click', '.js-fh5co-nav-toggle', function(event){

//         event.preventDefault();

//         if ( $('#ftco-nav').is(':visible') ) {
//             $(this).removeClass('active');
//         } else {
//             $(this).addClass('active');
//         }

//     });

// };
// burgerMenu();

// var onePageClick = function() {

//     $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
//     event.preventDefault();

//     var href = $.attr(this, 'href');

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - 70
//     }, 500, function() {
//         // window.location.hash = href;
//     });
//     });

// };

// onePageClick();

// var carousel = function() {
//     $('.home-slider').owlCarousel({
//     loop:true,
//     autoplay: true,
//     margin:0,
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     nav:false,
//     autoplayHoverPause: false,
//     items: 1,
//     navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
//     responsive:{
//       0:{
//         items:1
//       },
//       600:{
//         items:1
//       },
//       1000:{
//         items:1
//       }
//     }
//     });
// };
// carousel();

// $('#dropdown04').on('show.bs.dropdown', function () {
//   console.log('show');
// });
function validateBeforeSend()
{
  var name=document.getElementById('m-contact_name').value;
  var mail=document.getElementById('m-mail').value;
  var body=document.getElementById('m-body').value;
  if(name==='' || name==='' || body==='')
    alert("Please fill all fields before submitting your message.");
  else
    sendMobileEmail();
}
function validateBeforeSend()
{
  var name=document.getElementById('contact_name').value;
  var mail=document.getElementById('mail').value;
  var body=document.getElementById('body').value;
  if(name==='' || name==='' || body==='')
    alert("Please fill all fields before submitting your message.");
  else
    sendEmail();
}
function sendEmail() {
  // var n=document.getElementById("name").value;
  var e = document.getElementById("mail").value;
  //var p=document.getElementById("phone").value;
  // var s=document.getElementById("sub").value;
  var b = document.getElementById("body").value;
  Email.send({
    SecureToken: "4aeccc00-2be8-49a1-a721-645bdd2a8622",
    To: "vithack.crisis@gmail.com",
    From: "vithack.crisis@gmail.com",
    Subject: "This is the subject",
    Body: "--->Body: \n" + b + "\n" + "--->E-Mail: " + e,
  }).then((message) => alert("mail has been sent sucessfully"));
}
function sendMobileEmail() {
  // var n=document.getElementById("name").value;
  var e = document.getElementById("m-mail").value;
  //var p=document.getElementById("phone").value;
  // var s=document.getElementById("sub").value;
  var b = document.getElementById("m-body").value;
  Email.send({
    SecureToken: "4aeccc00-2be8-49a1-a721-645bdd2a8622",
    To: "vithack.crisis@gmail.com",
    From: "vithack.crisis@gmail.com",
    Subject: "This is the subject",
    Body: "--->Body: \n" + b + "\n" + "--->E-Mail: " + e,
  }).then((message) => alert("mail has been sent sucessfully"));
}
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
// if(window.innerWidth<920)
// {
//   document.querySelector('#contact').addEventListener("wheel", function(){
//     document.querySelector("#fp-nav ul li:nth-child(1) a").click();
//   });
// }

// document.getElementById("contact-wrapper-mobile").addEventListener("wheel", loopBack); 
// var coll = document.getElementsByClassName("ques");
// var i;
var preloader= document.getElementById('loading');
function myFunction(){
    preloader.style.display='none';
    document.getElementById('fp-nav').style.display='block';
    document.getElementById('main').style.display='block';
}


