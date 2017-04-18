var randomNumber = Math.floor(Math.random() *(( 120 - 19) +1 ) +19); //this is the bankroll/amount the player needs to hit.
var bankrollAmount  =[] //this is where the random number gets stored
var crystalAmount  =[] // this is the random number attributed to each one of the 4 crystals.. has to be differing numbers.
var currentCost = [] // this is the players current, in game, real time amount
var gameStartbutton = $(".btn-danger")
var clickable = $('.clickableImages')

var crystalNumber1
var crystalNumber2
var crystalNumber3
var crystalNumber4

function gameStart(){
	$(".btn-danger").on("click", function gameStart(){
		alert("Are you ready to buy some Math?? *Scratches arm furiously*");
		bankrollAmount.push([randomNumber]);	// generate random number
		console.log(randomNumber);
		$(".bankrollText").html("Your Bankroll: $" + randomNumber); //attribute random number to bankroll text
	});


		// generate random number
		//attribute random number to bankroll text


			// I want this to create 4 random numbers and push it to the crystal amount index. 
			//Then, the crystal images will be linked to one of the 4 indexes.
			// when you click on the image, the amount linked to it will add up.
			
			/*for (var i = 0; i < 4; i++){
			var crystalNumber = Math.floor(Math.random() * 12 + 1);
			console.log([crystalNumber]);
			crystalAmount.push(crystalNumber);
			//This for loop that I miraculously made work runs a for loop 4 times, and pushes that amount into the crystal array
			//now to link it to the crystals.....
			//clickable.setValue(crystalNumber[i])
			clickable[i].setAttribute("value", crystalAmount[i])*/

		 crystalNumber1 = Math.floor(Math.random() * 12 + 1);
			console.log(crystalNumber1);
			$('.loosePic').attr("value", crystalNumber1)

		 crystalNumber2 = Math.floor(Math.random() * 12 + 1);
			console.log(crystalNumber2);
			$('.loosePic').attr("value", crystalNumber2)

		 crystalNumber3 = Math.floor(Math.random() * 12 + 1);
			console.log(crystalNumber3);
			$('.loosePic').attr("value", crystalNumber3)

		 crystalNumber4 = Math.floor(Math.random() * 12 + 1);
			console.log(crystalNumber4);
			$('.loosePic').attr("value", crystalNumber4)
		}
		

		/*	$('.clickableImages').click(function imgClick() { 
 			alert("It Works")
 			currentcost.html().
 			$('.currentText').html("Your Current Cost: $" + $('.loosePic').attr('value') + 
 			$('.containerPic').attr('value') +$('.trayPic').attr('value')) + $('.baggiePic').attr('value')})


};
	/*console.log($('.loosePic').attr('value'))
	console.log($('.containerPic').attr('value'))
	console.log($('.trayPic').attr('value'))
	console.log($('.baggiePic').attr('value'))*/



gameStart();

//if currentcost === bankrollamount, user wins
//else if currentcost is < bankrollamount, try again. check hangman game logic
// user loses, possible RPG game kicks in. Game start button to try again.


		//make each of the 4 clickable pictures also have a random cost. for loop of 4?
		


// if currentCost === randomNumber/bankroll, player wins
	//gameStart
// else if currentCost is < than randomnumber/bankroll, continue playing
//	if over, player loses
	//gameStart. Would be cool to incorporate the SW RPG Game here...................
//
//


//function resetGame