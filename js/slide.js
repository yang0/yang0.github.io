$.widget( "custom.slide", {

	_slideTop: 0,
	obj:"",
	slideItem:"",
	liHeight:"",
	ctrlSpan:"",
	ctrl:"",
	slideTimer:"",
	slides:"",
	slideNum:1,

	options:{
		width:"",
		height:"",
		speed:"500",
		interval:"3000"
	},

	

	getSlideTop: function(){
		var top = $(this.slideItem).position().top;
		
		top = top - this.liHeight;
		if(top < 0-this.liHeight*(this.slides-1)){
			top  = 0;
		}

		return top;
	},

	goSlide: function(slideNum){
		this.slideNum = slideNum;
		this._slideTop = 0 - (slideNum-1)*this.options.height;
		this.animate();
		$(this.ctrlSpan).removeClass("curr");
		$(this.ctrlSpan[slideNum-1]).addClass("curr");
	},

	animate: function(){
		var _self = this;
		//alert("animate"+_self._slideTop);

		$(this.slideItem).animate({
		    top:  _self._slideTop,
		  }, 500, function() {
		  	_self._slideTop = _self.getSlideTop();
		  });
	},

	auto: function(parent){
		parent.slideNum++;
		if(parent.slideNum > parent.slides){
			parent.slideNum = 1;
		}
		parent.goSlide(parent.slideNum);
	},

	_create: function(obj){
		this.slideItem = this.element.find(".slide-items:first-child");
		this.ctrl = this.element.find(".slide-controls");
		this.ctrlSpan = this.element.find(".slide-controls span");
		this._slideTop = 0;
		this.slides = $(this.slideItem).children("li").length;


		this.element.width(this.options.width);
		this.element.height(this.options.height);
		this.element.find("li").height(this.options.height);
		this.ctrl.width(this.options.width-10);

		this.show();
	},


	show: function(){
		var _self = this;
		this.slideTimer = setInterval(function(){_self.auto(_self)},3000);

		var _self = this;

		$(this.ctrlSpan).mouseover(function(){
			var slideNum = parseInt($(this).html());
			_self.goSlide(slideNum);
		});

		this.element.hover(function(ev){
		    clearInterval(_self.slideTimer);
		}, function(ev){
		    _self.slideTimer = setInterval(function(){_self.auto(_self)},3000);
		    console.log(_self.slideTimer);
		});

	},
  






});

