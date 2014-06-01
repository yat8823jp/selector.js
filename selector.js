$(function(){

	var selector = "select#name"
	var elem_all = Array();

	activeSelect();

	function activeSelect(){
		//selected display "block"
		var content = $(selector).children("option:selected");
		content = "#"+content[0].className;
		$(content).css("display","block");
	}

	function changeActive(){
		//active foucus check
		var activeclass = $(selector).find("option").prop("selectedIndex", 0);

		//selected display "hidden"
		var selectall = $(selector).children("option");
		for(var i=0; i<selectall.length; i++){
			elem_all[i] = "#" + selectall[i].className;
			$(elem_all[i]).css("display","none");
		}

		activeSelect();
	}
	
	 document.querySelector(selector).addEventListener("change",changeActive,false);
});