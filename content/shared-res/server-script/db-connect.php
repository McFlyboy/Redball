<?php
	$servername = "sql31.webhuset.no";
	$username = "89882_redball_db";
	$password = "MaiLovelyWaifu<3";
	$dbname = "89882_redball_db";
	$connection = new mysqli($servername, $username, $password, $dbname);
	if($connection->connect_error) {
		die("Connection failed: " . $connection->connect_error);
	}
?>
