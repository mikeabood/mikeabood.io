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
      	// this.level === 2, 
      	firstButton.innerHTML === "hello"
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


}

  


// var button1 = true;
// var button2 = false; 

var firstButton = document.getElementById("button-1")
var newButton1 = document.getElementById("button-1")


firstButton.addEventListener('click' , function(){
  oldKanye.checkAnswer()
});


var secondButton = document.getElementById("button-2")
secondButton.addEventListener('click' , function(){
	oldKanye.checkAnswer()

});

