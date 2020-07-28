<?php 

$servername = "localhost";
$username = "root";
$password = "pwdpwd";
$dbname = "pet_shop";


 $db = new mysqli($servername, $username, $password, $dbname);

if($_POST['id']) { 
	$id=$_POST['id']; 
	$id = $db->real_escape_string($id);
}

$del = "DELETE from grooming where GroomingID = " . $id . "";

$result = $db->query($del);

?>