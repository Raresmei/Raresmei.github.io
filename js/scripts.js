// Smooth scrolling
$(document).ready(function($) {
  $(".scroll").click(function(event){		
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });
});

// Move to top 
$(document).ready(function() {		
  var defaults = {
    containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 1200,
    easingType: 'linear' 
  };
        
  $().UItoTop({ easingType: 'easeOutQuart' });
          
});

// Circles 

// Generate circles in the skills section
generateCircles = function () {
  var colors = [
    ['#6ed4c0', '#ffffff'], 
    ['#6ed4c0', '#ffffff'], 
    ['#6ed4c0', '#ffffff'], 
    ['#6ed4c0', '#ffffff'], 
    ['#6ed4c0', '#ffffff'], 
    ['#6ed4c0', '#ffffff']
  ];

  for (var i = 1; i <= 6; i++) {
    var child = document.getElementById('circles-' + i), percentage = 100 - (i * 5);
    
    Circles.create({
      id:         child.id,
      percentage: percentage,
      radius:     80,
      width:      10,
      number:   	percentage / 1,
      text:       '%',
      colors:     colors[i - 1]
    });
  }
}

// Check if the circles have been reached
circlesReached = function () {
  var windowBottomPosition = $(window).scrollTop() + $(window).height();
  return windowBottomPosition > $('.circle').offset().top + 50;
}

$(document).ready(function () {
  // Delay to generate correctly on refresh
  setTimeout(function() {
    // Generate circles if they should already be in the window
    if (circlesReached()) {
      generateCircles();
      var circlesGenerated = true;
    }
    else
      var circlesGenerated = false;

    // When the user scrolls or resizes the window
    $(window).on('resize scroll', function() {
  
      // If the circles haven't been generated already and they have been reached, generate them
      if (!circlesGenerated && circlesReached()) {
        generateCircles();
        circlesGenerated = true;
      }
    });
  
  }, 100); // Delay after document is ready

  
});

// Contact form
$(document).ready(function () {

  $("#contact-form").submit(function (event) {
    event.preventDefault();
    var returnMessage = $("#returnmessage");
    if (!$("#contact_name").val() || !$("#contact_email").val() || !$("#contact_message").val()) {
      returnMessage.hide().empty().removeClass().addClass("error").append("Please do not leave the required fields empty!").fadeIn(250);
      var flashTimes = 2;
      for (flashTime = 1; flashTime <= flashTimes; flashTime++) {
        returnMessage.fadeOut(250).fadeIn(250);
      }
    }
    else {
      var sent = false;
      returnMessage.hide().empty().removeClass().addClass("sending").append("Sending message...").fadeIn(250);
      $.post('https://contact-emailer.herokuapp.com/contactsubmit', $("#contact-form").serialize(), function (data) {
        
        if (data == "Message has been sent successfully! Thank you!") {
          $(".form-control").val("");
          sent = true;
        }

        if (sent) {
          returnMessage.hide().empty().removeClass().addClass("success").append(data).fadeIn(250);
        }
        else {
          returnMessage.hide().empty().removeClass().addClass("error").append(data).fadeIn(250);
        }

      }).fail( function(){ returnMessage.hide().empty().removeClass().addClass("error").append("Oops! Server could not be reached! Please try again later!").fadeIn(250) });

    }

  });
  
});

// Download button
$(document).ready(function() {
  $('a.downloadresume').click(function(e) {
    e.preventDefault();  
    window.open(
      'https://drive.google.com/uc?authuser=0&id=1bu8vcpz0QIYfWZT8KU6OkH8rov7VzBFx&export=download',
      '_parent' 
    );
  });
  $('a.viewresume').click(function(e) {
    e.preventDefault();  
    window.open(
      'https://drive.google.com/open?id=1bu8vcpz0QIYfWZT8KU6OkH8rov7VzBFx',
      '_blank' 
    );
  });
});
