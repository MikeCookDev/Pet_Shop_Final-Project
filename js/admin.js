/* ---------- Regular Expressions For Frorm Validations ---------- */

var reProperName = /^([A-Z][A-Za-z]+ )*[A-Z][A-Za-z']+$/;
var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
var rePhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
var reZipCode = /^\d{5}(\-\d{4})?$/;
var reUserName = /^[A-Za-z\d]{6,15}$/;
var rePassword = /^[A-Za-z\d]{6,8}$/;


/* ---------- Admin Request Appoinment Show Hide Breed ---------- */

$(function(){
	$("breedselect").hide();

	$("#aptpettype").change(function(){
		var element = $(this).val();

		if (element == "Dog") {
			$("#breedselect").show();
		} else {
			$("#breedselect").hide();
			$("#aptbreed").val("select");
			$("#aptbreed").parent().removeClass("has-error");
			$("#aptbreed").next("span").removeClass("glyphicon-remove");
			$("#aptbreed").next("span").next().html("");
		};
	});
	
})

/* ---------- Admin Request Appoinment Blur Validations ---------- */



/* -- First, Last Names, Pet Name, City-- */

$("#aptfirstname, #aptlastname, #aptcity, #aptpetname").blur(function(){
	if ($(this).val() == "") {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Required information.")
		$("#newrequestbutton").disabled = true;

	} else if (!reProperName.test($(this).val())) {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Not a valid proper name.")
		$("#newrequestbutton").disabled = true;
	} else {
		$(this).parent().removeClass("has-error");
		$(this).next("span").removeClass("glyphicon-remove");
		$(this).next("span").next().html("");
		$("#newrequestbutton").disabled = false;
	};
});

/* -- Address -- */


$("#aptaddress").blur(function(){
		if ($(this).val() == "") {
			$(this).parent().addClass("has-error");
			$(this).next("span").addClass("glyphicon-remove");
			$(this).next("span").next().html("Required information.")
			$("#requestbutton").disabled = true;
		}  else {
			$(this).parent().removeClass("has-error");
			$(this).next("span").removeClass("glyphicon-remove");
			$(this).next("span").next().html("");
			$("#requestbutton").disabled = false;
		};
});

$("#aptaddress").on("change", function(){
	var $address = $(this).val();
	$address = $address.replace(/[^\w\s]/gi, "");
	$(this).val($address);
});


/* -- Zip -- */

$("#aptzip").blur(function(){
	if ($(this).val() == "") {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Required information.")
		$("#newrequestbutton").disabled = true;
	} else if (!reZipCode.test($(this).val())) {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Not a valid 5 digit zip code.")
		$("#newrequestbutton").disabled = true;
	} else {
		$(this).parent().removeClass("has-error");
		$(this).next("span").removeClass("glyphicon-remove");
		$(this).next("span").next().html("");
		$("#newrequestbutton").disabled = false;
	};
});



/* -- Phone -- */



$("#aptphonenumber").on('change',function() {
	var $number = $(this).val();
	$number = $number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
	$(this).val($number);

	$("#aptphonenumber").blur(function(){
		if ($(this).val() == "") {
			$(this).parent().addClass("has-error");
			$(this).next("span").addClass("glyphicon-remove");
			$(this).next("span").next().html("Required information.")
			$("#newrequestbutton").disabled = true;
		} else if (!rePhone.test($(this).val())) {
			$(this).parent().addClass("has-error");
			$(this).next("span").addClass("glyphicon-remove");
			$(this).next("span").next().html("Not a valid phone number.")
			$("#newrequestbutton").disabled = true;
		} else {
			$(this).parent().removeClass("has-error");
			$(this).next("span").removeClass("glyphicon-remove");
			$(this).next("span").next().html("");
			$("#newrequestbutton").disabled = false;
		};
	});
});
 



/* -- Optional Email -- */

$("#aptemail").blur(function(){

	if ($(this).val() != ""){ // this is so email can stay optional 
		if (!reEmail.test($(this).val())) {
			$(this).parent().addClass("has-error");
			$(this).next("span").addClass("glyphicon-remove");
			$(this).next("span").next().html("Not a valid email address.")
			$("#newrequestbutton").disabled = true;
		} else {
			$(this).parent().removeClass("has-error");
			$(this).next("span").removeClass("glyphicon-remove");
			$(this).next("span").next().html("");
			$("#newrequestbutton").disabled = false;
		}
	} else {
		$(this).parent().removeClass("has-error");
		$(this).next("span").removeClass("glyphicon-remove");
		$(this).next("span").next().html("");
		$("#newrequestbutton").disabled = false;
	}
})

/* -- Drop Down Options State, Pet Type, Breed -- */

$("#aptstate, #aptpettype, #aptbreed").blur(function(){

	if ($(this).val() == "select") {
		$(this).parent().addClass("has-error");
		$(this).next("span").addClass("glyphicon-remove");
		$(this).next("span").next().html("Required information.")
		$("#newrequestbutton").disabled = true;

	} else {
		$(this).parent().removeClass("has-error");
		$(this).next("span").removeClass("glyphicon-remove");
		$(this).next("span").next().html("");
		$("#newrequestbutton").disabled = false;
	};
});


/* ---------- Request Appoinment Validation Click without Fields filled In ---------- */


function submitApptRequest() {
	
	var $aptfirstname = $("#aptfirstname");
	var $aptlastname = $("#aptlastname");
	var $aptaddress = $("#aptaddress");
	var $aptcity = $("#aptcity");
	var $aptstate = $("#aptstate");
	var $aptzip = $("#aptzip");
	var $aptphonenumber = $("#aptphonenumber");
	var $aptpetname = $("#aptpetname");
	var $aptpettype = $("#aptpettype");
	var $aptbreed = $("#aptbreed");


	var $aptemail = $("#aptemail"); // ------ this is optional 
	var $aptpetage = $("#aptpetage"); // ------ this is optional 
	var $aptneutered = $("#aptneutered").is(':checked'); // ------ this is optional 
	
	function submitValidate(element) {
		$(element).parent().addClass("has-error");
		$(element).next("span").addClass("glyphicon-remove");
		$(element).next("span").next().html("Required information.")
	};


	if (!$aptfirstname.val() || !$aptlastname.val() || !$aptaddress.val() || !$aptcity.val() || $aptstate.val() == "select" || !$aptzip.val()  || !$aptphonenumber.val() || !$aptpetname.val() || $aptpettype.val() == "select" || ($aptpettype.val() == "Dog" && $aptbreed.val() == "select")) {

		$("#newrequestbutton").disabled = true;

		if (!$aptfirstname.val()) {
			submitValidate($aptfirstname);
		};

		if (!$aptlastname.val()) {
			submitValidate($aptlastname);
		};

		if (!$aptaddress.val()) {
			submitValidate($aptaddress);
		};

		if (!$aptcity.val()) {
			submitValidate($aptcity);
		};
	
		if ($aptstate.val() == "select") {
			submitValidate($aptstate);	
		};
		
		if (!$aptzip.val()) {
			submitValidate($aptzip);
		};

		if (!$aptphonenumber.val()) {
			submitValidate($aptphonenumber);
		};

		if (!$aptpetname.val()) {
			submitValidate($aptpetname);
		};

		if ($aptpettype.val() == "select") {
			submitValidate($aptpettype);
		};

		if ($aptpettype.val() == "Dog" && $aptbreed.val() == "select") {
			submitValidate($aptbreed);
		}

	} else { 
		sendRequest();
	};
}

/* ---------- Request Appoinment Send via Ajax ---------- */

function sendRequest() {
		
	$('#newrequestbutton').disabled = true;

	var aptfirstname = $("#aptfirstname").val();
	var aptlastname = $("#aptlastname").val();
	var aptaddress = $("#aptaddress").val();
	var aptcity = $("#aptcity").val();
	var aptstate = $("#aptstate").val();
	var aptzip = $("#aptzip").val();
	var aptphonenumber = $("#aptphonenumber").val();
	var aptemail = $("#aptemail").val();
	var aptpetname = $("#aptpetname").val();
	var aptpetage = $("#aptpetage").val();
	var aptneutered = $("#aptneutered").is(':checked');
	var aptpettype = $("#aptpettype").val();
	var aptbreed = $("#aptbreed").val();

	var formdata = new FormData();
	formdata.append("aptfirstname", aptfirstname);
	formdata.append("aptlastname", aptlastname);
	formdata.append("aptaddress", aptaddress);
	formdata.append("aptcity", aptcity);
	formdata.append("aptstate", aptstate);
	formdata.append("aptzip", aptzip);
	formdata.append("aptphonenumber", aptphonenumber);
	formdata.append("aptemail", aptemail);
	formdata.append("aptpetname", aptpetname);
	formdata.append("aptpetage", aptpetage);
	formdata.append("aptneutered", aptneutered);
	formdata.append("aptpettype", aptpettype);
	formdata.append("aptbreed", aptbreed);
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "process.php");
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (ajax.responseText == "success") {
				$('#mymodal').modal({show: true});
				$("#statusheader").html("New Appoinment Created");		
				$("#status").html("The appointment for " + aptfirstname + " " + aptlastname + " has been created!");						
				$("#aptfirstname").val("");
				$("#aptlastname").val("");
				$("#aptaddress").val("");
				$("#aptcity").val("");
				$("#aptstate").val("");
				$("#aptzip").val("");
				$("#aptphonenumber").val("");
				$("#aptemail").val("");
				$("#aptpetname").val("");
				$("#aptpetage").val("");
				$("#aptneutered").prop('checked', false);
				$("#aptpettype").val("");
				$("#aptbreed").val("");
				$("#newrequestbutton").disabled = false;		
			} else {
				$('#mymodal').modal({show: true});				
				$("#statusheader").html("Oops! There was an error...");				
				$("#status").html(ajax.responseText);
				$("#newrequestbutton").disabled = false;
			}
		}
	}
	ajax.send(formdata);
}


