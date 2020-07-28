/* ---------- Footer Year Update ---------- */

var theYear = new Date().getFullYear();

$("#year").html(theYear);

/* ---------- Regular Expressions For Form Validations ---------- */

var reProperName = /^([A-Z][A-Za-z]+ )*[A-Z][A-Za-z']+$/;
var reEmail = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
var rePhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
var reZipCode = /^\d{5}(\-\d{4})?$/;
//var reUserName = /^[A-Za-z\d]{6,15}$/;
//var rePassword = /^[A-Za-z\d]{6,8}$/;


/* ---------- Contact Us Form ---------- */

/* Validate First and Last Names */

$("#fname, #lname").blur(function(){
if ($(this).val() == "") {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Required information.")
    $("#sendmessage").disabled = true;

} else if (!reProperName.test($(this).val())) {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Not a valid proper name.")
    $("#sendmessage").disabled = true;
} else {
    $(this).parent().removeClass("has-error");
    $(this).next("span").removeClass("glyphicon-remove");
    $(this).next("span").next().html("");
    $("#sendmessage").disabled = false;
};
});


/* Validate Email Address */

$("#email").blur(function(){
if ($(this).val() == "") {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Email address required.")
    $("#sendmessage").disabled = true;

} else if (!reEmail.test($(this).val())) {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Not a valid email address")
    $("#sendmessage").disabled = true;
} else {
    $(this).parent().removeClass("has-error");
    $(this).next("span").removeClass("glyphicon-remove");
    $(this).next("span").next().html("");
    $("#sendmessage").disabled = false;
};
});

/* Validate Message Body Address */


$("#message").blur(function(){
    if ($(this).val() == "") {
        $(this).parent().addClass("has-error");
        $(this).next("span").addClass("glyphicon-remove");
        $(this).next("span").next().html("Required information.")
        $("#requestbutton").disabled = true;
    }  else if ($(this).val().length < 5) {
        $(this).parent().addClass("has-error");
        $(this).next("span").addClass("glyphicon-remove");
        $(this).next("span").next().html("More information is required.")
        $("#requestbutton").disabled = true;
    } else if ($(this).val().length > 1000) {
        $(this).parent().addClass("has-error");
        $(this).next("span").addClass("glyphicon-remove");
        $(this).next("span").next().html("You typed " + $(this).val().length + " characters. Maximum message limit is 1000 characters.")
        $("#requestbutton").disabled = true;
    } else {
        $(this).parent().removeClass("has-error");
        $(this).next("span").removeClass("glyphicon-remove");
        $(this).next("span").next().html("");
        $("#requestbutton").disabled = false;
    };
});


function submitForm() {

var $firstName = $("#fname");
var $lastName = $("#lname");
var $email = $("#email");
var $message = $("#message");

function submitValidate(element) {
    $(element).parent().addClass("has-error");
    $(element).next("span").addClass("glyphicon-remove");
    $(element).next("span").next().html("Required information.")
};

if ($firstName.val() == "" || $lastName.val() == "" || $email.val() == "" || $message.val() == "") {
    
    $("#sendmessage").disabled = true;

    if ($firstName.val() == "") {
        submitValidate($firstName);
    };

    if ($lastName.val() == "") {
        submitValidate($lastName);
    };

    if ($email.val() == "") {
        submitValidate($email);
    };

    if ($message.val() == "") {
        submitValidate($message);
    };				
} else {
    sendForm();
}
}

/* SendForm via AJAX*/

function sendForm() {
    
$('#sendmessage').disabled = true;

var $firstName = $("#fname");
var $lastName = $("#lname");
var $email = $("#email");
var $message = $("#message");

var formdata = new FormData();
formdata.append("fname", $firstName.val());
formdata.append("lname", $lastName.val());
formdata.append("email", $email.val());
formdata.append("message", $message.val());	
var ajax = new XMLHttpRequest();
ajax.open("POST", "email_parser.php");
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        if (ajax.responseText == "success") {
            $('#mymodal').modal({show: true});
            $("#statusheader").innerHTML = "Message Status";		
            $("#status").html("Thank you, " + $firstName.val() + "! Your message has been sent!");						
            $firstName.val("");
            $lastName.val(""); 
            $email.val("");
            $message.val("");
            $("#sendmessage").disabled = false;		
        } else {
            $('#mymodal').modal({show: true});				
            $("#statusheader").html("Oops! There was an error...");				
            $("#status").html(ajax.responseText);
            $("#sendmessage").disabled = false;
        }
    }
}
ajax.send(formdata);
}

/* ---------- Request Appoinment Show Hide Breed ---------- */

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

/* ---------- Request Appoinment Blur Validations ---------- */



/* -- First, Last Names, Pet Name, City-- */

