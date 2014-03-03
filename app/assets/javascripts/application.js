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
 /*!
 * Buttons helper for fancyBox
 * version: 1.0.5 (Mon, 15 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             buttons: {
 *                 position : 'top'
 *             }
 *         }
 *     });
 *
 */
(function ($) {
  //Shortcut for fancyBox object
  var F = $.fancybox;

  //Add helper object
  F.helpers.buttons = {
    defaults : {
      skipSingle : false, // disables if gallery contains single image
      position   : 'top', // 'top' or 'bottom'
      tpl        : '<div id="fancybox-buttons"><ul><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li></ul></div>'
    },

    list : null,
    buttons: null,

    beforeLoad: function (opts, obj) {
      //Remove self if gallery do not have at least two items

      if (opts.skipSingle && obj.group.length < 2) {
        obj.helpers.buttons = false;
        obj.closeBtn = true;

        return;
      }

      //Increase top margin to give space for buttons
      obj.margin[ opts.position === 'bottom' ? 2 : 0 ] += 30;
    },

    onPlayStart: function () {
      if (this.buttons) {
        this.buttons.play.attr('title', 'Pause slideshow').addClass('btnPlayOn');
      }
    },

    onPlayEnd: function () {
      if (this.buttons) {
        this.buttons.play.attr('title', 'Start slideshow').removeClass('btnPlayOn');
      }
    },

    afterShow: function (opts, obj) {
      var buttons = this.buttons;

      if (!buttons) {
        this.list = $(opts.tpl).addClass(opts.position).appendTo('body');

        buttons = {
          prev   : this.list.find('.btnPrev').click( F.prev ),
          next   : this.list.find('.btnNext').click( F.next ),
          play   : this.list.find('.btnPlay').click( F.play ),
          toggle : this.list.find('.btnToggle').click( F.toggle ),
          close  : this.list.find('.btnClose').click( F.close )
        }
      }

      //Prev
      if (obj.index > 0 || obj.loop) {
        buttons.prev.removeClass('btnDisabled');
      } else {
        buttons.prev.addClass('btnDisabled');
      }

      //Next / Play
      if (obj.loop || obj.index < obj.group.length - 1) {
        buttons.next.removeClass('btnDisabled');
        buttons.play.removeClass('btnDisabled');

      } else {
        buttons.next.addClass('btnDisabled');
        buttons.play.addClass('btnDisabled');
      }

      this.buttons = buttons;

      this.onUpdate(opts, obj);
    },

    onUpdate: function (opts, obj) {
      var toggle;

      if (!this.buttons) {
        return;
      }

      toggle = this.buttons.toggle.removeClass('btnDisabled btnToggleOn');

      //Size toggle button
      if (obj.canShrink) {
        toggle.addClass('btnToggleOn');

      } else if (!obj.canExpand) {
        toggle.addClass('btnDisabled');
      }
    },

    beforeClose: function () {
      if (this.list) {
        this.list.remove();
      }

      this.list    = null;
      this.buttons = null;
    }
  };

}(jQuery));



 /*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function ($) {
  //Shortcut for fancyBox object
  var F = $.fancybox;

  //Add helper object
  F.helpers.thumbs = {
    defaults : {
      width    : 50,       // thumbnail width
      height   : 50,       // thumbnail height
      position : 'bottom', // 'top' or 'bottom'
      source   : function ( item ) {  // function to obtain the URL of the thumbnail image
        var href;

        if (item.element) {
          href = $(item.element).find('img').attr('src');
        }

        if (!href && item.type === 'image' && item.href) {
          href = item.href;
        }

        return href;
      }
    },

    wrap  : null,
    list  : null,
    width : 0,

    init: function (opts, obj) {
      var that = this,
        list,
        thumbWidth  = opts.width,
        thumbHeight = opts.height,
        thumbSource = opts.source;

      //Build list structure
      list = '';

      for (var n = 0; n < obj.group.length; n++) {
        list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
      }

      this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
      this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

      //Load each thumbnail
      $.each(obj.group, function (i) {
        var href = thumbSource( obj.group[ i ] );

        if (!href) {
          return;
        }

        $("<img />").load(function () {
          var width  = this.width,
            height = this.height,
            widthRatio, heightRatio, parent;

          if (!that.list || !width || !height) {
            return;
          }

          //Calculate thumbnail width/height and center it
          widthRatio  = width / thumbWidth;
          heightRatio = height / thumbHeight;

          parent = that.list.children().eq(i).find('a');

          if (widthRatio >= 1 && heightRatio >= 1) {
            if (widthRatio > heightRatio) {
              width  = Math.floor(width / heightRatio);
              height = thumbHeight;

            } else {
              width  = thumbWidth;
              height = Math.floor(height / widthRatio);
            }
          }

          $(this).css({
            width  : width,
            height : height,
            top    : Math.floor(thumbHeight / 2 - height / 2),
            left   : Math.floor(thumbWidth / 2 - width / 2)
          });

          parent.width(thumbWidth).height(thumbHeight);

          $(this).hide().appendTo(parent).fadeIn(300);

        }).attr('src', href);
      });

      //Set initial width
      this.width = this.list.children().eq(0).outerWidth(true);

      this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
    },

    beforeLoad: function (opts, obj) {
      //Remove self if gallery do not have at least two items
      if (obj.group.length < 2) {
        obj.helpers.thumbs = false;

        return;
      }

      //Increase bottom margin to give space for thumbs
      obj.margin[ opts.position === 'top' ? 0 : 2 ] += ((opts.height) + 15);
    },

    afterShow: function (opts, obj) {
      //Check if exists and create or update list
      if (this.list) {
        this.onUpdate(opts, obj);

      } else {
        this.init(opts, obj);
      }

      //Set active element
      this.list.children().removeClass('active').eq(obj.index).addClass('active');
    },

    //Center list
    onUpdate: function (opts, obj) {
      if (this.list) {
        this.list.stop(true).animate({
          'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
        }, 150);
      }
    },

    beforeClose: function () {
      if (this.wrap) {
        this.wrap.remove();
      }

      this.wrap  = null;
      this.list  = null;
      this.width = 0;
    }
  }

}(jQuery));





    $(document).ready(function(){
      $(".fancybox").fancybox({
        
      openEffect      : 'elastic',
      closeBtn : true,
      helpers : {
        title:{ type : 'inside' },
        buttons : {},
        mouseWheel : true,
        thumbs : {
          width  : 75,
          height : 50,

        },  
        
        overlay : {
          css : {
            'background' : 'rgba(0,  139 ,139, 0.95)'
          }
        }
      },
 
            
      afterLoad: function () {
        this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + ' ' + this.title;
      },

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
