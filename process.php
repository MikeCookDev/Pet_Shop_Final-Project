<?php

$servername = "localhost";
$username = "root";
$password = "pwdpwd";
$dbname = "pet_shop";


$db = new mysqli($servername, $username, $password, $dbname);

if (mysqli_connect_errno()) {
	echo 'Could not connect: ' . mysql_error();
} else {

	
	$firstname = ($_POST['aptfirstname']);
	$lastname = ($_POST['aptlastname']);
	$address = ($_POST['aptaddress']);
	$city = ($_POST['aptcity']);
	$state = ($_POST['aptstate']);
	$zip = ($_POST['aptzip']);
	$phonenumber = ($_POST['aptphonenumber']);
	$email = ($_POST['aptemail']);
	$petname = ($_POST['aptpetname']);
	$neutered = ($_POST['aptneutered']);
	$pettype = ($_POST['aptpettype']);
	$breed = ($_POST['aptbreed']);



	if ($neutered == "true") {
		$neutered = 1;
	} else {
		$neutered = 0;
	}

	if ($pettype == "Cat") {
		$breed = ""; 
	}


	$sql = "INSERT INTO grooming (Address, Breed, City, Email, FirstName, LastName, NeuteredOrSpayed, PetName, PetType, PhoneNumber, State, Zip) VALUES ('$address', '$breed', '$city', '$email', '$firstname', '$lastname', '$neutered', '$petname', '$pettype', '$phonenumber', '$state', '$zip')";

	if ($db->query($sql) === TRUE) {
		echo "success";	
	} else {
		echo "Error: " . $sql . "<br>" . $db->error;
	}

	$db->close();
}


?>