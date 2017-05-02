var start=0;
var end=100;
var measure=false;
while (measure==false){
	var mid=Math.round((start+end)/2);
	var reply=prompt("Was "+mid+" your number? Please say: Higher, Lower, or Yes");
	if (reply=="Higher"){
		start=Math.floor(mid);
		measure=false;
	}

	else if (reply=="Lower"){
		end=Math.floor(mid);
		measure=false;
	}
	else if (reply=="Yes"){
		alert("Thanks for playing");
		measure=true;
			}
}