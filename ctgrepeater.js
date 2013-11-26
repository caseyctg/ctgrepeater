/*--------------Copyright 2011 Casey Govero Design 
Feel free to use this plugin, but do not remove this header.

Contact me:
http://caseygovero.com or http://hardwiredmedia.com

version:
ctgrepeater-1.0	
----------------------*/

(function($){  

$.fn.ctgrepeater = function(options) {  
      
 var settings = $.extend( {
      'timelength'  : 5000,
	  'captioneffects':'slow',
	  'repeatclass':'.repeat'
    }, options);  
    
return this.each(function() { 
//define defaults if value is not present 
if (typeof options.timelength === "undefined" || options.timelength===null) options.timelength = 5000;
if (typeof options.captioneffects === "undefined" || options.captioneffects ===null) options.captioneffects = 'slow';
if (typeof options.repeatclass === "undefined" || options.repeatclass ===null) options.repeatclass = '.repeat';
var selectorclass = jQuery(this);

InitHide();				
StartTimer();

var int;
var counter=0;
var SlideNum = selectorclass.find(options.repeatclass).length;
var countersubtractone;
	
function StartTimer(){
	int=self.setInterval(NextPicture, options.timelength);
}

function ResetTimer(){
	window.clearInterval(int);
}

function InitHide(){
	var SlideNum = selectorclass.find(options.repeatclass).length;

	//Hide images and captions greater than slides		  
	//jQuery(selectorclass+':gt(0)').hide();	
	selectorclass.find(options.repeatclass+":gt(0)").hide();	
	//Unhide the first slide, I have the css set to display:none; so it hides all slides upon loading. 
	selectorclass.find(options.repeatclass+":lt(1)").css("display", "block");

};//END init hide


function NextPicture(){
		//Move the slide counter ahead one
		counter = counter+1;
		
		//Set variable for figuring out which slide to hide
		countersubtractone = counter-1;
				
		//Hide Previous Caption
		selectorclass.find(options.repeatclass+":eq("+countersubtractone+")").hide();
		
		//Show Next caption
		selectorclass.find(options.repeatclass+":eq("+counter+")").show(options.captioneffects)
		
		//If We reach the slide end, reset to the first slide.
		
		if(parseFloat(counter)==parseFloat(SlideNum) ){
			
			counter=0;
			selectorclass.find(options.repeatclass+":eq(0)").show(options.captioneffects);
		};
		ResetTimer();
		StartTimer();
}//END next picture


 });  // End each function

};//END ctgslider

})(jQuery); //End Doc Ready