/* ---------- Admin Page Delete Request Function ---------- */

$(function(){
  $(document).on('click', '.delbutton', function(e){
    e.preventDefault();
    var element = $(this);
    var del_id = element.attr('id');
    var id_num = del_id.match(/\d+/);
    var info = 'id=' + id_num;
    if (confirm("Are you sure you want to delete this appointment request?")) {
      $.ajax({
        type: "POST", 
        url: "deleterecord.php",
        data: info, 
        success: function(response) {
          $("#"+del_id).parent().remove();
        }
      });
    }
    return false;
  });
});

/* ---------- Admin Page Edit Request Function ---------- */


$(function(){
  $(document).on('click', '.editbutton', function(e){
    clearFormErrors();
    e.preventDefault();
    var element = $(this);
    var edit_id = element.attr('id').match(/\d+/);

    var groomingid = edit_id; 
	var fname = $("#edit_fname_" + edit_id).html();
	var lname = $("#edit_lname_" + edit_id).html();
	var address = $("#edit_address_" + edit_id).html();
	var city = $("#edit_city_" + edit_id).html();
	var state = $("#edit_state_" + edit_id).html();
	var zip = $("#edit_zip_" + edit_id).html();
	var phonenumber = $("#edit_phonenumber_" + edit_id).html();
	var email = $("#edit_email_" + edit_id).html();
	var petname = $("#edit_petname_" + edit_id).html();
	var pettype = $("#edit_pettype_" + edit_id).html();
	var petage = $("#edit_petage_" + edit_id).html();
	var breed = $("#edit_breed_" + edit_id).html();
	var neutered = $("#edit_neutered_" + edit_id).html();

	$("#aptfirstname").val(fname);
	$("#aptlastname").val(lname);
	$("#aptaddress").val(address);
	$("#aptcity").val(city);
	$("#aptstate").val(state);
	$("#aptzip").val(zip);
	$("#aptphonenumber").val(phonenumber);
	$("#aptemail").val(email);
	$("#aptpetname").val(petname);
	$("#aptpetage").val(petage);
	
	if (neutered == "Yes") {
		$("#aptneutered").prop('checked', true);
	}else {
		$("#aptneutered").prop('checked', false);
	};

	$("#aptpettype").val(pettype);
	$("#aptbreed").val(breed);
	$("#aptgroomingid").val(groomingid);

	$("#adminappt").css("background-color", "#D8E3D3");
	$("#createheader").hide();
	$("#newrequestbutton").hide();
	$("#editheader").show();
	$("#savebutton").show();
	$("#cancelbutton").show();

	window.scrollTo(0,document.body.scrollHeight);
  });
});

 
/* ---------- Admin Page Save Changes Function ---------- */

