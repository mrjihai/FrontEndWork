$(document).ready(function() {
	$("#loginForm").validate({
		rules: {
			username: {
				required: true,
				minlength: 5,
				maxlength: 15
			},
			password: {
				required: true,
				minlength: 5
			}
		},
		messages: {
			username: {
				required: "username",
				minlength: "username should be longer than 5 letters",
				maxlength: "username should be shorter than 15 letters"
			},
			password: {
				required: "password",
				minlength: "password should be longer than 5 letters"
			}
		},
		submitHandler:function() {
			ajaxForm();
		}
	});
	function ajaxForm(){
		var param = $("#loginForm").serialize();
		$.ajax({
			type:"post",
			url:"/login",
			data:param,
			dataType : "json",
			success:function(data){
				$(".message").find(".modal-body h4").text(data.data);
				if(data.code == "1"){
					$(".message").find(".modal-footer").html("<a class='btn btn-default' href='/blog'>Back</a>");
				}else{
					$(".message").find(".modal-footer").html("<a class='btn btn-default' data-dismiss='modal'>confirm</a>");
				}
			}
		});
	}
});
