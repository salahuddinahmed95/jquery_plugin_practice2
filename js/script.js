
// jq plugin
$('.counter').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 100,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});


$(".count").each(function () {
  
   $(this)
  
  .prop("Counter", 0)
  
  .animate(
  
    {
  
      Counter: $(this).text(),
  
    },
  
    {
  
      duration: 4000,
  
      easing:"swing",
  
      step:function (now) {
  
        now = Number(Math.ceil(now)).toLocaleString('en');
  
                              $(this).text(now);
  
      },
  
    }
  
  );
  
  });


   var countdown = $("#countdown").countdown360({

   radius      : 60,

   seconds     : 100,

   fontColor   :'#FFFFFF',

   autostart   :false,

   onComplete  :function () { console.log('done') }

   });
   var countdown = $("#countdown").countdown360({
    radius: 15.5,
    strokeStyle:"#477050",
    strokeWidth: undefined,
    fillStyle:"#8ac575",
    fontColor:"#477050",
    fontFamily:"sans-serif",
    fontSize: undefined,
    fontWeight: 700,
    autostart:true,
    seconds: 10,
    label: ["second","seconds"],
    startOverAfterAdding:true,
    smooth:false,
    onComplete:function () {}

   });


   $(function(){

   $('[data-id=default]').dropdown();

   });

   $(function(){

$('[data-id=default]').dropdown({


 // or 'fade'

 animate:'slide',


 // animation speed in ms

 animateSpeed: 250,

  

  });

  });


// 

$('body').letItSnow({

  flake: {

    // Default: <a href="https://www.jqueryscript.net/tags.php?/Bootstrap/">Bootstrap</a> Icons
    html: '<i class="bi bi-snow3"></i>',

    // min snowflake size
    minSize: 5,

    // max snowflake size
    maxSize: 20,
    // color code or CSS class(es)
  background: "#007d79",
  }

    // smooth, less, medium or much
  quantity: "smooth", 
  
  // snowflake color
  colors: ["#DDDDDD", "#EEEEEE"],

  // falling velocity
  speed: 0.75, 

  // time in milliseconds
  refresh: 50,
  

});
  

document.addEventListener('DOMContentLoaded', function() {
  const stickToMeInstance = stickToMe({
    layer: '#stickLayer'      
  });
  // Add event listener to close button
  document.querySelector('.stick_close').addEventListener('click', stickToMeInstance.close);
});

const stickToMeInstance = stickToMe({

  // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed in ms
  fadespeed: 400,

  // Where detection of exit intent takes place
  trigger: ['top'],

  // min/max time
  maxtime: 0,
  mintime: 0,

  // Delay before showing popup when exit intent is detected
  delay: 0,

  // Interval between popups
  interval: 0,

  // Maximum times the popup will be triggered  
  // 0 = unlimited
  maxamount : 0,

  // Set cookie to prevent opening again on the same browser
  cookie : false,

  // Define the cookie expiration in seconds
  cookieExpiration: 0,

  // Clickon background to close the popup
  bgclickclose : true,

  // Press ESC to close the popup
  escclose : true,

  // Chrome disable
  disableleftscroll : true,

  // Enable debug mode
  debug: false,

  // Callback function
  onleave : function (e) {},   
  
});
