<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
if (isset($_POST['EmpID'])) {
		# code...
		$EmpID = $_POST['EmpID'];
		$Latitude = $_POST['Latitude'];
		$Longitude = $_POST['Longitude'];
		$Image = $_POST['Image'];
		$link = mysqli_connect("localhost", "root", "LHmrP4D3qd4a", "ChatAttendance");
 
// Check connection
		if($link === false){
			die("ERROR: Could not connect. " . mysqli_connect_error());
		}
 
// Attempt insert query execution
		$sql = "INSERT INTO main (EmpID, Latitude, Longitude, Image) VALUES ('$EmpID', '$Latitude', '$Longitude', '$Image')";
		if(mysqli_query($link, $sql)){
			//echo "Records inserted successfully.";
			header('Location: thanks.html');
			exit;
		} 
		else{
			echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
		}
 
// Close connection
		mysqli_close($link);
	}
?>