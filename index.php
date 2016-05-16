<!DOCTYPE>
<?php
	$servername = "infs3202sem1.database.windows.net";
	$username = "A2DBSEM1";
	$password = "Assignment2";

	// Create connection
//	$conn = new mysqli($servername, $username, $password);
	
	// Check connection
	//if ($conn->connect_error) {
	  //  die("Connection failed: " . $conn->connect_error);
	//} 
	//echo "Connected successfully";
	
	//$sqldata = mysql_query("SELECT * FROM Table");

	//$rows = array();
	//while($r = mysql_fetch_assoc($sqldata)) {
  	//	$rows[] = $r;
	//}

//echo json_encode($rows);
	

	?>
<html>
	<head>
		<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<link rel="stylesheet" type="text/css" href="js/scripts.js">
		
		<!-- CSS & JQuery for Login and Registration Forms -->
		<link rel="stylesheet" href="css/forms.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
		<script src="js/formsJQ.js"></script>
		<script src="js/forms.js"></script>
		<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
	</head>
	<body>
		<div class="header">
			<!-- COPY THIS -->
			<div id="loginBar">
				<div id="btnRegister">Register</div>
				<div id="btnLogin">Log In/</div>
			</div>
		</div>
		
		<!--- REGISTER --->
	<div id = "register">
	<form class="pure-form pure-form-aligned">
    <fieldset>
		<h4 style="margin-top:10px">Register</h4>
		<div style="position:absolute;margin-top:-40px;margin-left:475px" id="closeFormRegister"> &#10006 </div>
		<hr>
        <div class="pure-control-group">
            <label for="name">Username</label>
            <input id="name" type="text" placeholder="Username">
        </div>

        <div class="pure-control-group">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Password">
        </div>

        <div class="pure-control-group">
            <label for="email">Email Address</label>
            <input id="email" type="email" placeholder="Email Address">
        </div>
		<hr>
        <div class="pure-controls">
            <a class="pure-button" href="#" id ="registerSubmit" style="margin-top:15px; margin-left:150px">Register</a>
        </div>
    </fieldset>
	</form>
	</div>
	<!--- END REGISTER --->
	<!--- LOG IN -->
	<div id = "login">
	<form class="pure-form pure-form-aligned">
    <fieldset>
			<h4 style="margin-top:10px">Log In</h4>
			<div style="position:absolute;margin-top:-40px;margin-left:475px" id="closeFormLogin"> &#10006 </div>
		<hr>
        <div class="pure-control-group">
            <label for="name">Username</label>
            <input id="name" type="text" placeholder="Username">
        </div>

        <div class="pure-control-group">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Password">
        </div>
		<br><br>
		<hr>
        <div class="pure-controls">
        <a class="pure-button" href="#" id ="loginSubmit" style="margin-top:15px; margin-left:150px">Submit</a>
        </div>
    </fieldset>
	</form>
	</div>
	<!--- END LOG IN --->
		<!-- upload form for images, working except for the json duplication check -->
		<form action="upload.php" method="post" enctype="multipart/form-data">
		    Select image to upload:
		    <input type="file" name="fileToUpload" id="fileToUpload">
			
		    <input type="submit" value="Upload Image" name="submit">
		</form>
		<table>
			<!-- Scale down img resolution, currently loads like a snail -->
			<tr> 
				<td> Image </td>
			</tr>
			<tr>
			<?php
				//Decodes and loads the images in the json file
				$string = file_get_contents('imgs.json');
				$json = json_decode($string, true);
				
				
													
				
				foreach ($json as $URL) {
					
					    
						
					foreach ($URL as $A) {
						//if ($A['alt'] == "Ravine"){
							//echo "<p> works </p>";
							//}
					//Creates tabled images for easier layout
					echo "<td> <img src='" . $A['ImgURL'] ."' alt='" . $A['alt'] ."' </td>";
					}}
					
					
				
				?>
				
				
				
			</tr>
		</table>

	</body>
</html>