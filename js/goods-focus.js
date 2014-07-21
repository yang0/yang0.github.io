/*在商品详情页，显示经典的商品焦点图*/

$.widget( "custom.goodsFocus", {

	obj:"",
	sprites:"",
	stageImg:"",
	spriteNum:0,

	
	_create: function(obj){
		var _self = this;
		this.stageImg = this.element.find(".stage img");

		this.sprites = this.element.find(".sprites li");

		this.sprites.mouseover(function(){
			var imgStr = $(this).attr("goods-img");
			_self.stageImg.attr("src", imgStr);

			_self.sprites.removeClass("curr");
			$(this).addClass("curr");
			
		})

	},


});

$(function(){
	$(".goods-focus").goodsFocus();
})