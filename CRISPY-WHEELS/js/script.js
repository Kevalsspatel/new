$(document).ready(function(){
	$(".cont form").submit(function(event){
		
		
		event.preventDefault()
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		$.ajax({
       	url: "//formspree.io/crispywheelsauto2018@gmail.com",
       	method: "POST",
       	data: {
       		fname:fname,
       		lname:lname,
				  _replyto:email,
				  email:email,
				 	subject:subject
				 	_subject: 'Contact Submission Form'
       	},
       	dataType: "json"

    });
		$(".cont").hide()
		$("#submited").show()

	})
})
