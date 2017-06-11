var preloader = (function(){
  
  'use-strict';
  
  // Vars
  var main = $('.main'),
      btn = $('.enter'),
      page = $('.page');
  
  
  return {
     
    run: function(){
      // show on load
      main.show();
      // apend and prepend html 
      main.prepend(this.tmpl.tl + this.tmpl.tr);
      main.append(this.tmpl.bl + this.tmpl.br);
      // on click open site
     this.click_btn();
    },
    
    
    tmpl:{
      'tl': '<span class="tl"></span>',
      'tr': '<span class="tr"></span>',
      'bl': '<span class="bl"></span>',
      'br': '<span class="br"></span>'
    },
    
    
    click_btn: function(){
      btn.on('click',function(){
        page.addClass('loaded');
        btn.addClass('hideThis');
        preloader.animations();
      });  
    },
    
    // for firefox i try in css but not work
    animations: function(){
      var tl = $('.loaded .tl'),
          tr = $('.loaded .tr'),
          bl = $('.loaded .bl'),
          br = $('.loaded .br');
      
      tl.delay(800).animate({top:'-100%',left:'-100%'},500);
      tr.delay(600).animate({top:'-100%',left:'100%'},500);
      bl.delay(400).animate({top:'100%',left:'100%'},500);
      br.delay(200).animate({top:'100%',left:'-100%'},500);
      btn.remove();
    }
  };
})(jQuery);

preloader.run();