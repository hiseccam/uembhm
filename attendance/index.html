<!DOCTYPE html>
<html>
<head>
	<title>Employee Attendance Portal</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>



<div class="login">
  <div class="login-triangle"></div>
  <h2 class="login-header">Mark Your Attendance Now</h2>
        <form method="post" action= "<?php echo htmlspecialchars($_SERVER[" PHP_SELF "]);?>" class="login-container"> 
            <!-- Employee ID :  -->
            <input type="text" name="empid" placeholder="Employee ID"> 
            <br> 
            <br>  
            <!-- Employee Unique PIN:  -->
            <input type="password" name="empin" placeholder="Employee PIN"> 
            <br> 
            <br> 
            <br> 
            <br> 
            <input type="submit" name="submit"
                   value="Submit"> 
        </form> 
    </div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

        <!-- <p id="tet"></p> -->
        <?php
        $servername = "localhost";
		$username = "root";
		$password = "LHmrP4D3qd4a";
		$dbname = "ChatAttendance";
		$val = "";

		$conn = new mysqli($servername, $username, $password, $dbname);
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}

		$empid = $empin = "";
		if ($_SERVER["REQUEST_METHOD"] == "POST") { 
			$empid = test_input($_POST["empid"]); 
			$empin = test_input($_POST["empin"]); 
	          // $review = test_input($_POST["review"]); 
	          // $level = test_input($_POST["level"]); 
	      }

	    $sql = "SELECT EmpPIN FROM authec WHERE EMPID = '$empid'";
	    $result = $conn->query($sql);
	    if ($result->num_rows > 0) {
	    // output data of each row
	    	while($row = $result->fetch_assoc()) {
	    		if($row["EmpPIN"] == $empin){
	    			//echo "ENTER";
	    			echo '<script type="text/JavaScript">  
	    			location.replace("https://www.changekaro.com/CaptAt.html");
	    			</script>' 
	    			;
	    			//return 1;
	    		}
	    		else{
	    			// echo "REGRET";
	    			//return 0;
	    		}
	        // echo "<br> PIN: ". $row["EmpPIN"]. "<br>";
	    }
	    } else {
	    	// echo "REGRETA";
	    	//return 0;
	    }
	    $conn->close();
		function test_input($data) { 
			$data = trim($data); 
			$data = stripslashes($data); 
			$data = htmlspecialchars($data); 
			return $data; 
		}
		?>
	

</body>
</html>