$(function(){
  $(document).on('click', '.savebutton', function(e){

	$('#savebutton').disabled = true;

	var aptfirstname = $("#aptfirstname").val();
	var aptlastname = $("#aptlastname").val();
	var aptaddress = $("#aptaddress").val();
	var aptcity = $("#aptcity").val();
	var aptstate = $("#aptstate").val();
	var aptzip = $("#aptzip").val();
	var aptphonenumber = $("#aptphonenumber").val();
	var aptemail = $("#aptemail").val();
	var aptpetname = $("#aptpetname").val();
	var aptpetage = $("#aptpetage").val();
	var aptneutered = $("#aptneutered").is(':checked');
	var aptpettype = $("#aptpettype").val();
	var aptbreed = $("#aptbreed").val();
	var aptgroomingid = $("#aptgroomingid").val();

	var formdata = new FormData();
	formdata.append("aptfirstname", aptfirstname);
	formdata.append("aptlastname", aptlastname);
	formdata.append("aptaddress", aptaddress);
	formdata.append("aptcity", aptcity);
	formdata.append("aptstate", aptstate);
	formdata.append("aptzip", aptzip);
	formdata.append("aptphonenumber", aptphonenumber);
	formdata.append("aptemail", aptemail);
	formdata.append("aptpetname", aptpetname);
	formdata.append("aptpetage", aptpetage);
	formdata.append("aptneutered", aptneutered);
	formdata.append("aptpettype", aptpettype);
	formdata.append("aptbreed", aptbreed);
	formdata.append("aptgroomingid", aptgroomingid);
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "update.php");
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (ajax.responseText == "success") {
				$('#mymodal').modal({show: true});
				$("#statusheader").html("Update Information");		
				$("#status").html("The appointment for " + aptfirstname + " " + aptlastname + " has been updated!");						
				$("#aptfirstname").val("");
				$("#aptlastname").val("");
				$("#aptaddress").val("");
				$("#aptcity").val("");
				$("#aptstate").val("");
				$("#aptzip").val("");
				$("#aptphonenumber").val("");
				$("#aptemail").val("");
				$("#aptpetname").val("");
				$("#aptpetage").val("");
				$("#aptneutered").prop('checked', false);
				$("#aptpettype").val("");
				$("#aptbreed").val("");
				$("#adminappt").css("background-color", "#fff");
				$("#createheader").show();
				$("#newrequestbutton").show();
				$("#editheader").hide();
				$("#savebutton").hide();
				$("#cancelbutton").hide();
				$("#savebutton").disabled = false;		
			} else {
				$('#mymodal').modal({show: true});				
				$("#statusheader").html("Oops! There was an error...");				
				$("#status").html(ajax.responseText);
				$("#savebutton").disabled = false;
			}
		}
	}
	ajax.send(formdata);
  });
});