$("#aptfirstname, #aptlastname, #aptcity, #aptpetname").blur(function(){
if ($(this).val() == "") {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Required information.")
    $("#requestbutton").disabled = true;

} else if (!reProperName.test($(this).val())) {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Not a valid proper name.")
    $("#requestbutton").disabled = true;
} else {
    $(this).parent().removeClass("has-error");
    $(this).next("span").removeClass("glyphicon-remove");
    $(this).next("span").next().html("");
    $("#requestbutton").disabled = false;
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
    $("#requestbutton").disabled = true;
} else if (!reZipCode.test($(this).val())) {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Not a valid 5 digit zip code.")
    $("#requestbutton").disabled = true;
} else {
    $(this).parent().removeClass("has-error");
    $(this).next("span").removeClass("glyphicon-remove");
    $(this).next("span").next().html("");
    $("#requestbutton").disabled = false;
};
});



/* -- Phone -- */


$("#aptphonenumber").on('change',function() {
var $number = $(this).val();
$number = $number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
$(this).val($number);
});


$("#aptphonenumber").blur(function(){
if ($(this).val() == "") {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Required information.")
    $("#requestbutton").disabled = true;
} else if (!rePhone.test($(this).val())) {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Not a valid phone number.")
    $("#requestbutton").disabled = true;
} else {
    $(this).parent().removeClass("has-error");
    $(this).next("span").removeClass("glyphicon-remove");
    $(this).next("span").next().html("");
    $("#requestbutton").disabled = false;
};
});




/* -- Optional Email -- */

$("#aptemail").blur(function(){

if ($(this).val() != ""){ // this is so email can stay optional 
    if (!reEmail.test($(this).val())) {
        $(this).parent().addClass("has-error");
        $(this).next("span").addClass("glyphicon-remove");
        $(this).next("span").next().html("Not a valid email address.")
        $("#requestbutton").disabled = true;
    } else {
        $(this).parent().removeClass("has-error");
        $(this).next("span").removeClass("glyphicon-remove");
        $(this).next("span").next().html("");
        $("#requestbutton").disabled = false;
    }
} else {
    $(this).parent().removeClass("has-error");
    $(this).next("span").removeClass("glyphicon-remove");
    $(this).next("span").next().html("");
    $("#requestbutton").disabled = false;
}
})

/* -- Drop Down Options State, Pet Type, Breed -- */

$("#aptstate, #aptpettype, #aptbreed").blur(function(){

if ($(this).val() == "select") {
    $(this).parent().addClass("has-error");
    $(this).next("span").addClass("glyphicon-remove");
    $(this).next("span").next().html("Required information.")
    $("#requestbutton").disabled = true;

} else {
    $(this).parent().removeClass("has-error");
    $(this).next("span").removeClass("glyphicon-remove");
    $(this).next("span").next().html("");
    $("#requestbutton").disabled = false;
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
var $aptneutered = $("#aptneutered").is(':checked'); // ------ this is optional 

function submitValidate(element) {
    $(element).parent().addClass("has-error");
    $(element).next("span").addClass("glyphicon-remove");
    $(element).next("span").next().html("Required information.")
};


if (!$aptfirstname.val() || !$aptlastname.val() || !$aptaddress.val() || !$aptcity.val() || $aptstate.val() == "select" || !$aptzip.val()  || !$aptphonenumber.val() || !$aptpetname.val() || $aptpettype.val() == "select" || ($aptpettype.val() == "Dog" && $aptbreed.val() == "select")) {

    $("#requestbutton").disabled = true;

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
    
$('#requestbutton').disabled = true;

var aptfirstname = $("#aptfirstname").val();
var aptlastname = $("#aptlastname").val();
var aptaddress = $("#aptaddress").val();
var aptcity = $("#aptcity").val();
var aptstate = $("#aptstate").val();
var aptzip = $("#aptzip").val();
var aptphonenumber = $("#aptphonenumber").val();
var aptemail = $("#aptemail").val();
var aptpetname = $("#aptpetname").val();
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
formdata.append("aptneutered", aptneutered);
formdata.append("aptpettype", aptpettype);
formdata.append("aptbreed", aptbreed);
var ajax = new XMLHttpRequest();
ajax.open("POST", "process.php");
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
        if (ajax.responseText == "success") {
            $('#mymodal').modal({show: true});
            $("#statusheader").html("Appointment Status");		
            $("#status").html("Thank you, " + aptfirstname + "! Your appointment has been sent!");						
            $("#aptfirstname").val("");
            $("#aptlastname").val("");
            $("#aptaddress").val("");
            $("#aptcity").val("");
            $("#aptstate").val("");
            $("#aptzip").val("");
            $("#aptphonenumber").val("");
            $("#aptemail").val("");
            $("#aptpetname").val("");
            $("#aptneutered").prop('checked', false);
            $("#aptpettype").val("");
            $("#aptbreed").val("");
            $("#requestbutton").disabled = false;		
        } else {
            $('#mymodal').modal({show: true});				
            $("#statusheader").html("Uh-oh! It seems there was an error...");				
            $("#status").html(ajax.responseText);
            $("#requestbutton").disabled = false;
        }
    }
}
ajax.send(formdata);
}


