<?php 

  $thisPage = "Grooming";

  require 'Includes/header.php';

  ?>

    <div class="container">
      <div class="row">
        <div class="col-md-6 hidden-xs hidden-sm">
          <img src="images/dogsl.png" class="img-responsive" alt="Dog Image">
        </div>
        <div class="col-md-6">
          <h2 class="center">Grooming</h2>
          <p class="groominginfo">Sandy's Pet Shop features a full-service organic grooming salon. For the safety of your pets and our groomers, we only use organic shampoos, conditioners, and supplies for naturally beautiful pets. Our organic grooming services are perfect for pets and people with sensitive skin, while safely enhancing the skin and coat of your pets.</p>
          <p class="groominginfo">We take pride in ensuring that your pet will have a good experience. This may mean we’ll take extra time with your pet to gain their trust. We will not force a procedure on a pet.</p>
        </div>
      </div>
      <hr>
      <div class="row center">
        <h2>Grooming Services</h2>
      </div>
      <div class="row">
        <div class="col-sm-4">
          <h3>Fresh &amp; Clean</h3>
          <ul>
            <li>Bubble Bath</li>
            <li>Nail Trimming</li>
            <li>Brushing and Storytime</li>
            <li>Ear Cleaning</li>
          </ul>
        </div>
        <div class="col-sm-4">
          <h3>Up Close Wash</h3>
          <ul>
            <li>Full Body Shave</li>
            <li>Bubble Bath</li>
            <li>Nail Trimming</li>
            <li>Ear Cleaning and Storytime</li>
          </ul>
        </div>
        <div class="col-sm-4">
        <h3>Extra Care Pampering</h3> 
          <ul>
            <li>No Shed Shampoo &amp; Conditioner Bath</li>
            <li>Nail Trimming</li>
            <li>Ear Cleaning and Storytime</li>
            <li>Extra Care Brushing</li>
            <li>Full Body Haircut &amp; Styling</li>
          </ul>     
        </div>  
      </div>
    </div>


<!-- Appointment Request -->


    <div class="container-fluid appointment">  
      <div class="container">    
        <div class="row">
          <h2 class="center">Appointment Request</h2>
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

            <div class="col-sm-12 text-center">                                                                             
                <div class="form-group">
                  <button id="requestbutton" type="submit" class="buttoncolor btn btn-lg ">Request Appointment</button>
                </div>
              </div>
            </form>
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

  <?php require 'Includes/footer.php'; ?>