<!DOCTYPE html> 
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sandy's Pet Shop - Admin Appointment Control></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="css/admin.css">
  <script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
</head>

<body>

<header>
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="admin.php">Sandy's Pet Shop Admin</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#appointmentrequest">Create Appointment</a></li>
            <li><a href="index.php">Log Out</a></li>
          </ul>
        </div>
      </div>
    </nav>
</header>

<!-- Display Appointments from database -->


<div class="container-fluid">
  <h2 class="sub-header">Appointments</h2>
  

  <div class="container">
    <div class="row">

<?php 

    $servername = "localhost";
    $username = "root";
    $password = "pwdpwd";
    $dbname = "pet_shop";


    $db = new mysqli($servername, $username, $password, $dbname);

    if (mysqli_connect_errno()) {
      echo 'Could not connect: ' . mysqli_connect_error();
    } else {

      $query = "SELECT * FROM grooming";
      $result = $db->query($query);
      $numResults = $result->num_rows;

      if ($numResults == 0) {
        echo '<div class="col-sm-12">';
          echo "<h4>There are no appointments scheduled at this time.</h4>";
        echo "</div>";
      } else {

        while ($row = $result->fetch_assoc()) {
          echo '<div class="col-sm-6">';
            echo "<hr>";
            echo "<h5>Customer Information</h5>";
            echo '<p>Name: <span id="edit_fname_' .$row['GroomingID']. '">' .$row['FirstName']. '</span> <span id="edit_lname_' .$row['GroomingID']. '">' .$row['LastName']. '</span></p>';
            echo '<p>Address: <span id="edit_address_' .$row['GroomingID']. '">' .$row['Address']. '</span>, <span id="edit_city_' .$row['GroomingID']. '">' .$row['City']. '</span>, <span id="edit_state_' .$row['GroomingID']. '">' .$row['State']. '</span>, <span id="edit_zip_' .$row['GroomingID']. '">' .$row['Zip']. '</span></p>';
            echo '<p>Phone Number: <span id="edit_phonenumber_' .$row['GroomingID']. '">' .$row['PhoneNumber']. '</span></p>';
            echo '<p>Email: <span id="edit_email_' .$row['GroomingID']. '">' .$row['Email']. '</span></p>';
            echo "<h5>Pet Information</h5>";
            echo '<p>Pet Name: <span id="edit_petname_' .$row['GroomingID']. '">' .$row['PetName']. '</span></p>';
            echo '<p>Pet Type: <span id="edit_pettype_' .$row['GroomingID']. '">' .$row['PetType']. '</span></p>';
            echo '<p>Pet Age: <span id="edit_petage_' .$row['GroomingID']. '">' .$row['PetBirthday']. '</span></p>';
            echo '<p>Breed: <span id="edit_breed_' .$row['GroomingID']. '">' .$row['Breed']. '</span></p>';
            echo '<p>Neutered/Spayed: <span id="edit_neutered_' .$row['GroomingID']. '">' .$row['NeuteredOrSpayed']. '</span></p>';
            echo '<a href="#" class="editbutton" id=edit_"' . $row['GroomingID'] . '">Edit</a> | <a href="#" class="delbutton" id="del_' . $row['GroomingID'] . '">Delete Request' . '</a>';
            echo "</div>";

        } 
      }
    }

    $db->close();
?>

    </div>   
  </div>
</div>

