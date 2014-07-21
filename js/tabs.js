/*鼠标移到标签页自动切换*/

$.widget( "custom.tabs", {

	mts:"",


	
	_create: function(obj){

		var _self = this;
		this.mts = this.element.find(".tab-mt");

		this.mts.mouseover(function(){

			_self.element.find("div").removeClass("curr");

			$(this).parent("div").addClass("curr");
			
		})

	},


});


$(function(){
	$(".yq-tabs").tabs();
})

