window.setInterval("getLastStep()", 300);


function getLastStep(){
	var url = '/ttt/ttt.php?getLastStep';
	var page = loadPage(url);
	if(page){
		var step = JSON.parse(page).step;
		//alert(getXorO(JSON.parse(page).id));
		
		//document.getElementById(step).firstChild.nodeValue = getXorO(JSON.parse(page).id);
		document.getElementById(step).innerHTML = getXorO(JSON.parse(page).id);
		whoWinner();
	}
}
function whoWinner(){
	var cell11 = document.getElementById('cell11').innerHTML;
	var cell12 = document.getElementById('cell12').innerHTML;
	var cell13 = document.getElementById('cell13').innerHTML;
	var cell21 = document.getElementById('cell21').innerHTML;
	var cell22 = document.getElementById('cell22').innerHTML;
	var cell23 = document.getElementById('cell23').innerHTML;
	var cell31 = document.getElementById('cell31').innerHTML;
	var cell32 = document.getElementById('cell32').innerHTML;
	var cell33 = document.getElementById('cell33').innerHTML;
	

		if((cell11 == cell12) && (cell12 == cell13)){
			if((cell11 == 'O') || (cell11 == 'X')){
				document.getElementById('cell11').style.fontSize = '200px';
				document.getElementById('cell12').style.fontSize = '200px';
				document.getElementById('cell13').style.fontSize = '200px';
				
				document.getElementById('cell11').style.background = '#00ff00';
				document.getElementById('cell12').style.background = '#00ff00';
				document.getElementById('cell13').style.background = '#00ff00';
			}
		}
		if((cell21 == cell22) && (cell22 == cell23)){
			if((cell21 == 'O') || (cell21 == 'X')){
				document.getElementById('cell21').style.fontSize = '200px';
				document.getElementById('cell22').style.fontSize = '200px';
				document.getElementById('cell23').style.fontSize = '200px';
				
				document.getElementById('cell21').style.background = '#00ff00';
				document.getElementById('cell22').style.background = '#00ff00';
				document.getElementById('cell23').style.background = '#00ff00';
			}
		}
		if((cell31 == cell32) & (cell32 == cell33)){
			if((cell31 == 'O') || (cell31 == 'X')){
				document.getElementById('cell31').style.fontSize = '200px';
				document.getElementById('cell32').style.fontSize = '200px';
				document.getElementById('cell33').style.fontSize = '200px';
				
				document.getElementById('cell31').style.background = '#00ff00';
				document.getElementById('cell32').style.background = '#00ff00';
				document.getElementById('cell33').style.background = '#00ff00';
			}
		}
		
		if((cell11 == cell21) && (cell21 == cell31)){
			if((cell11 == 'O') || (cell11 == 'X')){
				document.getElementById('cell11').style.fontSize = '200px';
				document.getElementById('cell21').style.fontSize = '200px';
				document.getElementById('cell31').style.fontSize = '200px';
				
				document.getElementById('cell11').style.background = '#00ff00';
				document.getElementById('cell21').style.background = '#00ff00';
				document.getElementById('cell31').style.background = '#00ff00';
			}
		}
		if((cell12 == cell22) && (cell22 == cell32)){
			if((cell12 == 'O') || (cell12 == 'X')){
				document.getElementById('cell12').style.fontSize = '200px';
				document.getElementById('cell22').style.fontSize = '200px';
				document.getElementById('cell32').style.fontSize = '200px';
				
				document.getElementById('cell12').style.background = '#00ff00';
				document.getElementById('cell22').style.background = '#00ff00';
				document.getElementById('cell32').style.background = '#00ff00';
			}
		}
		if((cell13 == cell23) && (cell23 == cell33)){
			if((cell13 == 'O') || (cell13 == 'X')){
				document.getElementById('cell13').style.fontSize = '200px';
				document.getElementById('cell23').style.fontSize = '200px';
				document.getElementById('cell33').style.fontSize = '200px';
				
				document.getElementById('cell13').style.background = '#00ff00';
				document.getElementById('cell23').style.background = '#00ff00';
				document.getElementById('cell33').style.background = '#00ff00';
			}
		}
		
		if((cell11 == cell22) && (cell22 == cell33)){
			if((cell11 == 'O') || (cell11 == 'X')){
				document.getElementById('cell11').style.fontSize = '200px';
				document.getElementById('cell22').style.fontSize = '200px';
				document.getElementById('cell33').style.fontSize = '200px';
				
				document.getElementById('cell11').style.background = '#00ff00';
				document.getElementById('cell22').style.background = '#00ff00';
				document.getElementById('cell33').style.background = '#00ff00';
			}
		}
		if((cell13 == cell22) && (cell22 == cell31)){
			if((cell13 == 'O') || (cell13 == 'X')){
				document.getElementById('cell13').style.fontSize = '200px';
				document.getElementById('cell22').style.fontSize = '200px';
				document.getElementById('cell31').style.fontSize = '200px';
				
				document.getElementById('cell13').style.background = '#00ff00';
				document.getElementById('cell22').style.background = '#00ff00';
				document.getElementById('cell31').style.background = '#00ff00';
			}
		}
}
function getXorO(id){
	if((id == 1)||(id == 3)||(id == 5)||(id == 7)||(id == 9)){
		return 'X';
	}
	if((id == 2)||(id == 4)||(id == 6)||(id == 8)||(id == 10)){
		return 'O';
	}
}


function loadPage(url){
	load = new XMLHttpRequest();
	load.open('GET', url, false);
	load.send(null);
	if(load.status == 200) {
	  return load.responseText;
	}
}



function handler(val){
	var url = '/ttt/ttt.php?step='+val.id;
	var result = loadPage(url);
	//alert(result);
	if(result){
		getLastStep();
	}
}
function newGame(){
	var url = '/ttt/ttt.php?newGame';
	loadPage(url);
	
	document.getElementById('cell11').innerHTML = '';
	document.getElementById('cell11').style.fontSize = '180px';
	document.getElementById('cell11').style.background = '#ff0000';
	document.getElementById('cell12').innerHTML = '';
	document.getElementById('cell12').style.fontSize = '180px';
	document.getElementById('cell12').style.background = '#ff0000';
	document.getElementById('cell13').innerHTML = '';
	document.getElementById('cell13').style.fontSize = '180px';
	document.getElementById('cell13').style.background = '#ff0000';
	document.getElementById('cell21').innerHTML = '';
	document.getElementById('cell21').style.fontSize = '180px';
	document.getElementById('cell21').style.background = '#ff0000';
	document.getElementById('cell22').innerHTML = '';
	document.getElementById('cell22').style.fontSize = '180px';
	document.getElementById('cell22').style.background = '#ff0000';
	document.getElementById('cell23').innerHTML = '';
	document.getElementById('cell23').style.fontSize = '180px';
	document.getElementById('cell23').style.background = '#ff0000';
	document.getElementById('cell31').innerHTML = '';
	document.getElementById('cell31').style.fontSize = '180px';
	document.getElementById('cell31').style.background = '#ff0000';
	document.getElementById('cell32').innerHTML = '';
	document.getElementById('cell32').style.fontSize = '180px';
	document.getElementById('cell32').style.background = '#ff0000';
	document.getElementById('cell33').innerHTML = '';
	document.getElementById('cell33').style.fontSize = '180px';
	document.getElementById('cell33').style.background = '#ff0000';
	//alert('hi');
}
