<?php
include('./includes/startup.php');
include('./includes/config.php');
include('./classes/tictactoe.php');

//unset($_SESSION['gameID']);
if(isset($_GET['newGame'])){
	unset($_SESSION['gameID']);
	exit();
}

$tictactoe = new tictactoe($settings['SQLiteFile']);
$tictactoe->sesid = session_id();

if(!isset($_SESSION['gameID'])){
	$_SESSION['gameID'] = $tictactoe->getGameID();
}
$tictactoe->tableGame = 'game'.$_SESSION['gameID'];

if(isset($_GET['step'])){
	$tictactoe->step = $_GET['step'];
	echo json_encode($tictactoe->insertStep());
}

if(isset($_GET['getLastStep'])){
	$result = $tictactoe->arrayQuery("SELECT name FROM sqlite_master WHERE name='".$tictactoe->tableGame."'");
	if(isset($result[0])){
		$lastStep = $tictactoe->arrayQuery("SELECT * FROM ".$tictactoe->tableGame." ORDER BY id DESC LIMIT 1");
		if(isset($lastStep[0])){
			echo json_encode($lastStep[0]);
		}
		else{
			echo 'false';
		}
	}
}




//$result = $tictactoe->arrayQuery("SELECT * FROM ".$tictactoe->tableGame." ORDER BY id DESC");
//foreach ($result as $entry) {
 //  echo '<br /><br />id: ' . $entry['id'] .' player: ' . $entry['player'] . ' step: ' . $entry['step']. 'time: ' . $entry['time'];
//}
//$result = $tictactoe->arrayQuery('SELECT * FROM ttt ORDER BY id DESC');
//foreach ($result as $entry) {
//   echo '<br /><br />id: ' . $entry['id'] .' playerFirst: ' . $entry['playerFirst'] . ' playerSecond: ' . $entry['playerSecond']. 'winner: ' . $entry['winner'];
//}
?>