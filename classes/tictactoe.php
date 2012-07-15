<?php
class tictactoe extends SQLite3{
	var $gameID = false;
	var $sesid = false;
	var $step = false;
	var $tableMain = 'ttt';
	var $tableGame = 'game';

	function arrayQuery($sql){
		if(isset($sql)){
			$result = $this->query($sql);
			if($result){
				if($result->columnName(0)){
					while ($row = $result->fetchArray(SQLITE3_ASSOC)){
						$array[] = $row;
					}			
				}
				if(isset($array)){
					if(is_array($array)){
						return $array;
					}
					else{
						return false;
					}			
				}
				else{
					return true;
				}
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
	}

	function createTableGame(){
		$result = $this->arrayQuery("SELECT name FROM sqlite_master WHERE name='".$this->tableGame."'");
		if(!isset($result[0])){
			$sql_1 = "CREATE TABLE ".$this->tableGame." (id INTEGER PRIMARY KEY, player TEXT, step TEXT, time TEXT)";
			$this->arrayQuery($sql_1);
		}
	}
	function insertStep(){
		$this->createTableGame();
		
		$sql_1 = "SELECT player FROM ".$this->tableGame." ORDER BY id DESC LIMIT 1";
		$result_1 = $this->arrayQuery($sql_1);
		if(!isset($result_1[0]['player'])) $result_1[0]['player'] = false;
		if($result_1[0]['player'] != $this->sesid){
			$insertStep = "INSERT INTO ".$this->tableGame." (player, step, time) VALUES ('".$this->sesid."', '".$this->step."', '".time()."')";
		}
		else{
			return false;
		}
		
		$sql_2 = "SELECT step FROM ".$this->tableGame." WHERE step='".$this->step."'";
		$result_2 = $this->arrayQuery($sql_2);
		if(!isset($result_2[0]['step'])){
			$this->arrayQuery($insertStep);
			return $this->lastInsertRowid();
		}
		else{
			return false;
		}
	}
	
	function createTableMain(){
		$result = $this->arrayQuery("SELECT name FROM sqlite_master WHERE name='".$this->tableMain."'");
		if(!isset($result[0])){
			$sql_1 = "CREATE TABLE ".$this->tableMain." (id INTEGER PRIMARY KEY, playerFirst TEXT, playerSecond TEXT, winner TEXT)";
			$this->arrayQuery($sql_1);
		}
	}
	function getLostRow(){
		$this -> createTableMain();
		$result = $this->arrayQuery("SELECT * FROM ".$this->tableMain." ORDER BY id DESC LIMIT 1");
		if(isset($result[0])){
			return $result;
		}
		else{
			return false;
		}
	}
	function getGameID(){
		if(!$this->gameID){
			$result = $this->getLostRow();
			if($result){
				if($result[0]['playerSecond'] == ''){
					if($result[0]['playerFirst'] == $this->sesid){
						$sql = false;
					}
					else{
						$sql = "UPDATE ".$this->tableMain." SET playerSecond='".$this->sesid."' WHERE id='".$result[0]['id']."'";
					}
				}
				else{
					$sql = "INSERT INTO ".$this->tableMain." (playerFirst) VALUES ('".$this->sesid."')";
				}
			}
			else{
				$sql = "INSERT INTO ".$this->tableMain." (playerFirst) VALUES ('".$this->sesid."')";
			}
			
			if($sql){
				$this->arrayQuery($sql);
				$lastEditRow = $this->lastInsertRowid();
				if($lastEditRow){
					return $lastEditRow;
				}
				else{
					return $result[0]['id'];
				}
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
    }
}
?>