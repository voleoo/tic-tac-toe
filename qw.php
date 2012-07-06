<?php
$db = new SQLiteDatabase('./db/tictactoe.db');
$allTable = $db->arrayQuery("SELECT * FROM game2 ORDER BY id");

echo '<table>';
foreach($allTable as $val){
echo '<tr>';
	echo '<td>';
		echo $val['id'];
	echo '</td>';

	echo '<td>';
		echo $val['player'];
	echo '</td>';

	echo '<td>';
		echo $val['time'];
	echo '</td>';
echo '<tr>';
}
echo '</table>';
?>