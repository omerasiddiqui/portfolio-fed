// NAV POPOUT

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    //Open menu
    $hamburger.toggleClass("is-active");
    // Close menu
      $('.menu-inner').toggleClass('hide');
      $('.menu bars').toggleClass('hide');
  });



/////////////////////////////////////////////////////////////////////

// TYPEWRITER

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


///////////////////////////////////////////////////////////////

// FLOATING SHAPES-- CIRCLE

function colorChange() {
	$('.circle').css('border-color', colorsSelected[activeSlide]);

}

////////////////////////////////////////////////////////////

// SMOOTH scroll

$('.smooth a').smoothScroll({
  offset: 100,
  speed: 1000
});

$('.header-text a').smoothScroll({
  offset: 100,
  speed: 1000
});

//////////////////////////////////////////////////////////////////

// CONTACT ANIMATION
let $contactForm = $('#contact');

$contactForm.waypoint(function() {
    $contactForm.addClass('animated fadeInDown show');
  }, {
    offset: '50%'
  });

/////////////////////////////////////////////////////////////////////////

// EMAIL VALIDATION

//  Email validation
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Submission function
function validate() {
  let email = $("#email").val();

// Change submit button to green if it validates and sends
  if (validateEmail(email)) {

    $("button").css("background-color", "green");

// Error message
  } else {
    $(".invalid").addClass("show");
  }
  return false;
}

// Run submission function
$("#submit").on("click", validate);
