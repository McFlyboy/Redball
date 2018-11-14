<?php
	$servername = "sql31.webhuset.no";
	$username = "89882_redball_db";
	$password = "MaiWaifu<3";
	$dbname = "89882_redball_db";
	$connection = new mysqli($servername, $username, $password, $dbname);
	if($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
	$sql = "SELECT * FROM `Leaderboard`";
	$result = $connection->query($sql);
	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()) {
			echo "<p>Name: " . $row["Name"] . " - Score: " . $row["Score"] . " - Date: " . $row["Date"] . "</p>";
		}
	}
	else {
		 echo "<p>0 results</p>";
	}
	$connection->close();
?>