<!-- Create and Edit Appointments --> 

  <div class="container-fluid appointment"> 
    <h2 id="createheader" class="sub-header">Schedule New Appointment </h2> 
    <h2 id="editheader" class="sub-header">Edit Scheduled Appointment</h2> 
      <div id="adminappt" class="container-fluid">    
        <div  class="row">
            <form method="post" id="appointmentrequest" onsubmit="submitApptRequest(); return false">
              
 <div class="row"> 
              <div class="col-sm-6">
                <div class="form-group has-feedback">
                  <label for="aptfirstname">First Name:</label>
                  <input type="text" class="form-control has-error" id="aptfirstname" name="aptfirstname">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>
                </div>
              </div>
              
              <div class="col-sm-6">                
                <div class="form-group has-feedback">
                  <label for="aptlastname">Last Name:</label>
                  <input type="text" class="form-control has-error" id="aptlastname" name="aptlastname">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>                  
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">              
                <div class="form-group has-feedback">
                  <label for="aptaddress">Address:</label>
                  <input type="text" class="form-control has-error" id="aptaddress" name="aptaddress">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>                  
                </div>
              </div>
              
              <div class="col-sm-6">                
                <div class="form-group has-feedback">
                  <label for="aptcity">City:</label>
                  <input type="text" class="form-control has-error" id="aptcity" name="aptcity">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>                  
                </div>
              </div>            
             
              <div class="col-sm-4">
                <div class="form-group has-feedback">
                  <label for="aptstate">State:</label>
                  <select class="form-control has-error" id="aptstate" name="aptstate">
                    <option value="select">Select State...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>                  
                </div>
              </div>

              <div class="col-sm-2">                  
                <div class="form-group has-feedback">
                  <label for="aptzip">Zip Code:</label>
                  <input type="number" class="form-control has-error" id="aptzip" name="aptzip">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>                  
                </div>
              </div>
            </div>

            <div class="row">                         
              <div class="col-sm-4">                
                <div class="form-group has-feedback">
                  <label for="aptphonenumber">Phone Number:</label>
                  <input type="tel" class="form-control has-error" id="aptphonenumber" name="aptphonenumber">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>
                </div>
              </div>
              
              <div class="col-sm-8">                
                <div class="form-group has-feedback">
                  <label for="aptemail">Email Address:</label>
                  <input type="email" class="form-control has-error" id="aptemail" name="aptemail">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>
                </div>
              </div>  
            </div>              

            <div class="row">
              <div class="col-sm-5">                
                <div class="form-group has-feedback">
                  <label for="aptpetname">Pet's Name:</label>
                  <input type="text" class="form-control has-error" id="aptpetname" name="aptpetname">
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>
                </div>
              </div>

              
              <div class="col-sm-4">              
                <div class="form-group clearfix">
                  <label>Is your pet neutered or spayed?</label>
                  <div class="checkbox">
                    <label for="aptneutered"><input type="checkbox" id="aptneutered" name="aptneutered" >Neutered/Spayed</label>
                  </div>
                </div>
              </div> 
            </div>

            <div class="row">
              <div class="col-sm-4">                
                <div class="form-group has-feedback">
                  <label for="aptpettype">Pet Type:</label>
                  <select class="form-control has-error" id="aptpettype" name="aptpettype">
                    <option value="select">Select Pet Type...</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                  </select>
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>
                </div> 
              </div>

              <div id="breedselect" class="col-sm-4">                
                <div class="form-group has-feedback">
                  <label for="aptbreed">Breed Type:</label>
                  <select class="form-control has-error" id="aptbreed" name="aptbreed">
                    <option value="select">Select Breed...</option>
                    <option value="Alaskan Malamute">Alaskan Malamute</option>
                    <option value="American Pit Bull Terrier">American Pit Bull Terrier</option>  
                    <option value="Australian Cattle Dog">Australian Cattle Dog</option>
                    <option value="Australian Shepherd">Australian Shepherd</option>
                    <option value="Basset Hound">Basset Hound</option>
                    <option value="Beagle">Beagle</option>
                    <option value="Bernese Mountain Dog">Bernese Mountain Dog</option>
                    <option value="Bichon Frise">Bichon Frise</option>
                    <option value="Bloodhound">Bloodhound</option>
                    <option value="Border Collie">Border Collie</option>
                    <option value="Boston Terrier">Boston Terrier</option>
                    <option value="Boxer">Boxer</option>
                    <option value="Bull Terrier">Bull Terrier</option>
                    <option value="Bulldog">Bulldog</option>
                    <option value="Cane Corso">Cane Corso</option>
                    <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Chow Chow">Chow Chow</option>
                    <option value="Dachshund">Dachshund</option>
                    <option value="Dalmatian">Dalmatian</option>
                    <option value="Doberman">Doberman</option>
                    <option value="English Cocker Spaniel">English Cocker Spaniel</option>
                    <option value="English Springer Spaniel">English Springer Spaniel</option>
                    <option value="French Bulldog">French Bulldog</option>
                    <option value="German Shepherd">German Shepherd</option>
                    <option value="German Shorthaired Pointer">German Shorthaired Pointer</option>
                    <option value="Golden Retriever">Golden Retriever</option>
                    <option value="Great Dane">Great Dane</option>
                    <option value="Greyhound">Greyhound</option>
                    <option value="King Charles Spaniel">King Charles Spaniel</option>
                    <option value="Labrador Retriever">Labrador Retriever</option>
                    <option value="Maltese">Maltese</option>
                    <option value="Miniature Pinscher">Miniature Pinscher</option>
                    <option value="Minature Schanauzer">Minature Schanauzer</option>
                    <option value="Pembroke Welsh Corgi">Pembroke Welsh Corgi</option>
                    <option value="Pointer">Pointer</option>
                    <option value="Pomeranian">Pomeranian</option>
                    <option value="Poodle">Poodle</option>
                    <option value="Pug">Pug</option>
                    <option value="Rottweiler">Rottweiler</option>
                    <option value="Sheltie">Sheltie</option>
                    <option value="Shiba Inu">Shiba Inu</option>
                    <option value="Shih Tzu">Shih Tzu</option>
                    <option value="Siberian Husky">Siberian Husky</option>
                    <option value="St Bernard">St. Bernard</option>
                    <option value="Staffordshire Bull Terrier">Staffordshire Bull Terrier</option>
                    <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                    <option value="Other">Other</option>
                  </select>
                  <span class="glyphicon form-control-feedback"></span>
                  <span class="validate-redlight"></span>
                </div>  
              </div>

              <div class="col-sm-2 hidden">                  
                <div class="form-group">
                  <label for="aptgroomingid">Grooming ID:</label>
                  <input type="number" class="form-control" id="aptgroomingid" name="aptgroomingid">
                </div>
              </div>              
            </div>

              <div class="col-sm-12 text-center">                                                                             
                <div class="form-group">
                  <button id="newrequestbutton" type="submit" class="buttoncolor btn btn-lg ">Create New Request</button>
                </div>
              </div>

            </form>

              <div class="col-sm-12 text-center">
                  <button id="cancelbutton" class="btn-danger btn btn-lg cancelbutton">Cancel Changes</button>
                  <button id="savebutton" type="submit" class="btn-success btn btn-lg savebutton">Save Changes</button>
              </div>
        </div>  
      </div>
  </div>


<!-- Contact Us Modal Send Success or Fail -->

<div class="modal fade" id="mymodal" role="dialog">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title" id="statusheader"></h4>
      </div>      
      <div class="modal-body">
        <span id="status"></span>       
      </div>
    </div>
  </div>
</div>


<div class="container-fluid">

  <footer>

    <hr>

    <a href="#">Back to top</a>

  </footer>
</div>

</body>
  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script src="js/admin.js"></script>

</html>
