
function submitAnswers(){
	var total= 5;
	var score = 0;

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;



	for(var i =1 ; i<=total; i++){		

		if(eval("q" +i ) === null || eval("q" +i ) === ""){
			alert("you missed question "+ i);
			return false;
		}		
	}

	
	var answers=[ "b", "b", "a", "b", "c"];


	for(var i =1; i<=total; i++){

		if( eval("q" +i )=== answers[i-1]){
			score++;

		}
	}

	var postResults = document.getElementById("results");

	postResults.innerHTML = "<h1> Your Score is " + score + " out of " + total+ "</h1>"

	//alert(score);
	return false;	
}