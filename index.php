  <?php 

    $thisPage = "Welcome";

    require 'includes/header.php';

  ?>

    <div class="jumbotron">
      <div class="container">
        <h1 id="override"></h1>
      </div>
    </div>

    <!-- Main Body -->

    <div class="container ">
      <div class="row">
        <div class="col-md-4">
          <img src="images/grooming.png" class="hidden-xs hidden-sm img-responsive center-block img-center" height="250" width="250" alt="responsive image">
          <h2 class="center">Grooming</h2>
          <p>Visiting a Sandy's Pet Shop Grooming Salon for regular baths, nail trims and haircuts is crucial to your pet’s overall health and well-being.</p>
          <p class="center"><a class="btn btn-info" href="grooming.php" role="button">Give Us A Visit! &raquo;</a></p>
        </div>
        <div class="col-md-4">
          <img src="images/about.png" class="hidden-xs hidden-sm img-responsive center-block img-center" height="250" width="250" alt="responsive image">
          <h2 class="center">About Us</h2>
          <p>Sandy's Pet Shop in Claremont is a proud family owned store. If you love pets, you will love our store! Every imaginable premium pet supply, product, food and then some is available. If we don’t have it – we will get it for you.</p>
          <p class="center"><a class="btn btn-info" href="aboutus.php" role="button">Learn About Us &raquo;</a></p>
       </div>
        <div class="col-md-4">
          <img src="images/store.png" class="hidden-xs hidden-sm img-responsive center-block img-center" height="250" width="250" alt="responsive image">
          <h2 class="center">Location</h2>
          <p>We are located in the beautiful city of Claremont, proudly serving the communities of Claremont, La Verne, Pomona, San Dimas, Glendora, and Upland.</p>
          <p class="center"><a class="btn btn-info" href="location.php" role="button">Come Visit Us! &raquo;</a></p>
        </div>
      </div>
    </div>

  
  <?php require 'includes/footer.php'; ?>

