/*
 * JSelection Plugin
 * @author colizajt@gmail.com
 * @date 2013-11-24
 */
(function($,undefined){
	$.fn.extend({"JSelection":function(options){
        console.info(this.tagName);
		if(!(this&&this.tagName==="select")){
			return;
		}	
		
		//默认参数
		var defaults = {};
		
		var options = $.extend(defaults,options);
		//隐藏原控件
		$(this).hide();
		//创建视图
		_createView(select,options);
		
		function _createView(select,options){
			if(options.debug){
				$(options.debug).val("创建视图!");
			}
			var html = "<ul class='jselection-left-ul'>";
			$(select).find("option").each(function(){
				html += "<li>"+$(this).html()+"</li>"
			});
			html+="</ul>";
		}
		return this;
	}});
})(jQuery)