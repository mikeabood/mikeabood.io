console.log("mike");

var oldKanye = {
	name: "Kanye", 
	button1: true,
 	button2: null,
 	level: 1,
	currentAnswer: '',
checkAnswer: function(){
  	if(this.button1 === true){
      	alert("that is correct!")
      	this.level = 2, 
      	firstButton.innerHTML = "hello"
      	newQuestion.innerHTML = "This is going to be the new question"
  	}

 	else if(this.button1 === false){
    	alert("nope!")
	}

  	else if(this.button2 === true){
  		alert("that is correct!")
	}
	
  	else if(this.button2 === false){
  		alert("nope!")
 }
}
  die: function(){
    firstButton.innerHTML = "Restart"
    newQuestion.innerHTML = "Would you live to retry?"
  }
  level2: function(){
    newQuestion.innerHTML = "Do you like fish sticks?"
    firstButton.innerHTML = "Quite delicious!"
    secondButton.innerHTML = "No"

  }

  level3: function(){
    newQuestion.innerHTML = "You have the opportunity to do a collaboration album, who do you choose to do it with"
    firstButton.innerHTML = "Quite delicious!"
    secondButton.innerHTML = "No"
}

 level4: function(){
    newQuestion.innerHTML = "What is the best combination on LYRICS/BEATS?"
    firstButton.innerHTML = "70/30"
    secondButton.innerHTML = "30/70"
}

 level5: function(){
    newQuestion.innerHTML = "You are looking to switch your music style up, do think it would be cool if you start using auto-tune?"
    firstButton.innerHTML = "Yes"
    secondButton.innerHTML = "No"
}

 level6: function(){
    newQuestion.innerHTML = "It is the year 2009, and the night of the VMA's. Do you drink heavily before it?"
    firstButton.innerHTML = "Yes"
    secondButton.innerHTML = "Yes"
}

 level7: function(){
    newQuestion.innerHTML = "It is post Hurrican Katrina, you go on live tv with Mike Myers to raise funds for the victims, do you blurt out a controversial "
    firstButton.innerHTML = "Yes"
    secondButton.innerHTML = "No"
}

 level8: function(){
    newQuestion.innerHTML = "Quick! What is your favorite color polo?!"
    firstButton.innerHTML = "Blue"
    secondButton.innerHTML = "Pink"
}






}



var firstButton = document.getElementById("button-1")
var newButton1 = document.getElementById("button-1")
var newQuestion = document.getElementsByClassName("question")[0]

// newQuestion.addEventListener('click' , function(){
//   oldKanye.checkAnswer()
// });

//how to click the first button and change question
firstButton.addEventListener('click' , function(){
  oldKanye.checkAnswer()
});


var secondButton = document.getElementById("button-2")
secondButton.addEventListener('click' , function(){
	oldKanye.checkAnswer()

});

