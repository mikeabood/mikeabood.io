//start button for splash page
// make modal for better looking pop-ups
// swap out images on the site - album art - avatar
// make better questions
//change font on text



console.log("mike");

// function firstButton(firstButton.dataset.action); 
// function secondButton(secondButton.dataset.action); 

var bothButtons = firstButton && secondButton; 


var oldKanye = {
	name: "Kanye", 
	button1: true,
 	button2: null,
 	level: 1,
checkAnswer: function(action){
  console.log(action)
  	if(action === "level2"){
      this.level2()
}

 	else if(action === "die"){
    	this.die()
	}

  else if(action === "level3"){
    this.level3()
  }

    else if(action === "level4"){
    this.level4()
  }

      else if(action === "level5"){
    this.level5()
  }

      else if(action === "level6"){
    this.level6()
  }

        else if(action === "level7"){
    this.level7()
  }

          else if(action === "level8"){
    this.level8()
  }

       else if(action === "level1"){
    this.level1()
}
},

  die: function(){
    firstButton.innerHTML = "Restart"
    newQuestion.innerHTML = "Would you live to retry?"
    firstButton.dataset.action = "level1"
  },

    win: function(){
      //need to delete button(s)
    firstButton.innerHTML = "Do it again"
    newQuestion.innerHTML = "CONGRATULATIONS YE!!!"
    firstButton.dataset.action = "level1"
  },

   level1: function(){
    newQuestion.innerHTML = "You are overworked, sleep deprived, and exhausted, what do you do?"
    firstButton.innerHTML = "Quite delicious!"
    secondButton.innerHTML = "No"
    firstButton.dataset.action = "level2"
    secondButton.dataset.action = "level2"
  },

  level2: function(){
    newQuestion.innerHTML = "Do you like fish sticks?"
    firstButton.innerHTML = "Quite delicious!"
    secondButton.innerHTML = "No"
    firstButton.dataset.action = "level3"
    secondButton.dataset.action = "level3"
    bothButtons = alert("good job")
    document.getElementById("avKanye").src = "images/avatars/yeezus-av.jpg"
  },

  level3: function(){
    newQuestion.innerHTML = "You have the opportunity to do a collaboration album, who do you choose to do it with"
    firstButton.innerHTML = "Jay-z"
    secondButton.innerHTML = "Lupe Fiasco"
    firstButton.dataset.action = "level4"
    secondButton.dataset.action = "die"
     document.getElementById("avKanye").src = "images/avatars/throne-av.jpg"
},

 level4: function(){
    newQuestion.innerHTML = "What is the best combination on LYRICS/BEATS?"
    firstButton.innerHTML = "70/30"
    secondButton.innerHTML = "30/70"
    firstButton.dataset.action = "level5"
    secondButton.dataset.action = "die"
    document.getElementById("avKanye").src = "images/avatars/mbdtf-av.jpg"
},

 level5: function(){
    newQuestion.innerHTML = "You are looking to switch your music style up, do think it would be cool if you start using auto-tune?"
    firstButton.innerHTML = "Yes"
    secondButton.innerHTML = "No"
    firstButton.dataset.action = "die"
    secondButton.dataset.action = "level6"
    document.getElementById("avKanye").src = "images/avatars/808s-av.jpg"
},

 level6: function(){
    newQuestion.innerHTML = "It is the year 2009, the night of the VMA's, and Taylor Swift just won best video. In hindsight, Do you drink heavily before the show?"
    firstButton.innerHTML = "Yes"
    secondButton.innerHTML = "Yes"
    firstButton.dataset.action = "level7"
    secondButton.dataset.action = "level7"
    document.getElementById("avKanye").src = "images/avatars/graduation-av.jpg"
},

 level7: function(){
    newQuestion.innerHTML = "It is post Hurrican Katrina, you go on live tv with Mike Myers to raise funds for the victims, do you blurt out a controversial "
    firstButton.innerHTML = "Yes"
    secondButton.innerHTML = "No"
     firstButton.dataset.action = "level8"
    secondButton.dataset.action = "level8"
    document.getElementById("avKanye").src = "images/avatars/lateregistration-av.jpg"
},

 level8: function(){
    newQuestion.innerHTML = "Quick! What is your favorite color polo?!"
    firstButton.innerHTML = "Blue"
    secondButton.innerHTML = "Pink"
    firstButton.dataset.action = "win"
    secondButton.dataset.action = "win"
    document.getElementById("avKanye").src = "images/avatars/collegedropout-av.jpg"
}





}

var firstButton = document.getElementById("button-1")

firstButton.addEventListener('click' , function(e){
  oldKanye.checkAnswer(e.target.dataset.action)

});
//
var secondButton = document.getElementById("button-2")

secondButton.addEventListener('click' , function(e){
  oldKanye.checkAnswer(e.target.dataset.action)

});
// var newButton1 = document.getElementById("button-1")
var newQuestion = document.getElementsByClassName("question")[0]








