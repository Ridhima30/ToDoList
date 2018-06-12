//strike off todo
$("ul").on("click","li",function(){

	$(this).css("textDecoration","line-through");
});

//add todo
$("input[type='text']").keypress(function(event){

	if(event.which===13){
		var task=$(this).val();
		$(this).val("");
		$("ul").append("<li><button id='delete'>Delete</button> <button>Done</button>"+  task+"</li>")
	}
});

//remove todo
$("ul").on("click","#delete",function(){
	$(this).parent().fadeOut();
});