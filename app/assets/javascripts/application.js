// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require 'jquery.jplayer'
//= require fancybox
//= require foundation
//= require_tree .
$(document).foundation();


$(document).ready(function() {
  $(".fancybox-button").fancybox({
    prevEffect    : 'none',
    nextEffect    : 'none',
    closeBtn    : false,
    helpers   : {
      title : { type : 'inside' },
      buttons : {}
    }
  });
});


    $(document).ready(function() {
      $(".fancybox").fancybox({
            afterShow: function() {
        $(".fancybox-title").wrapInner('<div />').show();
        
        $(".fancybox-wrap").hover(function() {
            $(".fancybox-title").show();
        }, function() {
            $(".fancybox-title").hide();
        });
    },
      openEffect      : 'elastic',
      helpers : {
        title:{
          type: 'over'
        },
        buttons : {},
        mouseWheel : true,
        thumbs : {
          width : 50,
          height : 50
        },
        overlay : {
          css : {
            'background' : 'rgba(58, 42, 45, 0.95)'
          }
        }
      },
                  afterLoad : function() {
                this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + ' ' + this.title ;
            }

    });
   });

$(function(){
  $('remove_button').click(function(){
    $(this).addClass('invisible').removeClass('visible')
  })
  $('.frame').each(function(){
    var $img = $(this).find('img');
    $(this).scrollTop(($img.height()-$(this).height())/2);
    $(this).scrollLeft(($img.width()-$(this).width())/2);
});
})
$(document).ready(function(){
    var preview = $(".upload-preview img");

    $(".file_field").change(function(event){
      $('#remove_button').addClass('visible').removeClass('invisible')
       var input = $(event.currentTarget);
       var file = input[0].files[0];
       var reader = new FileReader();
       reader.onload = function(e){
           image_base64 = e.target.result;
           preview.attr("src", image_base64);
       };
       reader.readAsDataURL(file);
    });
});

function validateFiles(inputFile) {
  var maxExceededMessage = "This file exceeds the maximum allowed file size (5 MB)";
  var extErrorMessage = "Only image file with extension: .jpg, .jpeg, .ico, .gif or .png is allowed";
  var allowedExtension = ["jpg", "jpeg", "gif", "png", "ico", "JPG", "JPEG", "GIF","PNG", "ICO"];
 
  var extName;
  var maxFileSize = $(inputFile).data('max-file-size');
  var sizeExceeded = false;
  var extError = false;
 
  $.each(inputFile.files, function() {
    if (this.size && maxFileSize && this.size > parseInt(maxFileSize)) {sizeExceeded=true;};
    extName = this.name.split('.').pop();
    if ($.inArray(extName, allowedExtension) == -1) {extError=true;};
  });
  if (sizeExceeded) {
    window.alert(maxExceededMessage);
    $(inputFile).val('');
  };
 
  if (extError) {
    window.alert(extErrorMessage);
    $(inputFile).val('');
  };
}



    $(document).ready(function(){
      $("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            m4a: "https://dl.dropboxusercontent.com/1/view/ztab997cp8gfc70/Public/local/music/3_infected_mushroom_-_i_wish_-_brutal_remix_by_skazi_%28zaycev.net%29.mp3",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
          });
        },
        swfPath: "/skin",
        supplied: "m4a, oga"
      });
    });                 

function dynamicBG(){

  var today  = new Date();
  var m = today.getMinutes();

if (m<15 )
{
    $('#container').addClass('bodystyle1');
}
else if (m>=15 && m<30)
{
    $('#container').addClass('bodystyle2');
}
else if (m>=30 && m<45)
{
    $('#container').addClass('bodystyle3');
}
else if (m>=45 && m<=59)
{
    $('#container').addClass('bodystyle4');
}
}
window.onload = dynamicBG;