/* ---------- Admin Page Cancel Changes Function ---------- */

$(function(){
  $(document).on('click', '.cancelbutton', function(e){
    $("#aptfirstname").val("");
	$("#aptlastname").val("");
	$("#aptaddress").val("");
	$("#aptcity").val("");
	$("#aptstate").val("");
	$("#aptzip").val("");
	$("#aptphonenumber").val("");
	$("#aptemail").val("");
	$("#aptpetname").val("");
	$("#aptpetage").val("");
	$("#aptneutered").val("");
	$("#aptpettype").val("");
	$("#aptbreed").val("");
	$("#aptgroomingid").val("");

	$("#adminappt").css("background-color", "#fff");
	$("#createheader").show();
	$("#newrequestbutton").show();
	$("#editheader").hide();
	$("#savebutton").hide();
	$("#cancelbutton").hide();
	clearFormErrors();
  });
});

/* ---------- Clear Request Form Errors ---------- */

function clearFormErrors() {
	
	$("#newrequestbutton").disabled = false;
	
	var formElem = [
	"#aptfirstname",
	"#aptlastname",
	"#aptaddress",
	"#aptcity",
	"#aptstate",
	"#aptzip",
	"#aptphonenumber",
	"#aptemail",
	"#aptpetname",
	"#aptpetage",
	"#aptneutered",
	"#aptpettype",
	"#aptbreed",
	"#aptgroomingid",
	];

	for (var i = 0; i < formElem.length; i++) {
 		$(formElem[i]).parent().removeClass("has-error");
		$(formElem[i]).next("span").removeClass("glyphicon-remove");
		$(formElem[i]).next("span").next().html("");
	};
}